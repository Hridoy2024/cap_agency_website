import React from "react";
import Flex from "../../common/Flex";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Usercard = () => {
  return (
    <div className="w-[25%] rounded-[30px] p-5 bg-white">
      <div className="w-full h-[319px] bg-gray-400 rounded-[30px]"></div>

      <div className="mt-6 h-[75px] overflow-hidden group relative">
        <div className=" opacity-100 duration-150 ease-in-out  group-hover:opacity-0">
          <h1 className=" font-poppins font-medium xl:text-[30px] text-center text-maintext">
            Robert Sions
          </h1>
          <h2 className=" font-poppins font-medium xl:text-[20px] text-center text-secondarytext">
            Business Consultant
          </h2>
        </div>

        <Flex className=" items-center justify-center gap-3 mt-2 absolute w-full opacity-0 top-8 group-hover:top-0 left-0  group-hover:ease-in-out group-hover:opacity-100 group-hover:duration-300">
          <a
            href=""
            className="w-[46px] h-[46px] flex items-center justify-center bg-[#F4F4FF] text-primary hover:bg-primary hover:text-white rounded-full"
          >
            {" "}
            <FaFacebookF />{" "}
          </a>
          <a
            href=""
            className="w-[46px] h-[46px] flex items-center justify-center bg-[#F4F4FF] text-primary hover:bg-primary hover:text-white rounded-full"
          >
            {" "}
            <FaTwitter />{" "}
          </a>
          <a
            href=""
            className="w-[46px] h-[46px] flex items-center justify-center bg-[#F4F4FF] text-primary hover:bg-primary hover:text-white rounded-full"
          >
            {" "}
            <FaLinkedinIn />{" "}
          </a>
          <a
            href=""
            className="w-[46px] h-[46px] flex items-center justify-center bg-[#F4F4FF] text-primary hover:bg-primary hover:text-white rounded-full"
          >
            {" "}
            <FaYoutube />{" "}
          </a>
        </Flex>
      </div>
    </div>
  );
};

export default Usercard;
