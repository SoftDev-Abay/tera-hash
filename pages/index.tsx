import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const Wrapper = dynamic(() => import("@/app/pages/Wrapper/Wrapper"), {
  ssr: true,
});

const TitleSection = dynamic(
  () => import("@/app/pages/Hero/TitleSection/TitleSection"),
  { ssr: true }
);
const StorySection = dynamic(
  () => import("@/app/pages/Hero/StorySection/StorySection"),
  { ssr: false }
);
const AboutSection = dynamic(() => import("@/app/pages/Hero/AboutSection"), {
  ssr: false,
});
const SummarySection = dynamic(
  () => import("@/app/pages/Hero/SummarySection"),
  { ssr: false }
);

const Home = () => {
  return (
    <Wrapper>
      <Head>
        <title>HashCats</title>
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <TitleSection />
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

export default Home;
