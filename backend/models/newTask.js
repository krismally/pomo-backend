// Requires Dependencies
const mongoose = require("mongoose");

// Initializes Schema
const newTaskSchema = mongoose.Schema({
  text: String,
  isComplete: Boolean,
});

module.exports = mongoose.model("NewTask", newTaskSchema);
