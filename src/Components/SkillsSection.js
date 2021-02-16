import React from "react";

const SkillsSection = ({ skill, progress }) => {
  return (
    <div className="SkillsSection">
      <div className="skills-container">
        <h5 className="skill-title">{skill}</h5>
        <div className="skill-bar">
          <p className="skill-text"></p>
          <div className="skill-progress">{progress}</div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
