import React from "react";
import Flex from "../../common/Flex";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Productcard from "../shop/Productcard";

const Related = () => {
  return (
    <section>
      <Flex className="items-center justify-between">
        <div>
          <h3 className=" font-dm font-normal xl:text-[16px] leading-[26px] text-primary">
            Products
          </h3>

          <h1 className=" font-nunito font-bold xl:text-[46px] leading-[56px] text-maintext">
            Related Products
          </h1>
        </div>

        <Flex className="items-center gap-5">
          <button className="h-[50px] w-[50px] rounded-full bg-[#E5EBEF] flex items-center justify-center">
            <FaArrowLeftLong className="text-[22px] text-primary" />
          </button>
          <button className="h-[50px] w-[50px] rounded-full bg-[#E5EBEF] flex items-center justify-center ">
            <FaArrowRightLong className="text-[22px] text-primary" />
          </button>
        </Flex>
      </Flex>

      <Flex className="items-center flex-col sm:flex-row sm:flex-wrap xl:flex-nowrap justify-between gap-6 mt-[46px]">
        <Productcard className=" w-full sm:w-[48%] lg:w-[30%] mx-auto" />
        <Productcard className=" w-full sm:w-[48%] lg:w-[30%] mx-auto" />
        <Productcard className=" w-full sm:w-[48%] lg:w-[30%] mx-auto" />
        <Productcard className=" w-full sm:w-[48%] lg:w-[30%] mx-auto" />
      </Flex>
    </section>
  );
};

export default Related;
