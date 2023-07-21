import React from 'react';
import './EmailSection.css'
const EmailSection = () => {
    return (
        <div className="email-section">
            <h5>subscribe to our newsletter</h5>
            <h3>Prepare yourself & let’s explore the beauty of the world</h3>
            <div className="email-box">
            <input type="text" placeholder='Your Email'/> <button className="subscribe">Subscribe</button>
            </div>
            
        </div>
    );
}

export default EmailSection;
