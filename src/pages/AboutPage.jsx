import React from "react";
import PageBanner from "../components/common/PageBanner";
import ServiceSection from "../components/screens/Home/ServiceSection";
import AboutSection from "../components/screens/Home/AboutSection";
import Choose from "../components/screens/Home/Choose";
import AboutSuccess from "../components/screens/About/AboutSuccess";
import Teams from "../components/screens/Home/Teams";
import Complete from "../components/screens/About/Complete";

const AboutPage = () => {
  return (
    <main>
      <PageBanner title={"About"} />
      <ServiceSection />
      <AboutSection />
      <Choose />
      <AboutSuccess />
      <Teams />
      <Complete />
    </main>
  );
};

export default AboutPage;
