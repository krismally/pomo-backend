const express = require("express");
const router = express.Router();
const { updatePomodoro, getPomodoro, setPomodoro } = require("../controllers/pomodoroController");

// Index and Create Route
router.route("/").get(getPomodoro).post(setPomodoro);
// Index Route
//  router.get('/', getPomodoro);
// Create Route
//  router.post('/', setPomodoro);

// Update Route
router.put("/:id", updatePomodoro);

module.exports = router;
