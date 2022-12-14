// header.js

// This component will render the header for our app.
// It will contain the title and any navigation links or settings.

import React from 'react';
import './styles/header.css';

const Header = () => {
return (
<header className="app-header">
<h1 className="app-title">Timer App</h1>
<nav>
<a href="#">Settings</a>
</nav>
</header>
);
}

export default Header;