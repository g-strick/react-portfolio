import React from "react";
import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";
const ContactsPage = () => {
  return (
    <div>
      <Title title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Title title={"My Skills"} span={"My Skills"} />
      <SkillsSection skill={"javascript"} progress={"70"} />
    </div>
  );
};

export default ContactsPage;
