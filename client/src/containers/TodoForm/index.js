import React, { Component } from 'react';
import Axios from 'axios';
import RenderTodoList from '../../components/RenderTodoList';

class TodoForm extends Component {
  state = {
    todos: [],
    todoInput: '',
    todoInputTwo: '',
  };

  handleInputChange = (event) => {
    // console.log(event.target.value);
    const { name, value } = event.target;
    // [name] is destructured from event
    this.setState({ [name]: value });
    // console.log(name);
    // this.setState({ todoInput: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    try {
      const { data } = await Axios.post('/api/todos', {
        task: this.state.todoInput,
      });
      const todos = [...this.state.todos, data];
      // console.log(data);
      this.setState({ todos, todoInput: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleDeleteTodo = async id => {
    try {
      const { data } = await Axios.delete(`/api/todos/${id}`);
      this.setState({ todos: data });
    } catch (error) {
      console.log(error);
    }
  }

  handleUpdateCompletedTodo = async id => {
    try {
      const { data } = await Axios.patch(`/api/todos/${id}`);
      this.setState({ todos: data })
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidMount() {
    // console.log("I'm inside componendDidMount");
    try {
      const { data } = await Axios.get("/api/todos");
      this.setState({ todos: data });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <RenderTodoList 
        items={this.state.todos} 
        handleDelete={this.handleDeleteTodo}
        handleUpdateCompletedTodo={this.handleUpdateCompletedTodo}
        />
        <form>
        <input
          name="todoInput"
          placeholder="enter a todo..."
          value={this.state.todoInput}
          onChange={this.handleInputChange}
        />
        <button onClick={(e) => this.handleSubmit(e)}>Add todo</button>
        <br></br>
        <br></br>
        <input
          name="todoInputTwo"
          placeholder="enter a todo2..."
          value={this.state.todoInputTwo}
          onChange={this.handleInputChange}
        />
      </form>
      </div>

    );
  }
}

export default TodoForm;
