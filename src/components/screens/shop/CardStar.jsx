import React from "react";
import Flex from "../../common/Flex";
import { FaStar } from "react-icons/fa6";

const CardStar = () => {
  return (
    <Flex className="items-center gap-1">
      <FaStar className="text-[12px] text-yellow-400" />
      <FaStar className="text-[12px] text-yellow-400" />
      <FaStar className="text-[12px] text-yellow-400" />
      <FaStar className="text-[12px] text-yellow-400" />
      <FaStar className="text-[12px] text-yellow-400" />
    </Flex>
  );
};

export default CardStar;
