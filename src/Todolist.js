import React, { Component }from 'react'
import 'antd/dist/antd.css'
import store from './store/index'
import TodolistUI from './TodolistUI'
import { InputChangeAction, CommitItemAction, DeleteItemAction } from './store/actionCreator'


class Todolist extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemClick = this.handleItemClick.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    render() {
        return (
            <TodolistUI 
                inputValue={this.state.inputValue}
                handleInputChange = {this.handleInputChange}
                handleBtnClick = {this.handleBtnClick}
                handleItemClick = {this.handleItemClick}
                list={this.state.list}
            />
        )
    }

    handleStoreChange() {
        this.setState(store.getState())
    }

    handleInputChange(e) {
        const action = InputChangeAction(e.target.value)
        store.dispatch(action)
    }

    handleBtnClick() {
        const action = CommitItemAction()
        store.dispatch(action)
    }
    
    handleItemClick(index) {
        const action = DeleteItemAction(index)
        store.dispatch(action)
    }
}

export default Todolist
