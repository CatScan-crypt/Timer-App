// controllers/alarms.js

// This file contains the controllers for our alarms API.
// Each controller will handle a request to the API and return the appropriate response.

const Alarm = require('../models/alarm');

// Controller for getting all alarms
const getAllAlarms = (req, res) => {
Alarm.find({})
.then(alarms => res.json(alarms))
.catch(err => res.status(500).json({ error: err.message }));
}

// Controller for adding an alarm
const addAlarm = (req, res) => {
const newAlarm = new Alarm(req.body);
newAlarm.save()
.then(alarm => res.json(alarm))
.catch(err => res.status(400).json({ error: err.message }));
}

// Controller for sharing an alarm
const shareAlarm = (req, res) => {
Alarm.findById(req.params.id)
.then(alarm => {
if (!alarm) {
return res.status(404).json({ error: 'Alarm not found' });
}
alarm.shared = true;
return alarm.save();
})
.then(alarm => res.json(alarm))
.catch(err => res.status(500).json({ error: err.message }));
}

module.exports = {
getAllAlarms,
addAlarm,
shareAlarm
};