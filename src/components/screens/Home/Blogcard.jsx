import React from "react";
import Flex from "../../common/Flex";
import { CiUser } from "react-icons/ci";
import { IoChatbubblesOutline } from "react-icons/io5";
import { LuEye } from "react-icons/lu";

const Blogcard = ({ className }) => {
  return (
    <div className={`${className} rounded-[30px] bg-[#F4F4FF]`}>
      <div className="rounded-[30px] h-[387px] bg-gray-400 relative">
        <Flex className=" absolute bottom-0 left-0 items-center z-30 justify-center flex-col w-[116px] h-[98px] rounded-[30px] bg-primary">
          <p className=" font-dm font-medium xl:text-[20px] text-white">
            09 Dec
          </p>
          <p className=" font-dm font-medium xl:text-[20px] text-white">2022</p>
        </Flex>

        <div className=" absolute left-12 bottom-0 xl:w-[195px] rounded-full py-[6px] px-4 bg-primary/50 text-right font-dm font-normal xl:text-[16px] leading-[26px] text-white">
          Digital Agency
        </div>
      </div>
      <div className="pt-[27px] px-[30px] ">
        <Flex className="items-center gap-10">
          <Flex className="items-center gap-[6px]">
            <CiUser className=" text-primary" />{" "}
            <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext">
              by Admin
            </p>
          </Flex>
          <Flex className="items-center gap-[6px]">
            <IoChatbubblesOutline className=" text-primary" />{" "}
            <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext">
              25
            </p>
          </Flex>
          <Flex className="items-center gap-[6px]">
            <LuEye className=" text-primary" />{" "}
            <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext">
              120 Views
            </p>
          </Flex>
        </Flex>

        <p className=" cursor-pointer mt-4 font-nunito font-bold xl:text-[25px] text-maintext hover:underline hover:text-primary">
          Successful business partner have a meeting and discussing
        </p>
      </div>
    </div>
  );
};

export default Blogcard;
