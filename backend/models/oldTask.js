// Require Dependencies
const mongoose = require("mongoose");

// Initializes Schema
const oldTaskSchema = mongoose.Schema({
  text: String,
  isComplete: Boolean,
});

// Export Model
module.exports = mongoose.model("OldTask", oldTaskSchema);
