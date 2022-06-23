// Requires Dependencies
const mongoose = require("mongoose");

// Initializes Schema
const newTaskSchema = mongoose.Schema({
  text: String,
});

module.exports = mongoose.model("NewTask", newTaskSchema);
