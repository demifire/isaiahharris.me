import React from 'react';
import { Link } from 'react-router-dom';
import './About.scss';
import Border from '../Border';
const about = props => (
  <div className="about-container">
    <div className="title-container">
      <div className="titles">
        <div className="title">ABOUT</div>
        <div className="sub-title">Hi, I'm Isaiah Harris.</div>
      </div>
      <div className="picture" />
    </div>
    <div className="body-container">
      <div className="body">
        <div className="paragraph-1">
          After discovering coding in High-School, I've been determined to
          improve myself as a developer everyday.
        </div>
        <div className="paragraph">
          Four months later, I completed an immersive Javascript Coding Bootcamp
          in Honolulu, Hawaii. Since then I have enjoyed being a Teachers
          Assistant. I also have taken multiple online courses and participated
          in multiple meetups and hackathons to enhance my skills.
        </div>
        <div className="paragraph">
          I'm passionate, always ready for a challenge, and open to new
          experiences.
        </div>
      </div>
      <Border />
    </div>
  </div>
);

export default about;
