// footer.js

// This component will render the footer for our app.
// It will contain any copyright information or links to a privacy policy.

import React from 'react';
import './styles/footer.css';

const Footer = () => {
return (
<footer className="app-footer">
<p>Copyright 2020 Timer App</p>
<a href="#">Privacy Policy</a>
</footer>
);
}

export default Footer;