import React from "react";
import Wrapper from "@/app/pages/Wrapper/Wrapper";
import TitleSection from "@/app/pages/Hero/TitleSection/TitleSection";
import StorySection from "@/app/pages/Hero/StorySection/StorySection";
import AboutSection from "@/app/pages/Hero/AboutSection";
import SummarySection from "@/app/pages/Hero/SummarySection";
const About = () => {
  return (
    <>
      <Wrapper>
        <TitleSection />
        <StorySection />
        <AboutSection />
        <SummarySection />
      </Wrapper>
    </>
  );
};

export default About;
