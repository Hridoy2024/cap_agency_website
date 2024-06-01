import React from "react";
import Flex from "./Flex";
import { TbTargetArrow } from "react-icons/tb";

const Title = ({ title, text }) => {
  return (
    <div className="text-center">
      <Flex className="items-center justify-center gap-[10px]">
        <TbTargetArrow className="text-[22px] text-orange" />{" "}
        <p className=" font-dm font-medium xl:text-[20px] text-primary">
          {title}
        </p>
      </Flex>

      <h1 className=" mt-4 font-nunito font-bold xl:text-[46px] leading-[56px] text-maintext">
        {text}
      </h1>
    </div>
  );
};

export default Title;
