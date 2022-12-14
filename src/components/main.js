// main.js

// This component will render the main content for our app.
// It will contain the timer and any buttons for adding or sharing alarms.

import React from 'react';
import './styles/main.css';

const Main = ({ alarmList, addAlarm, shareAlarm }) => {
return (
<main className="app-main">
<h2>Timer:</h2>
<p>{/* timer goes here */}</p>
<button>Add Alarm</button>
<button>Share Alarm</button>
<ul>
{alarmList.map(alarm => (
<li key={alarm.id}>{alarm.time}</li>
))}
</ul>
</main>
);
}

export default Main;