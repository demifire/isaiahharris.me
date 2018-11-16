import React, { Component } from 'react';
import './About.scss';
class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="title-container">
          <div className="title">About</div>
          <div className="sub-title">Hi, I'm Isaiah Harris</div>
        </div>
        <div className="body">
          <p>
            After discovering coding in High-School, I've been determined to
            improve myself as a developer everyday.
          </p>
          <p>
            Four months after I graduated, I completed an immersive Javascript
            Coding Bootcamp in Honolulu, Hawaii. Since then I have enjoyed
            participating in multiple Hackathons and Meetups. I also have taken
            multiple online courses to enhance my skills.
          </p>
          <p>
            I'm passionate, always ready for a challenge, and open to new
            experiences.
          </p>
        </div>
        <div className="footer">logos</div>
      </div>
    );
  }
}

export default About;
