import React from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";
import Image from "../../common/Image";
import UL from "./../../common/UL";
import LI from "../../common/LI";
import { TbTargetArrow } from "react-icons/tb";
import { FaCheckCircle } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="mt-[120px]">
      <Container>
        <Flex className="items-center">
          <div className="w-1/2">
            <Image src="aboutsection.png" alt="about" />
          </div>
          <div className="w-1/2">
            <div>
              <Flex className="items-center gap-[10px]">
                <TbTargetArrow className="text-[22px] text-orange" />{" "}
                <p className=" font-dm font-medium xl:text-[20px] text-primary">
                  About Our Company
                </p>
              </Flex>

              <h1 className=" font-nunito font-bold xl:text-[46px] text-maintext mt-4 mb-7">
                Best Digital Marketing Agency For People
              </h1>

              <p className=" font-dm font-normal xl:text-[16px] text-secondarytext  xl:w-[659px]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have assuffered alteration in some form, by
                injected humour, or randomised words which don't a look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything.
              </p>

              <UL className="flex flex-wrap mt-7">
                <LI className="w-1/2  flex items-center gap-7 font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
                  <FaCheckCircle className="text-orange" /> Digital Strategy
                </LI>
                <LI className="w-1/2  flex items-center gap-7 font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
                  <FaCheckCircle className="text-orange" /> SEO Optimization
                </LI>
                <LI className="w-1/2  flex items-center gap-7 font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
                  <FaCheckCircle className="text-orange" /> Marketing
                </LI>
                <LI className="w-1/2  flex items-center gap-7 font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
                  <FaCheckCircle className="text-orange" /> First Working
                  Process
                </LI>
              </UL>

              <button className=" mt-[50px] font-dm font-normal xl:text-[18px] leading-[30px] text-white py-[15px] px-[33px] rounded-full bg-lenearOne flex items-center justify-center">
                Read More
              </button>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default AboutSection;
