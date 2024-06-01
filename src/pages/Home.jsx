import React from "react";
import HomeBanner from "../components/screens/Home/HomeBanner";
import AboutSection from "../components/screens/Home/AboutSection";
import ServiceSection from "../components/screens/Home/ServiceSection";
import Choose from "../components/screens/Home/Choose";
import Pricing from "../components/screens/Home/Pricing";
import Contact from "../components/screens/Home/Contact";
import Teams from "../components/screens/Home/Teams";
import Teastimonial from "../components/screens/Home/Teastimonial";
import Hire from "../components/screens/Home/Hire";
import Blogs from "../components/screens/Home/Blogs";

const Home = () => {
  return (
    <main>
      <HomeBanner />
      <AboutSection />
      <ServiceSection />
      <Choose />
      <Pricing />
      <Contact />
      <Teams />
      <Teastimonial />
      <Hire />
      <Blogs />
    </main>
  );
};

export default Home;
