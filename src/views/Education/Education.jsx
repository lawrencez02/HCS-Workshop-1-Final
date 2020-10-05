import React, { useState } from "react";
import "./Education.css";

function TimeLineItem(props) {
  return (
    <div
      className="timeline-item"
      onClick={() => {
        props.setActiveTitle(props.title);
        props.setActiveDescription(props.description);
      }}
    >
      <div className="education-info">
        <h4>{props.title}</h4>
      </div>
    </div>
  );
}

export default function EducationScreen() {
  const [activeTitle, setActiveTitle] = useState("");
  const [activeDescription, setActiveDescription] = useState("");

  return (
    <div className="screen-background">
      <div className="education-background">
        <div className="timeline-background">
          <TimeLineItem
            title="Harvard University"
            description="Expected Graduation Date: May 2024
            Anticipated Concentration: Applied Mathematics, Economics and Computer Science

            Courses: Mathematics 25a (Theoretical Linear Algebra), Economics 1011a (Intermediate Microeconomics: Advanced), Statistics 110 (Introduction to Probability), Computer Science 50 (Introduction to Computer Science)
            
            GPA: ./4.0"
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />
          <TimeLineItem
            title="The University of Alabama in Huntsville"
            description="High-school dual enrollment in advanced mathematics and computer science classes. 
            GPA: 4.0/4.0"
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />
          <TimeLineItem
            title="James Clemens High School"
            description="Valedictorian out of class of 450. 
            GPA: 4.0/4.0
            ACT: 36/36"
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />
        </div>
        <div className="highlight-background-new">
          <h1>{activeTitle}</h1>
          <p>{activeDescription}</p>
        </div>
      </div>
    </div>
  );
}
