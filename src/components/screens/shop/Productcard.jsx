import React from "react";
import Flex from "../../common/Flex";
import CardStar from "./CardStar";
import { BsHandbag } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Productcard = ({ className }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/product")}
      className={`${className} cursor-pointer p-[30px] rounded-[15px] bg-[#F4F4FF]`}
    >
      <Flex className="items-center justify-between">
        <span className=" py-[5px] px-[9px] rounded-full  bg-primary font-dm font-normal xl:text-[12px] leading-[10px] text-white">
          New
        </span>

        <div>
          <p className=" font-dm font-normal xl:text-[14px] leading-[14px] text-secondarytext">
            {" "}
            Reviews (18)
          </p>

          <CardStar />
        </div>
      </Flex>

      <div className=" w-auto 2xl:w-[212px] h-[258px] bg-gray-300 mx-auto mt-[50px] mb-[43px]"></div>

      <a
        onClick={() => navigate("/product")}
        className=" block font-dm font-normal xl:text-[16px] leading-[26px] text-maintext hover:text-primary xl:w-[250px]"
        href=""
      >
        Apple iPhone 14 Pro Max 128 GB Deep Purple (eSIM)
      </a>

      <button className=" mt-[29px] py-3 rounded-full bg-white font-dm font-normal xl:text-[18px] leading-[26px] text-maintext flex items-center justify-center w-full gap-[11px] hover:text-primary">
        {" "}
        <BsHandbag /> Add to Cart
      </button>
    </div>
  );
};

export default Productcard;
