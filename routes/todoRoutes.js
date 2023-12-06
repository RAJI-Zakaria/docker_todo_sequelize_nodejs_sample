const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const { validateCreateTodo, validateDeleteTodo } = require('../validators/todoValidator');

// Routes with controller functions and validators as middleware
router.post('/', validateCreateTodo, todoController.createTodo);
router.get('/', todoController.getAllTodos);
router.delete('/:id', validateDeleteTodo, todoController.deleteTodo);

module.exports = router;
