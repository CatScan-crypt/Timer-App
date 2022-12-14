// app.js

// This is the entry point for our timer app.
// It will import and render our header, main, and footer components.
// It will also handle any global state or methods needed by the app.

// We will also import our alarms API and any styles needed for the app.
import React from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import alarms from './api/alarms';
import './styles/app.css';
import {useState} from 'react';

const App = () => {
// Global state for the app
const [alarmList, setAlarmList] = useState([]);

// Method for adding an alarm to the list
const addAlarm = (alarm) => {
setAlarmList([...alarmList, alarm]);
}

// Method for sharing an alarm
const shareAlarm = (alarm) => {
// Send the alarm to the API to be shared
alarms.share(alarm);
}

return (
<div className="app">
<Header />
<Main
     alarmList={alarmList}
     addAlarm={addAlarm}
     shareAlarm={shareAlarm}
   />
<Footer />
</div>
);
}

export default App;