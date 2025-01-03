const mongoose = require("mongoose");
const Todos = require("../dbTodos");

// Get Todos
const getTodos = async (req, res) => {
  try {
    const allTodos = await Todos.find({}).sort({ createdAt: -1 });
    res.status(200).send(allTodos);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// Create a new Todo
const createTodo = async (req, res) => {
  const dbTodo = req.body;
  try {
    const newTodo = await Todos.create(dbTodo);
    res.status(201).send(newTodo);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

// Update Todo
const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  try {
    // Check the id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`There is no todo with id: ${id}`);
    }
    
    const todoID = { _id: id };
    const update = { completed: completed };
    const updatedTodo = await Todos.findOneAndUpdate(todoID, update, { new: true });
    
    if (!updatedTodo) {
      return res.status(404).send(`There is no todo with id: ${id}`);
    }
    
    res.status(200).send(updatedTodo);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

// Delete Todo
const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    // Check the id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`There is no todo with id: ${id}`);
    }
    const deletedTodo = await Todos.findOneAndDelete({_id: id});
    res.status(200).send(deletedTodo);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  getTodos, 
  createTodo, 
  updateTodo, 
  deleteTodo,
};