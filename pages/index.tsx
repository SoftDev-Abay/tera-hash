import React, { Suspense } from "react";
import dynamic from 'next/dynamic';
import Wrapper from "@/app/pages/Wrapper/Wrapper";

const TitleSection = dynamic(() => import("@/app/pages/Hero/TitleSection/TitleSection"));
const StorySection = dynamic(() => import("@/app/pages/Hero/StorySection/StorySection"));
const AboutSection = dynamic(() => import("@/app/pages/Hero/AboutSection"));
const SummarySection = dynamic(() => import("@/app/pages/Hero/SummarySection"));

const About = () => {
  return (
    <Wrapper>
      <Suspense fallback={<div>Loading Title Section...</div>}>
        <TitleSection />
      </Suspense>
      <Suspense fallback={<div>Loading Story Section...</div>}>
        <StorySection />
      </Suspense>
      <Suspense fallback={<div>Loading About Section...</div>}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<div>Loading Summary Section...</div>}>
        <SummarySection />
      </Suspense>
    </Wrapper>
  );
};

export default About;
