import React from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";
import ServiceCard from "./ServiceCard";

const ServiceSection = () => {
  return (
    <section className=" mt-[50px] 2xl:mt-[120px]">
      <Container>
        <Flex className="items-center gap-6 flex-col sm:flex-row sm:flex-wrap">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </Flex>
      </Container>
    </section>
  );
};

export default ServiceSection;
