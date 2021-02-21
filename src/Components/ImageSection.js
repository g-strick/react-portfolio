import React from "react";
import about from "../img/about-mbpro.jpg";
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
        <p className="about-text">I am a full stack web developer.</p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
            <p>Hobbies</p>
          </div>
          <div className="right-section">
            <p>: Grayson Stricker</p>
            <p>: 28</p>
            <p>: American</p>
            <p>: English, Elementary Japanese</p>
            <p>: Charlotte, NC</p>
            <p>: Hiking, Snowboarding and eating Tacos</p>
          </div>
        </div>
        <button className="btn">Download CV</button>
      </div>
    </div>
  );
};

export default ImageSection;
