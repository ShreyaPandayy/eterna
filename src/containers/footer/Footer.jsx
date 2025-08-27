import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">
        Do you want to step in to the future before others
      </h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>
          ETERNA DIGITAL <br /> All Rights Reserved
        </p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Quick Links</h4>
        <p>Home</p>
        <p>About Us</p>
        <p>Services</p>
        <p>Portfolio</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Careers</p>
        <p>Blog</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in Touch</h4>
        <p>Global Team – Fully Remote</p>
        <p>support@eterna.com</p>
        <p>contact@eterna.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2025 ETERNA Digital. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
