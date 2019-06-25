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
