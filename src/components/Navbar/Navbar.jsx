import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Mark Pekala</h1>
        <div className="info-bar">
          <p className="info-item">mpekala@college.harvard.edu</p>
        </div>
        <div className="info-bar">
          <Link
            className="info-link"
            to={{ pathname: "https://github.com/mpek66" }}
            target="_blank"
          >
            GitHub
          </Link>
          <Link
            className="info-link"
            to={{ pathname: "https://www.linkedin.com/in/mark-pekala/" }}
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link
            className="info-link"
            to={{ pathname: "https://spotify.com" }}
            target="_blank"
          >
            Spotify
          </Link>
        </div>
      </div>
      <div className="nav-background">
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/about" }}>
            About
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/experience" }}>
            Experience
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/projects" }}>
            Projects
          </Link>
        </div>
      </div>
    </>
  );
}
