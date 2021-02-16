import React from "react";
import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";
const AboutPage = () => {
  return (
    <div className="AboutPage">
      <Title title={"About Me"} span={"About Me"} />
      <ImageSection />
      <div className="skillsContainer">
        <SkillsSection skill={"Javascript"} progress={80} width={"80%"} />
        <SkillsSection skill={"React"} progress={70} width={"70%"} />
        <SkillsSection skill={"Node JS"} progress={60} width={"60%"} />
        <SkillsSection skill={"SQL"} progress={30} width={"30%"} />
        <SkillsSection skill={"Javascript"} progress={70} width={"70%"} />
        <SkillsSection skill={"Web Design"} progress={80} width={"80%"} />
        <SkillsSection skill={"UI/UX Design"} progress={30} width={"30%"} />
      </div>
    </div>
  );
};

export default AboutPage;
