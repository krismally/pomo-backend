const express = require("express");
const router = express.Router();
const { mainTimer } = require("../controllers/pomodoroController");
const { setTimer } = require("../controllers/pomodoroController");
const { updateTimer } = require("../controllers/pomodoroController");

// Index and Create Route
router.route("/").get(mainTimer).post(setTimer);
// Index Route
//  router.get('/', mainTimer);
// Create Route
//  router.post('/', setTimer);

// Update Route
router.put("/:id", updateTimer);

module.exports = router;
