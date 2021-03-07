import React from "react"

export default class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: ""
        }
        this.SubmitHandler = this.SubmitHandler.bind(this);
        this.onCreate=this.props.onCreate;
    }

    SubmitHandler(event){
        event.preventDefault()
        if(this.state.value.trim()){
            this.onCreate(this.state.value);
            this.setState({value : ""})
        }
    }
    render(){
        return (
            <form onSubmit = {this.SubmitHandler}>
                <input value = {this.state.value} onChange = {event=>this.setState({value:event.target.value})}></input>
                <button className="submit">Add</button>
            </form>
        )
    }
}