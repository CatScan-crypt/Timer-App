// alarms.js

// This file will contain the methods for our alarms API.
// It will handle any communication with a backend for adding or sharing alarms.

const backendURL = `http://my-timer-app-backend.com`;

const alarms = {
// Method for adding an alarm
add: (alarm) => {
// Make a POST request to the backend with the alarm data
fetch(`${backendURL}`/alarms, {
method: 'POST',
body: JSON.stringify(alarm)
});
},
// Method for sharing an alarm
share: (alarm) => {
// Make a PUT request to the backend with the alarm data
fetch(`${backendURL}`/alarms/`${alarm.id}`, {
method: 'PUT',
body: JSON.stringify(alarm)
});
}
}

export default alarms;
    
    
    
    
    