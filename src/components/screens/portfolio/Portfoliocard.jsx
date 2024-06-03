import React from "react";
import Flex from "../../common/Flex";

const Portfoliocard = ({ className }) => {
  return (
    <div
      className={` ${className} cursor-pointer group relative rounded-t-[10px] rounded-b-[10px] hover:rounded-b-[50px] flex items-end h-[462px] bg-[#F4F4F4]`}
    >
      <div className="w-full h-full duration-150 ease-in-out rounded-t-[10px] rounded-b-[10px] absolute top-0 left-0 bg-gray-400 group-hover:h-[75%] group-hover:rounded-b-[50px] "></div>
      <Flex className="py-[31px] items-center justify-between w-full px-[50px]">
        <div>
          <h1 className=" font-dm font-medium xl:text-[20px] text-maintext">
            Monthly Design Magazine
          </h1>

          <p className=" font-dm font-normal xl:text-[16px] text-secondarytext">
            Print, Books
          </p>
        </div>

        <button className=" flex items-center justify-center h-12 w-12 rounded-full bg-lenearOne text-white xl:text-[22px]">
          +
        </button>
      </Flex>
    </div>
  );
};

export default Portfoliocard;
