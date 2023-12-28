import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import AboutOne from "../components/sections/AboutOne";
import CourseOne from "../components/sections/CourseOne";
import FeatureOne from "../components/sections/FeatureOne";
import FunFactOne from "../components/sections/FunFactOne";

export default function Home() {
  return (
    <>
      <Layout HeaderStyle="one">
        <PageTitle pageName="About Us" />
        <AboutOne />
        <CourseOne />
        <FeatureOne />
        <FunFactOne />
      </Layout>
    </>
  );
}
