import React from "react";
import {
  faGithub,
  faLinkedinIn,
  faHackerrank
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Grayson Stricker</span>
        </h1>
        <p className="h-sub-text">This is my react portfolio website.</p>
        <div className="icons">
          <a
            href="https://github.com/g-strick"
            className="icon-holder"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </a>
          <a
            href="https://www.linkedin.com/in/grayson-stricker-399879b4/"
            className="icon-holder"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="icon li" />
          </a>
          <a
            href="https://www.hackerrank.com/graysonstricker"
            className="icon-holder"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faHackerrank} className="icon hr" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
