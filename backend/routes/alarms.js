// routes/alarms.js

// This file contains the route handlers for our alarms API.
// It will import the controllers for each HTTP method and register them to the router.

const express = require('express');
const router = express.Router();
const {
getAllAlarms,
addAlarm,
shareAlarm
} = require('../controllers/alarms');

// GET request to /alarms will call the getAllAlarms controller
router.get('/', getAllAlarms);

// POST request to /alarms will call the addAlarm controller
router.post('/', addAlarm);

// PUT request to /alarms/:id will call the shareAlarm controller
router.put('/:id', shareAlarm);

module.exports = router;
