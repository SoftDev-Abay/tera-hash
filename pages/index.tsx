import React from "react";
import Wrapper from "@/app/pages/Wrapper/Wrapper";
import TitleSection from "@/app/pages/Hero/TitleSection/TitleSection";
import StorySection from "@/app/pages/Hero/StorySection/StorySection";
import AboutSection from "@/app/pages/Hero/AboutSection";

const About = () => {
  return (
    <>
      <Wrapper>
        <TitleSection />
        <StorySection/>
        <AboutSection />
      </Wrapper>
    </>
  );
};

export default About;
