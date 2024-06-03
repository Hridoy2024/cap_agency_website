import React from "react";
import Flex from "../../common/Flex";
import Image from "../../common/Image";
import UL from "../../common/UL";
import LI from "../../common/LI";
import { FaCheckCircle } from "react-icons/fa";

const ServiceMain = () => {
  return (
    <>
      <div className="w-full rounded-[20px] p-5 h-[490px] bg-[#F4F4FF]">
        <div className=" w-full h-full rounded-[20px] bg-gray-300"></div>
      </div>

      <div className="mt-[33px]">
        <h1 className=" font-nunito font-bold xl:text-[25px] text-maintext ">
          Search Engine Optimization
        </h1>

        <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext xl:w-[886px]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of textss. All
          the Lorem Ipsum generators on the Internet tend to repeat
        </p>
      </div>

      <Flex className="mt-12 justify-between">
        <div className="w-1/2">
          <Image src="/detailsimg.png" />
        </div>
        <div className="w-1/2">
          <h2 className=" font-nunito font-bold xl:text-[25px] text-maintext">
            Our Service Process
          </h2>

          <div className="mt-6">
            <Flex className="rounded-[10px] p-5 bg-[#F4F4FF] mb-5">
              <div className="w-2/12">
                <Image src="dicon.png" />
              </div>
              <div className="w-10/12">
                <h2 className=" font-dm font-medium xl:text-[20px] text-maintext">
                  Creative Analysis
                </h2>
                <p className=" font-dm font-normal xl:text-[16px] leading-[24px] text-secondarytext xl:w-[253px]">
                  Creative analysis is important. It is common for marketers
                </p>
              </div>
            </Flex>

            <Flex className="rounded-[10px] p-5 bg-[#F4F4FF] mb-5">
              <div className="w-2/12">
                <Image src="dicon.png" />
              </div>
              <div className="w-10/12">
                <h2 className=" font-dm font-medium xl:text-[20px] text-maintext">
                  Creative Analysis
                </h2>
                <p className=" font-dm font-normal xl:text-[16px] leading-[24px] text-secondarytext xl:w-[253px]">
                  Creative analysis is important. It is common for marketers
                </p>
              </div>
            </Flex>

            <Flex className="rounded-[10px] p-5 bg-[#F4F4FF] mb-5">
              <div className="w-2/12">
                <Image src="dicon.png" />
              </div>
              <div className="w-10/12">
                <h2 className=" font-dm font-medium xl:text-[20px] text-maintext">
                  Creative Analysis
                </h2>
                <p className=" font-dm font-normal xl:text-[16px] leading-[24px] text-secondarytext xl:w-[253px]">
                  Creative analysis is important. It is common for marketers
                </p>
              </div>
            </Flex>
          </div>
        </div>
      </Flex>

      <div className="mt-[56px]">
        <h1 className=" font-nunito font-bold xl:text-[25px] text-maintext ">
          We Hope You Find What You are Looking for
        </h1>

        <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext xl:w-[886px]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of textss. All
          the Lorem Ipsum generators on the Internet tend to repeat
        </p>
      </div>

      <UL className="mt-5">
        <LI className="w-full mb-2 flex items-center gap-[10px] font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
          <FaCheckCircle className="text-orange" /> Financial Growth System
        </LI>
        <LI className="w-full mb-2 flex items-center gap-[10px] font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
          <FaCheckCircle className="text-orange" /> Customer Oriented Program
          Daily
        </LI>
        <LI className="w-full mb-2 flex items-center gap-[10px] font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
          <FaCheckCircle className="text-orange" /> Dedicated Team member
        </LI>
        <LI className="w-full mb-2 flex items-center gap-[10px] font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
          <FaCheckCircle className="text-orange" /> Product ux Design &
          Development Process
        </LI>
      </UL>
    </>
  );
};

export default ServiceMain;
