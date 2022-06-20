// Require Dependencies 
const mongoose = require('mongoose');

// Initializes Shortcut variable
const Schema = mongoose.Schema;

// Initializes Schema
const oldTaskSchema = new Schema({
    oldTask: Array
});


// Export Model
module.exports = mongoose.model('OldTask', oldTaskSchema)