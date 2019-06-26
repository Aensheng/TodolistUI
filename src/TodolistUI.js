import React from 'react'
import { Input, Button, List } from 'antd'

const TodolistUI = (props) =>{
    return(
        <div style={{marginTop:'8px',marginLeft:'8px'}}>
            <Input 
                value = {props.inputValue} 
                placeholder="ToDo Info" 
                style={{width: '188px',marginRight:'8px'}}
                onChange={props.handleInputChange}/>
            <Button type="primary" onClick={props.handleBtnClick}>Commit</Button>
            <List
                style={{marginTop:'8px', width:'188px'}}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => <List.Item onClick={()=>(props.handleItemClick(index))}>{item}</List.Item>}
            />
        </div>           
    )
}


export default TodolistUI