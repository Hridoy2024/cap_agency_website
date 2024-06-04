import React from "react";
import PageBanner from "../components/common/PageBanner";
import Container from "../components/common/Container";
import Pricing from "../components/screens/Home/Pricing";
import Support from "../components/screens/Pricingpage/Support";
import Company from "../components/screens/Pricingpage/Company";

const PricingPage = () => {
  return (
    <main>
      <PageBanner title="Pricing" />
      <Container>
        <Pricing />
        <Support />
        <Company />
      </Container>
    </main>
  );
};

export default PricingPage;
