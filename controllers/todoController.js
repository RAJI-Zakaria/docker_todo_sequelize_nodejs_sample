const db = require("../db.js");

// Create Todo
const createTodo = async (req, res) => {
  try {
    const { name } = req.body;
    const todo = await db.Todo.create({ name });
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all Todos
const getAllTodos = async (req, res) => {
  try {
    const todos = await db.Todo.findAll();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Todo
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await db.Todo.destroy({ where: { id } });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createTodo,
  getAllTodos,
  deleteTodo,
};
