import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is ETERNA"
        text={`At ETERNA DIGITAL, we believe in shaping the future of businesses through technology, 
        innovation, and creativity. We are a remote-first, global technology company that empowers startups, SMEs, 
        and enterprises to thrive in the digital age. Our mission is simple yet powerful: to design, build, 
        and scale digital solutions that drive efficiency, growth, and impact worldwide.`}
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        Explore Our Services
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Web Development"
        text="We craft sleek, responsive, and modern websites that bring your brand to life. Every line of code is designed to deliver an exceptional user experience and seamless performance."
      />
      <Feature
        title="AI & Automation"
        text="Harness the power of AI to streamline workflows, enhance decision-making, and create intelligent solutions that scale with your business needs."
      />
      <Feature
        title="Digital Solutions"
        text="Harness the power of AI to streamline workflows, enhance decision-making, and create intelligent solutions that scale with your business needs."
      />
    </div>
  </div>
);

export default WhatGPT3;
