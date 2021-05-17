import React from "react";
import {
  faGithub,
  faLinkedinIn,
  faHackerrank,
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
        <p className="h-sub-text">
          Fullstack web developer with a passion for people and getting things
          done. Interested in building more intuitive user experiences on the web by
          leveraging an extensive sales background, with a knack for
          computers. Recently earned a certificate in full-stack web development
          from UNC Chapel Hill. Seeking an opportunity that will utilize this
          skill set, while expanding it, to incorporate new technologies, skills
          and techniques.
        </p>
        <div className="icons">
          <button className="btn">
            <a
              href="https://drive.google.com/file/d/1s6u5iKB1tYjrf-47x_djGZ-eLkf6u6jq/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
            >
              Download CV
            </a>
          </button>
        </div>
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
