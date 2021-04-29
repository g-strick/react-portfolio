import React from "react";
import about from "../img/about-mbpro.jpg";
import {
  faNodeJs,
  faReact,
  faCss3,
  faSass,
  faHtml5,
  faAws

} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImageSection = () => {
  return (
    <div className="imageSection">
      <div className="img">
        <img src={about} alt="about"></img>
      </div>
      <div className="about-info">
        <h4>
          My name is <span>Grayson</span>
        </h4>
        <p className="about-text">
          Fullstack web developer with a passion for people and getting things
          done. Effectively build more intuitive user experiences on the web by
          leveraging an extensive sales background, with an interest for
          computers. Recently earned a certificate in full-stack web development
          from UNC Chapel Hill. Seeking an opportunity that will utilize this
          skill set, while expanding it, to incorporate new technologies, skills
          and techniques.
        </p>
 
        <div className="icons">
          <a
            href="https://github.com/g-strick"
            className="icon-holder"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faReact} className="icon gh" />
          </a>
          <a
            href="https://www.linkedin.com/in/grayson-stricker-399879b4/"
            className="icon-holder"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faNodeJs} className="icon li" />
          </a>
          <a
            href="https://www.hackerrank.com/graysonstricker"
            className="icon-holder"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faHtml5} className="icon hr" />
          </a>
          <a
            href="https://github.com/g-strick"
            className="icon-holder"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faCss3} className="icon gh" />
          </a>
          <a
            href="https://www.linkedin.com/in/grayson-stricker-399879b4/"
            className="icon-holder"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faSass} className="icon li" />
          </a>
          <a
            href="https://www.hackerrank.com/graysonstricker"
            className="icon-holder"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faAws} className="icon hr" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
