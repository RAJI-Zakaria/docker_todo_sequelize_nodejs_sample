const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// Routes with controller functions
router.post('/', todoController.createTodo);
router.get('/', todoController.getAllTodos);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;
