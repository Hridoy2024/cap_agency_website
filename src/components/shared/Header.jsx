import React from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import Image from "../common/Image";
import UL from "../common/UL";
import LI from "../common/LI";
import { FaPhone } from "react-icons/fa6";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io5";

const Header = () => {
  return (
    <header className=" fixed z-50 w-full">
      <Container>
        <div className=" bg-primary py-2 rounded-r-[500px]">
          <div className=" h-[42px] bg-primary w-[50vw] absolute top-0 left-[0px] z-[-1]"></div>
          <Flex className="items-center justify-between">
            <div className="w-1/2">
              <Flex className="items-center gap-[30px]">
                <p className=" font-dm font-normal xl:text-[14px] leading-[26px] text-white ">
                  Welcome to Ortencey Digital Market Agency
                </p>

                <div className="h-[26px] w-[1px] bg-[#708FFF]"></div>

                <Flex className="items-center gap-2">
                  <FaPhone className=" text-orange" />

                  <p className=" font-dm font-normal xl:text-[14px] leading-[24px] text-white ">
                    +88 ( 5548 ) 6548
                  </p>
                </Flex>
                <div className="h-[26px] w-[1px] bg-[#708FFF]"></div>

                <Flex className="items-center gap-2">
                  <BsEnvelopeFill className=" text-orange" />

                  <p className=" font-dm font-normal xl:text-[14px] leading-[24px] text-white ">
                    infoyour@gmail.com
                  </p>
                </Flex>
              </Flex>
            </div>
            <div className="w-1/2">
              <Flex className="items-center justify-end gap-[46px]">
                <Flex className="items-center gap-[5px]">
                  <Image src="/usa.png" />

                  <p className=" font-nunito font-normal xl:text-[14px] leading-[24px] text-white">
                    English
                  </p>

                  <FaAngleDown className="text-white" />
                </Flex>

                <UL className="flex items-center mr-2">
                  <LI className=" flex items-center justify-center px-2 border-r-[1px] border-[#708FFF] h-[26px]">
                    <a href="">
                      <FaFacebookF className=" text-[#95ACFF] hover:text-orange" />
                    </a>
                  </LI>
                  <LI className=" flex items-center justify-center px-2 border-r-[1px] border-[#708FFF] h-[26px]">
                    <a href="">
                      <FaLinkedinIn className=" text-[#95ACFF] hover:text-orange" />
                    </a>
                  </LI>
                  <LI className=" flex items-center justify-center px-2 border-r-[1px] border-[#708FFF] h-[26px]">
                    <a href="">
                      <IoLogoTwitter className=" text-[#95ACFF] hover:text-orange" />
                    </a>
                  </LI>
                  <LI className=" flex items-center justify-center px-2 h-[26px]">
                    <a href="">
                      <IoLogoYoutube className=" text-[#95ACFF] hover:text-orange" />
                    </a>
                  </LI>
                </UL>
              </Flex>
            </div>
          </Flex>
        </div>
      </Container>
    </header>
  );
};

export default Header;
