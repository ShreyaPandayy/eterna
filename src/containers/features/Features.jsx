import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Innovating Businesses Instantly',
    text: 'We help businesses transform and grow with innovative digital solutions. From smart applications to streamlined workflows, every project is designed to deliver results that make an impact immediately.',
  },
  {
    title: 'Empowering Active Growth',
    text: 'Our team works closely with clients to identify opportunities and implement strategies that drive engagement, efficiency, and scalability. We turn ideas into action and growth into results.',
  },
  {
    title: 'Seamless Communication & Collaboration',
    text: 'We create platforms and solutions that make team collaboration effortless and client interactions smooth. Communication, project management, and workflow automation all come together in one seamless experience.',
  },
  {
    title: 'Building Future-Ready Solutions',
    text: 'From AI-driven applications to robust web platforms, our solutions are designed to keep your business ahead in a rapidly changing digital world. Innovation, reliability, and user-focused design are at the heart of everything we build.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
