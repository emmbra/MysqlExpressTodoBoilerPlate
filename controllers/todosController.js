const connection = require('../config/connection');
const todoQueries = require('../models/todos/todoQueries');

module.exports = {

  getAllTodos: async (req, res) => {
    try {
      // destructure first element from response array
      const [todos] = await connection.query(todoQueries.findAllTodos);
      return res.status(200).json(todos);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  addTodo: async (req, res) => {
    const { task } = req.body;
    if (!task) {
      return res.json({ error: 'You must provide text for todos' });
    }
    try {
      const [response] = await connection.query(todoQueries.addTodo, { task });
      const [todos] = await connection.query(todoQueries.findTodoById, response.insertId);
      return res.json(todos[0]);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  getTodoById: async (req, res) => {
    const { id } = req.params;
    try {
      const [todos] = await connection.query(todoQueries.findTodoById, id);
      res.status(200).json(todos[0]);
    } catch (e) {
      res.status(403).json({ e });
    }
  },
  deleteTodoById: async (req, res) => {
    const { id } = req.params;
    try {
      await connection.query(todoQueries.deleteTodoById, id);
      // should return to me all of the todos from the database as a response
      const [todos] = await connection.query(todoQueries.findAllTodos);
      res.json(todos);
    } catch (e) {
      res.status(403).json({ e });
    }
  },
  updateTodoTextById: async (req, res) => {
    const { id } = req.params;
    const { task } = req.body;
    try {
      await connection.query(todoQueries.updateTodoTextById, [task, id]);
      const [todos] = await connection.query(todoQueries.findTodoById, id);
      res.json(todos[0]);
    } catch (e) {
      res.status(403).json({ e });
    }
  },
  updateTodoTextAndCompletedById: async (req, res) => {
    const { id } = req.params;
    const { task } = req.body;
    try {
      const [todos] = await connection.query(todoQueries.getTodoById, id);
      const foundTodo = todos[0];
      // eslint-disable-next-line max-len
      await connection.query(todoQueries.updateTodoTextAndCompletedById, [task, !foundTodo.completed, id]);
      const [todosUpdated] = await connection.query(todoQueries.getTodoById, id);
      res.json(todosUpdated[0]);
    } catch (e) {
      res.status(403).json({ e });
    }
  },

};
