// Dependencies
const express = require("express");
const router = express.Router();
const { newTasks } = require("../controllers/newTaskController");
const { setTasks } = require("../controllers/newTaskController");
const { updateTasks } = require("../controllers/newTaskController");
const { deleteTasks } = require("../controllers/newTaskController");

// Index and Create Route
router.route("/").get(newTasks).post(setTasks);
// Index Route
//  router.get('/', newTasks);
// Create Route
//  router.post('/', setTasks);

//Update and Delete Route
router.route("/:id").put(updateTasks).delete(deleteTasks);
// Update Route
//  router.put('/:id', updateTasks);
// Delete Route
//  router.delete('/:id', deleteTasks);

module.exports = router;
