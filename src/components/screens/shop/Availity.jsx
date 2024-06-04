import React from "react";
import Flex from "../../common/Flex";
import UL from "../../common/UL";
import LI from "../../common/LI";
import { GoDotFill } from "react-icons/go";

const Availity = () => {
  return (
    <div className=" w-full rounded-[20px] border-[1px] border-orange py-6 px-[30px] mt-[60px]">
      <div>
        <h2 className=" font-nunito font-bold xl:text-[25px] text-maintext">
          Availability
        </h2>

        <div className=" w-full h-[1px] bg-[#F4F4FF]">
          <div className="w-[20%] bg-lenearOne h-full"></div>
        </div>
      </div>

      <UL className="mt-3">
        <LI className="mb-3">
          <Flex className="ite justify-between">
            <Flex className="items-center gap-[9px]">
              <GoDotFill className="text-[25px] text-gray-300" />
              <p className=" font-dm font-normal xl:text-[16px] leading-[34px] text-secondarytext">
                In Stock
              </p>
            </Flex>

            <p className="ont-dm font-normal xl:text-[16px] leading-[34px] text-secondarytext">
              (65)
            </p>
          </Flex>
        </LI>
        <LI className="mb-3">
          <Flex className="ite justify-between">
            <Flex className="items-center gap-[9px]">
              <GoDotFill className="text-[25px] text-gray-300" />
              <p className=" font-dm font-normal xl:text-[16px] leading-[34px] text-secondarytext">
                Out of Stock
              </p>
            </Flex>

            <p className="ont-dm font-normal xl:text-[16px] leading-[34px] text-secondarytext">
              (65)
            </p>
          </Flex>
        </LI>
      </UL>
    </div>
  );
};

export default Availity;
