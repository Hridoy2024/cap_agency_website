import React from "react";
import Flex from "../../common/Flex";
import Image from "../../common/Image";
import UL from "../../common/UL";
import LI from "../../common/LI";
import { FaCheckCircle } from "react-icons/fa";

const PricingCard = () => {
  return (
    <div className="w-[30%] rounded-[50px] bg-[#F4F4FF] relative">
      <Image src="/shape.png" className="absolute top-0 right-0" />
      <div className="pt-[32px] px-[44px]">
        <h3 className=" font-nunito font-bold xl:text-[25px] text-maintext">
          Basic Plan
        </h3>

        <Flex className="items-end gap-[13px]">
          <div>
            <p className=" font-nunito font-bold xl:text-[46px] leading-[56px] text-primary relative">
              <span className=" text-[20px] absolute top-0 left-[-10px]">
                $
              </span>
              30
            </p>
          </div>

          <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext">
            Per Month
          </p>
        </Flex>
      </div>

      <div className="w-[311px] h-[1px] bg-[#D7DFFE] my-[40px]"></div>

      <div className="px-[44px]">
        <UL className="">
          <LI className=" w-full flex justify-center items-center gap-7 font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
            <FaCheckCircle className="text-orange" /> Free Consultations
          </LI>
          <LI className=" w-full flex justify-center items-center gap-7 font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
            <FaCheckCircle className="text-orange" /> Free Consultations
          </LI>
          <LI className=" w-full flex justify-center items-center gap-7 font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
            <FaCheckCircle className="text-orange" /> Free Consultations
          </LI>
          <LI className=" w-full flex justify-center items-center gap-7 font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
            <FaCheckCircle className="text-orange" /> Free Consultations
          </LI>
          <LI className=" w-full flex justify-center items-center gap-7 font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
            <FaCheckCircle className="text-orange" /> Free Consultations
          </LI>
          <LI className=" w-full flex justify-center items-center gap-7 font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
            <FaCheckCircle className="text-orange" /> Free Consultations
          </LI>
          <LI className=" w-full flex justify-center items-center gap-7 font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
            <FaCheckCircle className="text-orange" /> Free Consultations
          </LI>
        </UL>
        <button className=" font-dm font-normal xl:text-[18px] text-maintext py-[15px] block w-full mt-9 mb-[50px] rounded-full border-[1px] border-primary hover:border-none hover:bg-lenearOne hover:text-white">
          Choose Plan
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
