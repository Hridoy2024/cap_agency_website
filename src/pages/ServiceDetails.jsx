import React from "react";
import PageBanner from "../components/common/PageBanner";
import Flex from "../components/common/Flex";
import ServiceMain from "../components/screens/ServiceDetails/ServiceMain";
import Container from "../components/common/Container";
import ServiceSide from "../components/screens/ServiceDetails/ServiceSide";

const ServiceDetails = () => {
  return (
    <main>
      <PageBanner title={"Service Details"} />
      <Container>
        <Flex className=" mt-[50px] flex-col md:flex-row 2xl:mt-[120px] items-start gap-[90px] justify-between">
          <div className=" w-full md:w-7/12 lg:w-8/12">
            <ServiceMain />
          </div>
          <div className=" w-full md:w-5/12 lg:w-4/12">
            <ServiceSide />
          </div>
        </Flex>
      </Container>
    </main>
  );
};

export default ServiceDetails;
