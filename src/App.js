
import './App.css'
import React from 'react';
import CreateTodoList from './Todo/TodoList'
import AddTodo from './Todo/Addtodo';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {todos: [
      {id: 1, checked: false, title: "Have Breakfast"},
      {id: 2, checked: false, title: "Learn JS"},
      {id: 3, checked: false, title: "Have Dinner"},
      {id: 4, checked: false, title: "Learn React"},
    ]};
    this.toggleTodo = this.toggleTodo.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  toggleTodo(id){
    this.setState({todos:(this.state.todos.map((el)=>{
      if(el.id === id){
        el.checked = !el.checked;
      }
      return el;
    }))})
  }

  deleteItem(id){
    this.setState({todos:this.state.todos.filter(el=>el.id!==id)})
  }

    addTodo(title){
    this.setState({todos:this.state.todos.concat([{
      id: Date.now(),
      checked: false,
      title: title
    }])})
  }
  render(){
    return (
      <div className = "container">
          <h1 className = "headerText">My Todo List</h1>
          {this.state.todos.length === 0? 
            <h1>Nothing to do!</h1> : <CreateTodoList todos={this.state.todos} onToggle={this.toggleTodo} onDelete={this.deleteItem}/>
          }
          <AddTodo onCreate = {this.addTodo}/>
      </div>
    );
  }
}

export default App;
