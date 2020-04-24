const router = require('express').Router();

const todosController = require('../../../controllers/todosController');
// /api/todos prepended to every route inside of here
router.route('/')
  .get(todosController.getAllTodos)
  .post(todosController.addTodo);

router.route('/:id')
  .get(todosController.getTodoById)
  .delete(todosController.deleteTodoById)
  .patch(todosController.updateTodoTextById)
  .put(todosController.updateTodoTextAndCompletedById);

module.exports = router;
