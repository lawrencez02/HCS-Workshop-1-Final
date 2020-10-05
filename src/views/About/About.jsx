import React from "react";
import "./About.css";
import CutePic from "../../assets/Pic.jpg";

export default function AboutScreen() {
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img src={CutePic} className="intro-picture" />
        </div>
        <div className="intro-item">
          <p>Hi! I'm Lawrence, a first-year originally from Madison, Alabama, currently
          living in Wigglesworth Hall. Some of my interests include applied math, computer science,
          and economics. 
          </p>
        </div>
        <div className="intro-item">
          <p> 
          Welcome to my portfolio website! Here, you'll find all the things about me: my experiences, education, projects, and even hobbies.
          Feel free to roam about and check out my socials linked above too!
          </p>
        </div>
      </div>
    </div>
  );
}
