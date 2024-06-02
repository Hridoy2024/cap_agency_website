import React from "react";
import Flex from "../../common/Flex";

const Servicecard = () => {
  return (
    <Flex className="p-5 rounded-[50px] bg-[#F4F4FF] items-center gap-[60px] mb-[30px]">
      <div className="w-3/12">
        <div className="h-[197px] w-full bg-gray-300 rounded-[50px]"></div>
      </div>
      <div className="w-6/12">
        <h1 className=" font-nunito font-bold xl:text-[25px] text-maintext">
          Search Engine Optimization
        </h1>

        <p className="font-dm font-normal xl:text-[16px] text-secondarytext">
          There are many variations of passages of Lorem Ipsusm available, but
          the majority our as have suffered alteration in some form, by injected
          humour, or randomised word which don't worry a look even sligh
          believable. If you are going to use a passage.
        </p>
      </div>
      <div className="w-3/12">
        <button className=" font-dm font-normal xl:text-[18px] leading-[30px] text-maintext hover:text-white py-[15px] px-[33px] rounded-full border-[1px] border-orange bg-transparent  hover:bg-lenearOne flex items-center justify-center">
          Read More
        </button>
      </div>
    </Flex>
  );
};

export default Servicecard;
