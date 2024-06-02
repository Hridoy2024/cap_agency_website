import React from "react";
import Flex from "./Flex";

const Breadcrums = ({ title }) => {
  return (
    <div>
      <h1 className=" font-nunito font-bold xl:text-[46px] leading-[41px] text-white text-center">
        {title}
      </h1>

      <Flex className="items-center justify-center gap-3 mt-3">
        <a
          href=""
          className=" font-dm font-normal xl:text-[16px] leading-[41px] text-white"
        >
          Home
        </a>
        <span className="text-white"> - </span>
        <a
          href=""
          className=" font-dm font-normal xl:text-[16px] leading-[41px] text-orange"
        >
          {title}
        </a>
      </Flex>
    </div>
  );
};

export default Breadcrums;
