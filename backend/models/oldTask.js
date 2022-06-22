// Require Dependencies
const mongoose = require("mongoose");

// Initializes Schema
const oldTaskSchema = mongoose.Schema({
  text: String,
});

// Export Model
module.exports = mongoose.model("OldTask", oldTaskSchema);
