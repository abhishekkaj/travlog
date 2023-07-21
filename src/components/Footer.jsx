import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return (
<div className="footer-section">
    <div className="about">
        <div className="footer-logo"><img src="./img/logo.png" alt="" /><p>Travlog</p></div>
        
        <p className="about-text">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
        </p>
        <div className="social">
        <FontAwesomeIcon icon={faEnvelope} />
        <FontAwesomeIcon icon={faEnvelope} />
        <FontAwesomeIcon icon={faEnvelope} />
        </div>
        </div>
    <div className="company">
        <h5>Company</h5>
        <ul>
            <li>About</li>
            <li>Career</li>
            <li>Mobile</li>
        </ul>
    </div>
    <div className="contact">
    <h5>Contact</h5>
        <ul>
            <li>Why Travlog?</li>
            <li>Partner with us</li>
            <li>FAQ’s</li>
            <li>Blog</li>
        </ul>
    </div>
    <div className="meet-us">
    <h5>Meet Us</h5>
        <ul>
            <li>+00 92 1234 56789</li>
            <li>info@travlog.com</li>
            <li>205. R Street, New York <br />BD23200</li>
        </ul>
    </div>
    </div>

    );
}

export default Footer;
