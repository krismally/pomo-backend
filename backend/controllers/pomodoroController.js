const Pomodoro = require("../models/pomodoro");


// route: GET  /pomodoro
// description: Start
// access: public
const getPomodoro = (async(req, res) => {
    try {
        res.json(await Pomodoro.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// route: POST  /pomodoro
// description: Set task
// access: public
const setPomodoro = (async(req, res) => {
    try {
        res.json(await Pomodoro.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// route: UPDATE  /pomodoro/:id
// description: Update task
// access: private
const updatePomodoro = (async(req, res) => {
    try {
        res.json(await Pomodoro.findByIdAndUpdate(req.params.id, req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// Export
module.exports = {
  getPomodoro,
  setPomodoro,
  updatePomodoro,
};
