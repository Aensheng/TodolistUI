const defaultstate = {
    inputValue: '',
    list: []
}

//reduce can only aceept state No access to modify it
export default (state = defaultstate, action) => {
    if(action.type === 'change_input_value') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    if(action.type === 'commit_item') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }

    if(action.type === 'delete_item') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }

    if(action.type === 'init_list') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState
    }

     return state
}