import React from "react";
import Container from "../../common/Container";
import Title from "../../common/Title";
import Flex from "../../common/Flex";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <section className="mt-[50px] 2xl:mt-[120px]">
      <Container>
        <Title title={"Our Pricing"} text={"Our Best Pricing Plan"} />

        <Flex className="items-center gap-6 mt-[47px] justify-center flex-col sm:flex-row sm:flex-wrap sm:gap-1">
          <PricingCard />
          <PricingCard />
          <PricingCard />
        </Flex>
      </Container>
    </section>
  );
};

export default Pricing;
