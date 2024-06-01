import React from "react";
import Container from "../../common/Container";
import Title from "../../common/Title";
import Flex from "../../common/Flex";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <section className="mt-[120px]">
      <Container>
        <Title title={"Our Pricing"} text={"Our Best Pricing Plan"} />

        <Flex className="items-center gap-6 mt-[47px] justify-center">
          <PricingCard />
          <PricingCard />
          <PricingCard />
        </Flex>
      </Container>
    </section>
  );
};

export default Pricing;
