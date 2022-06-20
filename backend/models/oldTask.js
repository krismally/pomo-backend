// Require Dependencies 
const mongoose = require('mongoose');

// Initializes Shortcut variable
const Schema = mongoose.Schema;

// Initializes Schema
const oldTaskSchema = new Schema({
    oldTask: Array
});

// Creates Model
const OldTask = mongoose.model('OldTask', oldTaskSchema)

// Export Model
module.exports = OldTask;