import React from "react";
import Flex from "../../common/Flex";
import { FaTimes } from "react-icons/fa";

const CartItem = () => {
  return (
    <Flex className="items-center justify-between gap-[15px] py-[14px] px-10 border-[1px] border-[#F4F4FF]">
      <div className="w-5/12">
        <Flex className="items-center gap-5">
          <div className="h-[80px] w-[80px] rounded-[3px] bg-[#F4F4FF] py-3 px-[17px]">
            <div className="w-full h-full bg-gray-300"></div>
          </div>

          <h1 className=" font-dm font-normal xl:text-[16px] leading-[18px] text-secondarytext">
            Calculator Images Scientific Clipart
          </h1>
        </Flex>
      </div>
      <div className="w-7/12">
        <Flex className="items-center justify-between">
          <div className="w-1/4">
            <p className=" font-dm font-normal xl:text-[16px] leading-[18px] text-secondarytext">
              $130
            </p>
          </div>
          <div className="w-1/4">
            <Flex className="items-center justify-center gap-5 py-3 px-6 rounded-full border-[1px] border-[#F4F4FF]">
              <button className=" font-dm font-normal xl:text-[16px] leading-[16px] text-secondarytext">
                -
              </button>
              <button className=" font-dm font-normal xl:text-[16px] leading-[16px] text-maintext">
                1
              </button>
              <button className=" font-dm font-normal xl:text-[16px] leading-[16px] text-secondarytext">
                +
              </button>
            </Flex>
          </div>
          <div className="w-1/4">
            <p className=" text-center font-dm font-normal xl:text-[16px] leading-[18px] text-secondarytext">
              $130
            </p>
          </div>
          <div className="w-1/4">
            <button className=" block ml-[80px]">
              <FaTimes className=" text-secondarytext" />
            </button>
          </div>
        </Flex>
      </div>
    </Flex>
  );
};

export default CartItem;
