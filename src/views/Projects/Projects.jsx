import React from "react";
import Project from "../../components/Project/Project";

export default function ProjectsScreen() {
  return (
    <div className="screen-background">
      <Project
        title="CS50 Final Project"
        description="Will create soon."
        link="http://localhost:3000/"
      />
      <Project
        title="Personal Portfolio"
        description="This website! Work in progress."
        link="http://localhost:3000/"
      />
    </div>
  );
}
