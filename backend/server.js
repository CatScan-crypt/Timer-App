// server.js

// This is the entry point for our backend server.
// It will import any dependencies and set up our server.

const express = require('express');
const bodyParser = require('body-parser');
const alarmsRouter = require('./routes/alarms');

const app = express();
const port = process.env.PORT || 8000;

// Use the body-parser middleware to parse incoming requests
app.use(bodyParser.json());

// Use the alarms router for any requests to the /alarms endpoint
app.use('/alarms', alarmsRouter);

// Start the server on the specified port
app.listen(port, () => {
console.log(Server listening on port ${port});
});

module.exports = app;