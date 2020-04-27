const express = require('express');
// filename index.js is a special name in node.
// if we require folder in Node and don't specify file name
// Node will automatically look for an index.js inside of that folder
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// any route that goes to slash (/)
// have the router object inside of routes
// handle the routing for us
// app.use('/', routes) is same as:
app.use(routes);


// app.get('/api/todos', async (req, res) => {
//   const query = 'SELECT * FROM todos;';
//   try {
//     // destructure first element from response array
//     const [todos] = await connection.query(query);
//     res.status(200).json(todos);
//   } catch (e) {
//     res.status(403).json({ e });
//   }
// });

// app.get('/api/todos/completed', async (req, res) => {
//   const query = 'SELECT * FROM todos WHERE completed = 1;';
//   try {
//     const [todos] = await connection.query(query);
//     res.json(todos);
//   } catch (e) {
//     res.status(403).json({ e });
//   }
// });

// app.get('/api/todos/incomplete', async (req, res) => {
//   const query = 'SELECT * FROM todos WHERE completed = false;';
//   try {
//     const [todos] = await connection.query(query);
//     res.json(todos);
//   } catch (e) {
//     res.status(403).json({ e });
//   }
// });

// app.get('/api/todos/:id', async (req, res) => {
//   const query = 'SELECT * FROM todos WHERE ?;';
//   const { id } = req.params;
//   try {
//     const [todos] = await connection.query(query, { id });
//     res.status(200).json(todos[0]);
//   } catch (e) {
//     res.status(403).json({ e });
//   }
// });


// app.post('/api/todos', async (req, res) => {
//   const { task } = req.body;
//   if (!task) {
//     return res.json({ error: 'You must provide text for todos' });
//   }
//   const query = 'INSERT INTO todos SET ?;';
//   try {
//     const [response] = await connection.query(query, { task });
//     const query2 = 'SELECT * FROM todos WHERE ?;';
//     const [todos] = await connection.query(query2, { id: response.insertId });
//     res.json(todos[0]);
//   } catch (e) {
//     res.status(403).json({ e });
//   }
// });

// app.delete('/api/todos/:id', async (req, res) => {
//   const { id } = req.params;
//   // should delete a todo with that specific id from params AND
//   const query = 'DELETE FROM todos WHERE ?;';
//   try {
//     await connection.query(query, { id });
//     // should return to me all of the todos from the database as a response
//     const query2 = 'SELECT * FROM todos;';
//     const [todos] = await connection.query(query2);
//     res.json(todos);
//   } catch (e) {
//     res.status(403).json({ e });
//   }
// });

// patch is for updating 1 property of data
// put is for updating multiple properties of data
// app.patch('/api/todos/:id', async (req, res) => {
//   // pull out id from req.params
//   const { id } = req.params;
//   const { task } = req.body;
//   const query = 'UPDATE todos SET ? WHERE ?;';
//   try {
//     await connection.query(query, [{ task }, { id }]);
//     const query2 = 'SELECT * from todos WHERE ?;';
//     const [todos] = await connection.query(query2, { id });
//     res.json(todos[0]);
//   } catch (e) {
//     res.status(403).json({ e });
//   }
// });

// app.put('/api/todos/:id', async (req, res) => {
//   const { id } = req.params;
//   const { task } = req.body;
//   const getTodoById = 'SELECT * FROM todos WHERE ?;';
//   try {
//     const [todos] = await connection.query(getTodoById, { id });
//     const foundTodo = todos[0];
//     const updateTodoById = 'UPDATE todos SET ?, ? WHERE ?;';
// eslint-disable-next-line max-len
//     await connection.query(updateTodoById, [{ task }, { completed: !foundTodo.completed }, { id }]);
//     const [todosUpdated] = await connection.query(getTodoById, { id });
//     res.json(todosUpdated[0]);
//   } catch (e) {
//     res.status(403).json({ e });
//   }
// });


app.listen(PORT);
