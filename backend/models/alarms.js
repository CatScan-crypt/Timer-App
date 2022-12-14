// models/alarm.js

// This file contains the model for an alarm.
// It will define the schema and any instance or static methods for the Alarm model.

const mongoose = require('mongoose');

const alarmSchema = new mongoose.Schema({
time: {
type: Date,
required: true
},
shared: {
type: Boolean,
default: false
}
});

// Static method for getting all alarms
alarmSchema.statics.findAll = function() {
return this.find({});
}

const Alarm = mongoose.model('Alarm', alarmSchema);

module.exports = Alarm;