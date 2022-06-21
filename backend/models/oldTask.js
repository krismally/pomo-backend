// Require Dependencies
const mongoose = require("mongoose");

// Initializes Schema
const oldTaskSchema = mongoose.Schema({
  oldTask: Array,
});

// Export Model
module.exports = mongoose.model("OldTask", oldTaskSchema);
