// get todos
const findAllTodos = 'SELECT * FROM todos;';
const findAllCompleted = 'SELECT * FROM todos WHERE completed = true;';
const findAllIncomplete = 'SELECT * FROM todos WHERE completed = false;';
const findTodoById = 'SELECT * FROM todos WHERE id = ?;';

// add todos
const addTodo = 'INSERT INTO todos SET ?;';

// delete todos
const deleteTodoById = 'DELETE FROM todos WHERE id = ?;';

// updating todos task field
const updateTodoCompletedById = 'UPDATE todos SET completed = ? WHERE id = ?;';
const updateTodoTextById = 'UPDATE todos SET task = ? WHERE id = ?;';

// updating todos task and completed
const updateTodoTextAndCompletedById = 'UPDATE todos SET task = ?, completed = ? WHERE id = ?;';
//
module.exports = {
  findAllTodos,
  findAllCompleted,
  findAllIncomplete,
  findTodoById,
  addTodo,
  deleteTodoById,
  updateTodoTextById,
  updateTodoCompletedById,
  updateTodoTextAndCompletedById,
};
