import React from "react";
import Layout from "../components/layout/Layout";
import SliderTwo from "../components/sections/SliderTwo";
import AboutOne from "../components/sections/AboutOne";
import CategoryOne from "../components/sections/CategoryOne";
import FaqOne from "../components/sections/FaqOne";
import CourseOne from "../components/sections/CourseOne";
import FeatureOne from "../components/sections/FeatureOne";
import FeatureTwo from "../components/sections/FeatureTwo";
import dynamic from "next/dynamic";

function Home() {
  return (
    <>
      <Layout HeaderStyle="one">
        <SliderTwo />
        <AboutOne />
        <CategoryOne />
        <CourseOne />
        <FeatureOne />
        <FeatureTwo />
        <FaqOne />
      </Layout>
    </>
  );
}

export default dynamic(() => Promise.resolve(Home), { ssr: false });
