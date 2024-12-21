const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      required: true
    },
  },
  {timestamps: true}
);

module.exports = mongoose.model("Todos", todoSchema);