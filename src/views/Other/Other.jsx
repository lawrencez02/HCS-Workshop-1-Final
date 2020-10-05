import React, { useState } from "react";
import "./Other.css";

function TimeLineItem(props) {
  return (
    <div
      className="timeline-item"
      onClick={() => {
        props.setActiveTitle("Favorite");
        props.setActiveDescription(props.description);
      }}
    >
      <div className="other-info">
        <h4>{props.title}</h4>
      </div>
    </div>
  );
}

export default function OtherScreen() {
  const [activeTitle, setActiveTitle] = useState("");
  const [activeDescription, setActiveDescription] = useState("");

  return (
    <div className="screen-background">
      <div className="other-background">
        <div className="timeline-background">
          <TimeLineItem
            title="C/C++"
            description="programming languages."
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />
          <TimeLineItem
            title="Consumer Technology"
            description="type of tech."
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />
          <TimeLineItem
            title="League of Legends"
            description="game and e-sport."
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />
        </div>
        <div className="highlight-background-other">
          <h1>{activeTitle}</h1>
          <p>{activeDescription}</p>
        </div>
      </div>
    </div>
  );
}
