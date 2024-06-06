import React from "react";
import PageBanner from "../components/common/PageBanner";
import Container from "../components/common/Container";
import Title from "../components/common/Title";
import Flex from "../components/common/Flex";
import Portfoliocard from "../components/screens/portfolio/Portfoliocard";

const Portfolio = () => {
  return (
    <main>
      <PageBanner title="Portfolio" />
      <Container>
        <div className="mt-[120px]">
          <Title title="Our Portfolio" text="Our Impressive Portfolio" />

          <Flex className="mt-[47px] flex-wrap gap-6">
            <Portfoliocard className=" w-full sm:w-[48%] sm:mx-auto md:w-[30%] 2xl:w-[32%]" />
            <Portfoliocard className=" w-full sm:w-[48%] sm:mx-auto md:w-[30%] 2xl:w-[32%]" />
            <Portfoliocard className=" w-full sm:w-[48%] sm:mx-auto md:w-[30%] 2xl:w-[32%]" />
            <Portfoliocard className=" w-full sm:w-[48%] sm:mx-auto md:w-[30%] 2xl:w-[32%]" />
            <Portfoliocard className=" w-full sm:w-[48%] sm:mx-auto md:w-[30%] 2xl:w-[32%]" />
            <Portfoliocard className=" w-full sm:w-[48%] sm:mx-auto md:w-[30%] 2xl:w-[32%]" />
            <Portfoliocard className=" w-full sm:w-[48%] sm:mx-auto md:w-[30%] 2xl:w-[32%]" />
            <Portfoliocard className=" w-full sm:w-[48%] sm:mx-auto md:w-[30%] 2xl:w-[32%]" />
            <Portfoliocard className=" w-full sm:w-[48%] sm:mx-auto md:w-[30%] 2xl:w-[32%]" />
            <Portfoliocard className=" w-full sm:w-[48%] sm:mx-auto md:w-[30%] 2xl:w-[32%]" />
            <Portfoliocard className=" w-full sm:w-[48%] sm:mx-auto md:w-[30%] 2xl:w-[32%]" />
            <Portfoliocard className=" w-full sm:w-[48%] sm:mx-auto md:w-[30%] 2xl:w-[32%]" />
            <Portfoliocard className=" w-full sm:w-[48%] sm:mx-auto md:w-[30%] 2xl:w-[32%]" />
            <Portfoliocard className=" w-full sm:w-[48%] sm:mx-auto md:w-[30%] 2xl:w-[32%]" />
            <Portfoliocard className=" w-full sm:w-[48%] sm:mx-auto md:w-[30%] 2xl:w-[32%]" />
            <Portfoliocard className=" w-full sm:w-[48%] sm:mx-auto md:w-[30%] 2xl:w-[32%]" />
          </Flex>

          <button className=" mx-auto mt-[60px] font-dm font-normal xl:text-[18px] leading-[30px] text-white py-[15px] px-[33px] rounded-full bg-lenearOne flex items-center justify-center">
            View More Projects
          </button>
        </div>
      </Container>
    </main>
  );
};

export default Portfolio;
