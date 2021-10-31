import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './NewTodoForm'


class NewToDoForm extends Component {
  constructor(props){
    super(props);
    this.state = {task: ""}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(evt){
    evt.preventDefault();
    // createTodo is the variable name we gave our create function from TodoList that we passed when we called newTodoForm component.
    this.props.createTodo({...this.state, id: uuidv4(), completed: false});
    this.setState({ task: ""});

  }
  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  render(){
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Task</label>
        <input type="text" placeholder="New Task" id="task" value={this.state.task} onChange={this.handleChange} name='task'></input>
        <button>Add Todo</button>
      </form>
    )
  }
}

export default NewToDoForm;