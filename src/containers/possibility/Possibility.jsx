import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Innovate Without Limits 🚀</h4>
      <h1 className="gradient__text">
        The possibilities are <br /> beyond your imagination
      </h1>
      <p>
        Cutting-edge tech, sleek design, and intelligent automation — all
        tailored to make your brand unstoppable.
      </p>
      <h4>Experience the Power of Tech</h4>
    </div>
  </div>
);

export default Possibility;
