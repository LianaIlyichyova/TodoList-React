import React from "react"


export default class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.todo = this.props.todo;
        this.onDelete = this.props.onDelete;
        this.index = this.props.index;
        this.onChange = this.props.onChange;
        this.handleCheckboxClick = this.handleCheckboxClick.bind(this)
    }

    handleCheckboxClick(){
        let className = "";
        if(this.todo.checked){
            className = "checkDone";
        }
        return className;
    }
    render(){
        return(
            <li>
                <span className = {this.handleCheckboxClick()}>
                <input type = "checkbox" onChange = {()=>this.onChange(this.todo.id)}/>
                <b>{this.index+1}</b>
                &nbsp;
                {this.todo.title}
                <button onClick = {()=>this.onDelete(this.todo.id)}>Delete</button>
                </span>
            </li>
        )
    }   
}