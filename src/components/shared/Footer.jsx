import React from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import UL from "../common/UL";
import LI from "../common/LI";
import { GoDotFill } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { IoCall } from "react-icons/io5";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-[120px]">
      <div className=" bg-footerbg pt-[60px] pb-[93px]">
        <Container>
          <Flex className=" flex-col md:flex-row gap-5">
            <div className=" w-full md:w-1/2">
              <h2 className=" font-dm font-normal text-[8px] md:text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[26px] text-white">
                For Digital Marketing Agency
              </h2>
              <h1 className=" font-nunito font-bold text-[18px] md:text-[20px] lg:text-[22px] 2xl:text-[25px] text-white">
                Join Our Agency Community
              </h1>
            </div>
            <div className=" w-full md:w-1/2">
              <div className=" relative w-auto 2xl:w-[535px] ml-auto">
                <input
                  className=" w-full 2xl:w-[535px] block py-[12px] px-[22px] 2xl:py-[25px] 2xl:px-[35px]  rounded-full font-dm font-normal text-[10px] md:text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[26px] text-maintext"
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your email address"
                />

                <button className=" absolute right-0 xl:right-1 2xl:right-2 top-[50%] translate-y-[-50%] px-3 py-2 2xl:py-[15px] 2xl:px-[33px] font-dm font-normal text-[12px] md:text-[12px] lg:text-[16px] 2xl:text-[18px] leading-[30px] rounded-full bg-primary text-white">
                  Subscribe Now
                </button>
              </div>
            </div>
          </Flex>

          <Flex className=" mt-[80px] 2xl:mt-[154px] gap-10 flex-col md:flex-row md:flex-wrap md:gap-5 xl:flex-nowrap">
            <div className=" w-full md:w-[44%] xl:w-1/2 2xl:w-1/4">
              <div className=" relative">
                <h1 className=" font-nunito font-bold text-[10px] md:text-[15px] lg:text-[20px] 2xl:text-[25px] text-white">
                  About Company
                </h1>

                <div className="w-[87px] h-[2px] absolute bg-lenearOne left-0 bottom-[-12px]"></div>
              </div>

              <p className="mt-[23px] font-dm font-normal text-[10px] md:text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[26px] text-[#D9D9D9]">
                There are many variations of passages of Lore Ipsum availab but
                the majority have suffereds alteration in some form, by injected
                humour a randomised words which
              </p>

              <Flex className=" items-center gap-3 mt-[22px] ">
                <a
                  href=""
                  className=" w-[25px] h-[25px] 2xl:w-[33px] 2xl:h-[33px] flex items-center justify-center bg-[#F4F4FF] text-primary hover:bg-primary hover:text-white rounded-full"
                >
                  <FaFacebookF />
                </a>
                <a
                  href=""
                  className=" w-[25px] h-[25px] 2xl:w-[33px] 2xl:h-[33px] flex items-center justify-center bg-[#F4F4FF] text-primary hover:bg-primary hover:text-white rounded-full"
                >
                  <FaTwitter />
                </a>
                <a
                  href=""
                  className=" w-[25px] h-[25px] 2xl:w-[33px] 2xl:h-[33px] flex items-center justify-center bg-[#F4F4FF] text-primary hover:bg-primary hover:text-white rounded-full"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href=""
                  className=" w-[25px] h-[25px] 2xl:w-[33px] 2xl:h-[33px] flex items-center justify-center bg-[#F4F4FF] text-primary hover:bg-primary hover:text-white rounded-full"
                >
                  <FaYoutube />
                </a>
              </Flex>
            </div>

            <div className=" w-full md:w-[44%] xl:w-1/2 2xl:w-1/4">
              <div className=" relative">
                <h1 className=" font-nunito font-bold text-[10px] md:text-[15px] lg:text-[20px] 2xl:text-[25px] text-white">
                  Featured Services
                </h1>

                <div className="w-[87px] h-[2px] absolute bg-lenearOne left-0 bottom-[-12px]"></div>
              </div>

              <UL className="mt-[23px]">
                <LI>
                  <Flex className="items-center gap-1 2xl:gap-5">
                    <GoDotFill className=" text-primary" />
                    <a
                      href=""
                      className=" font-dm font-normal text-[10px] md:text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[36px] text-white hover:text-primary"
                    >
                      Social Media Marketing
                    </a>
                  </Flex>
                </LI>
                <LI>
                  <Flex className="items-center gap-1 2xl:gap-5">
                    <GoDotFill className=" text-primary" />
                    <a
                      href=""
                      className=" font-dm font-normal text-[10px] md:text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[36px] text-white hover:text-primary"
                    >
                      Social Media Marketing
                    </a>
                  </Flex>
                </LI>
                <LI>
                  <Flex className="items-center gap-1 2xl:gap-5">
                    <GoDotFill className=" text-primary" />
                    <a
                      href=""
                      className=" font-dm font-normal text-[10px] md:text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[36px] text-white hover:text-primary"
                    >
                      Social Media Marketing
                    </a>
                  </Flex>
                </LI>
                <LI>
                  <Flex className="items-center gap-1 2xl:gap-5">
                    <GoDotFill className=" text-primary" />
                    <a
                      href=""
                      className=" font-dm font-normal text-[10px] md:text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[36px] text-white hover:text-primary"
                    >
                      Social Media Marketing
                    </a>
                  </Flex>
                </LI>
                <LI>
                  <Flex className="items-center gap-1 2xl:gap-5">
                    <GoDotFill className=" text-primary" />
                    <a
                      href=""
                      className=" font-dm font-normal text-[10px] md:text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[36px] text-white hover:text-primary"
                    >
                      Social Media Marketing
                    </a>
                  </Flex>
                </LI>
              </UL>
            </div>

            <div className=" w-full md:w-[44%] xl:w-1/2 2xl:w-1/4">
              <div className=" relative">
                <h1 className=" font-nunito font-bold text-[10px] md:text-[15px] lg:text-[20px] 2xl:text-[25px] text-white">
                  Recent Post
                </h1>

                <div className="w-[87px] h-[2px] absolute bg-lenearOne left-0 bottom-[-12px]"></div>
              </div>

              <div className="mt-[23px]">
                <Flex className=" gap-5 mb-6">
                  <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] 2xl:w-[70px] 2xl:h-[70px] bg-gray-300 rounded-[5px]"></div>
                  <div>
                    <h3 className=" font-dm font-normal text-[10px] md:text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[22px] w-auto 2xl:w-[163px] text-[#d9d9d9]">
                      Thoughtful man using laptop pondering{" "}
                    </h3>

                    <p className=" flex items-center gap-2">
                      <SlCalender className=" text-primary" />
                      <span className=" font-poppins font-normal text-[12px] 2xl:text-[14px] text-[#d9d9d9]">
                        09 Dec 2022
                      </span>
                    </p>
                  </div>
                </Flex>
                <Flex className=" gap-5 mb-6">
                  <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] 2xl:w-[70px] 2xl:h-[70px] bg-gray-300 rounded-[5px]"></div>
                  <div>
                    <h3 className=" font-dm font-normal text-[10px] md:text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[22px] w-auto 2xl:w-[163px] text-[#d9d9d9]">
                      Thoughtful man using laptop pondering{" "}
                    </h3>

                    <p className=" flex items-center gap-2">
                      <SlCalender className=" text-primary" />
                      <span className=" font-poppins font-normal text-[12px] 2xl:text-[14px] text-[#d9d9d9]">
                        09 Dec 2022
                      </span>
                    </p>
                  </div>
                </Flex>
              </div>
            </div>

            <div className=" w-full md:w-[44%] xl:w-1/2 2xl:w-1/4">
              <div className=" relative">
                <h1 className=" font-nunito font-bold text-[10px] md:text-[15px] lg:text-[20px] 2xl:text-[25px] text-white">
                  Contact Us
                </h1>

                <div className="w-[87px] h-[2px] absolute bg-lenearOne left-0 bottom-[-12px]"></div>
              </div>

              <div className="mt-[23px]">
                <p className=" mt-[14px] flex items-center gap-2 font-dm font-normal text-[10px] md:text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[26px] text-[#d9d9d9]">
                  <IoCall className="text-primary" /> +(323) 750-1234
                </p>
                <p className=" mt-[14px] flex items-center gap-2 font-dm font-normal text-[10px] md:text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[26px] text-[#d9d9d9]">
                  <BsEnvelopeFill className="text-primary" />{" "}
                  infoyourortencey@gmail.com
                </p>
                <p className=" mt-[14px] flex items-center gap-2 font-dm font-normal text-[10px] md:text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[26px] text-[#d9d9d9]">
                  <FaLocationDot className="text-primary" /> 374 FA Tower,
                  William S Blvd, Melbourne 2721, IL, USA
                </p>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
      <div className=" bg-primary py-2 2xl:py-[22px]">
        <Container>
          <Flex className="items-center justify-between">
            <p className=" font-dm font-normal text-[8px] md:text-[12px] 2xl:text-[16px] text-white">
              2022 © All rights reserved by devsnest-llc
            </p>

            <Flex className="items-center justify-center gap-7">
              <a
                className=" font-dm font-normal text-[8px] md:text-[12px] 2xl:text-[16px] text-white"
                href=""
              >
                Privacy Policy
              </a>

              <div className="h-[10px] w-[2px] bg-white"></div>
              <a
                className=" font-dm font-normal text-[8px] md:text-[12px] 2xl:text-[16px] text-white"
                href=""
              >
                Terms & Conditions
              </a>
            </Flex>
          </Flex>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
