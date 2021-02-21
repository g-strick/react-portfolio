import React from "react";
import {
  faGithub,
  faLinkedin,
  faYoutube,
  faHackerrank
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

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
          <Link to="test" className="icon-holder">
            <FontAwesomeIcon icon={faLinkedin} className="icon li" />
          </Link>
          <Link to="test" className="icon-holder">
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </Link>
          <Link to="test" className="icon-holder">
            <FontAwesomeIcon icon={faYoutube} className="icon yt" />
          </Link>
          <Link to="test" className="icon-holder">
            <FontAwesomeIcon icon={faHackerrank} className="icon hr" />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
