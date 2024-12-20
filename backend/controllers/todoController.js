const mongoose = require("mongoose");
const Todos = require('../dbTodos');

// Get Todos
const getTodos = async (req, res) => {
  try {
    const allTodos = await Todos.find({}).sort({createdAt: -1});
    res.status(200).send(allTodos);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

// Update Todo
const updateTodo = async (req, res) => {
  const {id} = req.params;
  try {
    // Check the id is valid
    if (mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`There is no todo with the ${id}`);
    }
    const deleteTodo = await Todos.findOneAndUpdate(todoID, update);
    if (!updateTodo) {
      return res.status(404).send(`There is no todo with the ${id}`);
    }
    res.status(200).send(updateTodos);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

// Delete Todo
const deleteTodo = async (req, res) => {
  const {id} = req.params;
  try {
    // Check the id is valid
    if (mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`There is no todo with the ${id}`);
    }
    const updateTodo = await Todos.findOneAndDelete({_id: id});
    res.status(200).send(deleteTodo);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  getTodos, 
  createTodo, 
  updateTodo, 
  deleteTodo
};