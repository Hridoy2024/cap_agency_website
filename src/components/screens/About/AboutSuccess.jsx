import React from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";
import Image from "../../common/Image";
import { TbTargetArrow } from "react-icons/tb";
import UL from "../../common/UL";
import LI from "../../common/LI";
import { FaCheckCircle } from "react-icons/fa";

const AboutSuccess = () => {
  return (
    <section className="mt-[120px]">
      <Container>
        <Flex className="items-center justify-between">
          <div className="w-1/2">
            <Image src="/aboutpage.png" />
          </div>
          <div className="w-1/2">
            <Flex className="items-center gap-[10px]">
              <TbTargetArrow className="text-[22px] text-orange" />{" "}
              <p className=" font-dm font-medium xl:text-[20px] text-primary">
                About Our Company
              </p>
            </Flex>

            <h1 className=" font-nunito font-bold xl:text-[46px] text-maintext mt-4 mb-7">
              Best Digital Marketing Agency For People
            </h1>

            <Flex className="items-center gap-5">
              <button className=" py-[9px] px-4 bg-[#F4F4FF] rounded-full font-dm font-normal xl:text-[18px] text-secondarytext hover:text-white hover:bg-lenearOne">
                Our Mission
              </button>
              <button className=" py-[9px] px-4 bg-[#F4F4FF] rounded-full font-dm font-normal xl:text-[18px] text-secondarytext hover:text-white hover:bg-lenearOne">
                Our Vision
              </button>
              <button className=" py-[9px] px-4 bg-[#F4F4FF] rounded-full font-dm font-normal xl:text-[18px] text-secondarytext hover:text-white hover:bg-lenearOne">
                Our History
              </button>
            </Flex>

            <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext xl:w-[584px] mt-[27px] ">
              There are many variations of passages of Lorem Ipsum available,
              but the majori suffered alteration in some form, by injected
              humour, or randomised word whic look even sligh believable. If you
              are going to use.
            </p>

            <Flex className="gap-[30px] mt-[33px]">
              <Image src="world.png" />

              <UL className="">
                <LI className="w-full mb-2 flex items-center gap-[10px] font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
                  <FaCheckCircle className="text-orange" /> Financial Growth
                  System
                </LI>
                <LI className="w-full mb-2 flex items-center gap-[10px] font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
                  <FaCheckCircle className="text-orange" /> Customer Oriented
                  Program Daily
                </LI>
                <LI className="w-full mb-2 flex items-center gap-[10px] font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
                  <FaCheckCircle className="text-orange" /> Dedicated Team
                  member
                </LI>
                <LI className="w-full mb-2 flex items-center gap-[10px] font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
                  <FaCheckCircle className="text-orange" /> Product ux Design &
                  Development Process
                </LI>
              </UL>
            </Flex>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default AboutSuccess;
