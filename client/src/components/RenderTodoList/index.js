import React from 'react';

const RenderTodoList = props => {
  const renderTodoListItems = () => {
    if (props.items.length === 0) {
      return <h1>No todos yet!</h1>;
    } else {
      return props.items.map(todo => {
        return (
          <div key = {todo.id}>
            <li style={{ color: todo.completed ? 'blue' : 'red' }}>{todo.task}</li>
            <button onClick = { () => props.handleDelete(todo.id) }>Delete</button>
            <button onClick = { () => props.handleUpdateCompletedTodo(todo.id) }>Update</button>
          </div>
        )
      });
    }
  }
  return (
    <ul>
      { renderTodoListItems() }
    </ul>
  )
}

export default RenderTodoList;