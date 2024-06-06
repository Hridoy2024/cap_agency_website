import React from "react";
import Container from "../../common/Container";
import Title from "../../common/Title";
import Flex from "../../common/Flex";
import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Usercard from "./Usercard";

const Teams = () => {
  return (
    <section className="mt-[50px] 2xl:mt-[120px] bg-teamsbg">
      <Container>
        <div className=" py-10 2xl:py-[120px]">
          <Title title="Team Member" text="Creative Team Member" />

          <Flex className="items-center justify-center flex-col sm:flex-row sm:flex-wrap gap-6 mt-[47px]">
            <Usercard className="bg-white w-full sm:w-[48%] md:w-[30%] lg:w-[22%] xl:text-[25%]" />
            <Usercard className="bg-white w-full sm:w-[48%] md:w-[30%] lg:w-[22%] xl:text-[25%]" />
            <Usercard className="bg-white w-full sm:w-[48%] md:w-[30%] lg:w-[22%] xl:text-[25%]" />
            <Usercard className="bg-white w-full sm:w-[48%] md:w-[30%] lg:w-[22%] xl:text-[25%]" />
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Teams;
