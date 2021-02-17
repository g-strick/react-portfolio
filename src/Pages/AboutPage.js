import React from "react";
import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";
import ServicesSection from "../Components/Services";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import gamedev from "../img/game-dev.svg";

const AboutPage = () => {
  return (
    <div className="AboutPage">
      <Title title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Title title={"My Skills"} span={"My Skills"} />
      <div className="skillsContainer">
        <SkillsSection skill={"Javascript"} progress={80} width={"80%"} />
        <SkillsSection skill={"React"} progress={70} width={"70%"} />
        <SkillsSection skill={"Node JS"} progress={60} width={"60%"} />
        <SkillsSection skill={"SQL"} progress={30} width={"30%"} />
        <SkillsSection skill={"Javascript"} progress={70} width={"70%"} />
        <SkillsSection skill={"Web Design"} progress={80} width={"80%"} />
        <SkillsSection skill={"UI/UX Design"} progress={30} width={"30%"} />
      </div>
      <div className="services-container">
        <Title title={"Services"} span={"Services"} />
        <ServicesSection
          image={design}
          title={"Web Design"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facere, numquam vitae placeat consequatur corrupti officia quibusdam. "
          }
        />
        <ServicesSection
          image={intelligence}
          title={"Artificial Intelligence"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facere, numquam vitae placeat consequatur corrupti officia quibusdam. "
          }
        />
        <ServicesSection
          image={gamedev}
          title={"Game Development"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facere, numquam vitae placeat consequatur corrupti officia quibusdam. "
          }
        />
      </div>
    </div>
  );
};

export default AboutPage;
