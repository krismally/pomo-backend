// Requires Dependencies
const mongoose = require("mongoose");

// Initializes Schema
const newTaskSchema = mongoose.Schema({
  newTask: Array,
});

module.exports = mongoose.model("NewTask", newTaskSchema);
