
import React from "react"
import TodoItem from './TodoItem'

export default class CreateTodoList extends React.Component{
    render(){
        return(
            <ul>
                {
                    this.props.todos.map((el,i)=><TodoItem todo = {el} key = {el.id} index = {i} 
                    onChange = {this.props.onToggle} onDelete = {this.props.onDelete}/>)
                } 
            </ul>
        )
    }
}