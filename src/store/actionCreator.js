

export const InputChangeAction = (value) => ({
    type: 'change_input_value',
    value
})


export const CommitItemAction = () => ({
    type: 'commit_item'
})


export const DeleteItemAction = (index) => ({
    type: 'delete_item',
    index
})


export const InitListAction = (data) => ({
    type: 'init_list',
    data
})

export const GetInitList = () => ({
    type: 'get_init_list'
})


// export const GetTodoListAction = () => {
//     return (dispatch) => {
//         axios.get('http://www.mocky.io/v2/5d1366370e00005349b4a568').then((res) => {
//             const data = res.data
//             const action = InitListAction(data)
//             dispatch(action)
//         })
//     }
// }