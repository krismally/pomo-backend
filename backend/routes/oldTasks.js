// Dependencies
const express = require("express");
const router = express.Router();
const { oldTasks } = require("../controllers/oldTaskController");
const { setTasks } = require("../controllers/oldTaskController");
const { updateTasks } = require("../controllers/oldTaskController");
const { deleteTasks } = require("../controllers/oldTaskController");

// Index and Create Route
router.route("/").get(oldTasks).post(setTasks);
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
