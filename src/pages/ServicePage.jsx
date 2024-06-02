import React from "react";
import PageBanner from "../components/common/PageBanner";
import AllServises from "../components/screens/Services/AllServises";
import Teastimonial from "../components/screens/Home/Teastimonial";
import Support from "../components/screens/Services/Support";

const ServicePage = () => {
  return (
    <main>
      <PageBanner title={"Service"} />
      <AllServises />
      <Support />
      <Teastimonial />
    </main>
  );
};

export default ServicePage;
