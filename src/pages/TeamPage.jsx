import React from "react";
import PageBanner from "../components/common/PageBanner";
import Container from "../components/common/Container";
import Title from "../components/common/Title";
import Flex from "../components/common/Flex";
import Usercard from "../components/screens/Home/Usercard";

const TeamPage = () => {
  return (
    <main>
      <PageBanner title={"Team"} />
      <Container>
        <div className="mt-[120px]">
          <Title title={"Team Member"} text={"Creative Team Member"} />
        </div>

        <Flex className="mt-[47px] flex-wrap flex-col sm:flex-row sm:flex-wrap gap-6 items-center justify-center">
          <Usercard className=" bg-[#F4F4FF] w-full sm:w-[48%] md:w-[30%] lg:w-[22%] xl:text-[23%]" />
          <Usercard className=" bg-[#F4F4FF] w-full sm:w-[48%] md:w-[30%] lg:w-[22%] xl:text-[23%]" />
          <Usercard className=" bg-[#F4F4FF] w-full sm:w-[48%] md:w-[30%] lg:w-[22%] xl:text-[23%]" />
          <Usercard className=" bg-[#F4F4FF] w-full sm:w-[48%] md:w-[30%] lg:w-[22%] xl:text-[23%]" />
          <Usercard className=" bg-[#F4F4FF] w-full sm:w-[48%] md:w-[30%] lg:w-[22%] xl:text-[23%]" />
          <Usercard className=" bg-[#F4F4FF] w-full sm:w-[48%] md:w-[30%] lg:w-[22%] xl:text-[23%]" />
          <Usercard className=" bg-[#F4F4FF] w-full sm:w-[48%] md:w-[30%] lg:w-[22%] xl:text-[23%]" />
          <Usercard className=" bg-[#F4F4FF] w-full sm:w-[48%] md:w-[30%] lg:w-[22%] xl:text-[23%]" />
          <Usercard className=" bg-[#F4F4FF] w-full sm:w-[48%] md:w-[30%] lg:w-[22%] xl:text-[23%]" />
          <Usercard className=" bg-[#F4F4FF] w-full sm:w-[48%] md:w-[30%] lg:w-[22%] xl:text-[23%]" />
          <Usercard className=" bg-[#F4F4FF] w-full sm:w-[48%] md:w-[30%] lg:w-[22%] xl:text-[23%]" />
          <Usercard className=" bg-[#F4F4FF] w-full sm:w-[48%] md:w-[30%] lg:w-[22%] xl:text-[23%]" />
        </Flex>
      </Container>
    </main>
  );
};

export default TeamPage;
