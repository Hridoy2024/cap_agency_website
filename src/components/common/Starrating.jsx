import React from "react";
import Flex from "./Flex";
import { FaStar } from "react-icons/fa6";

const Starrating = () => {
  return (
    <Flex className=" rounded-full p-[15px] gap-[6px] bg-white">
      <FaStar className=" text-yellow-400 text-[15px]" />
      <FaStar className=" text-yellow-400 text-[15px]" />
      <FaStar className=" text-yellow-400 text-[15px]" />
      <FaStar className=" text-yellow-400 text-[15px]" />
      <FaStar className=" text-yellow-400 text-[15px]" />
    </Flex>
  );
};

export default Starrating;
