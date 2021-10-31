import React, { Component } from 'react'
import NewToDoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css'

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {todos: []}
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  create(newTodo){
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  remove(id){
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    })
  }

  update(id, updatedTask){
    const updatedTodos = this.state.todos.map(todo => {
      if(todo.id === id){
        return {...todo, task: updatedTask}
      }
      return todo;
    })
    this.setState({ todos: updatedTodos })
  }
  toggleCompletion(id){
    const updatedTodos = this.state.todos.map(todo => {
      if(todo.id === id){
        return {...todo, completed: !todo.completed};
      }
      return todo;
    })
    this.setState({ todos: updatedTodos })


  }

  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo key={todo.id} task={todo.task} id={todo.id} removeTodo={this.remove} updateTodo={this.update} completed={todo.completed} toggleTodo={this.toggleCompletion}/>
    })
    return (
      <div className="TodoList">
        <h1>Dune To Do List!<span>Hello subtitile dune</span></h1>
        <ul>{todos}</ul>
        <NewToDoForm createTodo={this.create}/>

      </div>
    )

  }
}
export default TodoList;