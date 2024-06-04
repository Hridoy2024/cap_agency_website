import React from "react";
import PageBanner from "../components/common/PageBanner";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";
import UL from "../components/common/UL";
import LI from "../components/common/LI";
import { FaCheckCircle } from "react-icons/fa";
import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaLocationDot,
  FaPhone,
  FaSkype,
} from "react-icons/fa6";
import { BsEnvelopeFill } from "react-icons/bs";

const Portfoliodetails = () => {
  return (
    <main>
      <PageBanner title="Portfolio Details" />
      <Container>
        <div className="mt-[120px] rounded-[20px] bg-gray-300 h-[662px]"></div>
        <Flex className="mt-[60px] items-center justify-between rounded-[20px] p-[60px] bg-[#F4F4FF]">
          <div className="w-3/12">
            <Flex className=" items-center ">
              <Flex className="w-6/12 items-center font-dm font-medium xl:text-[20px] leading-[40px]">
                <p className=" text-maintext">Start Date:</p>
              </Flex>

              <div className="w-6/12">
                <p className=" font-dm font-normal xl:text-[16px] leading-[40px] text-secondarytext">
                  15 Dec 2022
                </p>
              </div>
            </Flex>

            <Flex className=" items-center ">
              <Flex className="w-6/12 items-center font-dm font-medium xl:text-[20px] leading-[40px]">
                <p className=" text-maintext">End Date:</p>
              </Flex>

              <div className="w-6/12">
                <p className=" font-dm font-normal xl:text-[16px] leading-[40px] text-secondarytext">
                  15 Dec 2022
                </p>
              </div>
            </Flex>
          </div>

          <div className="w-3/12">
            <Flex className=" items-center ">
              <Flex className="w-6/12 items-center font-dm font-medium xl:text-[20px] leading-[40px]">
                <p className=" text-maintext">Client:</p>
              </Flex>

              <div className="w-6/12">
                <p className=" font-dm font-normal xl:text-[16px] leading-[40px] text-secondarytext">
                  Jiyatan Raw
                </p>
              </div>
            </Flex>

            <Flex className=" items-center ">
              <Flex className="w-6/12 items-center font-dm font-medium xl:text-[20px] leading-[40px]">
                <p className=" text-maintext">Tags :</p>
              </Flex>

              <div className="w-6/12">
                <p className=" font-dm font-normal xl:text-[16px] leading-[40px] text-secondarytext">
                  Agency
                </p>
              </div>
            </Flex>
          </div>

          <div className="w-3/12">
            <Flex className=" items-center ">
              <Flex className="w-6/12 items-center font-dm font-medium xl:text-[20px] leading-[40px]">
                <p className=" text-maintext">Website:</p>
              </Flex>

              <div className="w-6/12">
                <p className=" font-dm font-normal xl:text-[16px] leading-[40px] text-secondarytext">
                  Jiyatan Raw.com
                </p>
              </div>
            </Flex>

            <Flex className=" items-center ">
              <Flex className="w-6/12 items-center font-dm font-medium xl:text-[20px] leading-[40px]">
                <p className=" text-maintext">Category :</p>
              </Flex>

              <div className="w-6/12">
                <p className=" font-dm font-normal xl:text-[16px] leading-[40px] text-secondarytext">
                  Agency
                </p>
              </div>
            </Flex>
          </div>
        </Flex>

        <div className="mt-[53px]">
          <h1 className=" font-nunito font-bold xl:text-[25px] text-maintext">
            Human Figurines Using Ladder to Reach Cracked lit Lightbulb as an
            Idea
          </h1>

          <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext mt-[17px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look as even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the as Lorem Ipsum generators on the Internet
            tend to repeat predefined chunks as necessary, making this the first
            true generator on the Internet. It uses a dictionary of over Latin
            words need to as be sure there isn't anything as embarrassing hidden
            in the middle of text. All the Lorem Ipsum generators on the
            Internet tend to repeat predefined.
          </p>
        </div>

        <Flex className="mt-[57px] gap-[60px] justify-between">
          <div className="w-1/2">
            <UL className="flex flex-wrap mt-7">
              <LI className="w-1/2  flex items-center gap-2 font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
                <FaCheckCircle className="text-orange" /> Research beyond the
                business plan{" "}
              </LI>
              <LI className="w-1/2  flex items-center gap-2 font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
                <FaCheckCircle className="text-orange" /> Research beyond the
                business plan{" "}
              </LI>
              <LI className="w-1/2  flex items-center gap-2 font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
                <FaCheckCircle className="text-orange" /> Research beyond the
                business plan{" "}
              </LI>
              <LI className="w-1/2  flex items-center gap-2 font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
                <FaCheckCircle className="text-orange" /> Research beyond the
                business plan
              </LI>

              <LI className="w-1/2  flex items-center gap-2 font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
                <FaCheckCircle className="text-orange" /> Research beyond the
                business plan{" "}
              </LI>
              <LI className="w-1/2  flex items-center gap-2 font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
                <FaCheckCircle className="text-orange" /> Research beyond the
                business plan{" "}
              </LI>
              <LI className="w-1/2  flex items-center gap-2 font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
                <FaCheckCircle className="text-orange" /> Research beyond the
                business plan
              </LI>
              <LI className="w-1/2  flex items-center gap-2 font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
                <FaCheckCircle className="text-orange" /> Research beyond the
                business plan
              </LI>
            </UL>

            <Flex className="mt-[57px] gap-[22px]">
              <div className="w-1/2">
                <div className="w-full h-[335px] rounded-[20px] bg-gray-300"></div>
              </div>
              <div className="w-1/2">
                <div className="w-full h-[335px] rounded-[20px] bg-gray-300"></div>
              </div>
            </Flex>
          </div>

          <div className="w-1/2">
            <div className="w-[586px] rounded-[20px] py-8 px-10 bg-[#F4F4FF] ml-auto">
              <h1 className=" font-nunito font-bold xl:text-[25px] text-maintext">
                Need Your Help?
              </h1>

              <div className=" w-full h-[1px] bg-gray-300 mt-2">
                <div className="w-[20%] h-full bg-lenearOne"></div>
              </div>

              <UL className="flex flex-wrap mt-7">
                <LI className="w-1/2  flex items-center gap-7 font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
                  <FaPhone className="text-orange" /> Digital Strategy
                </LI>
                <LI className="w-1/2  flex items-center gap-7 font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
                  <BsEnvelopeFill className="text-orange" /> SEO Optimization
                </LI>
                <LI className="w-1/2  flex items-center gap-7 font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
                  <FaSkype className="text-orange" /> Marketing
                </LI>
                <LI className="w-1/2  flex items-center gap-7 font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
                  <FaLocationDot className="text-orange" /> First Working
                  Process
                </LI>
              </UL>
            </div>

            <p className=" mt-[19px] font-poppins font-normal xl:text-[16px] leading-[26px] text-secondarytext">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which do look as even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing.
            </p>
            <p className=" mt-5 font-poppins font-normal xl:text-[16px] leading-[26px] text-secondarytext">
              Hidden in the middle of text. All the as Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Inte rnet. It uses a
              dictionary of over Latin words need to as be sure.
            </p>
          </div>
        </Flex>

        <Flex className="mt-[120px] items-center justify-between">
          <h1 className=" font-nunito font-bold xl:text-[46px] leading-[56px] text-maintext">
            Our Similar Projects
          </h1>

          <Flex className="items-center gap-5">
            <button className="h-[60px] w-[60px] rounded-full bg-lenearOne flex items-center justify-center">
              <FaArrowLeftLong className="text-[22px] text-white" />
            </button>
            <button className="h-[60px] w-[60px] rounded-full bg-lenearOne flex items-center justify-center ">
              <FaArrowRightLong className="text-[22px] text-white" />
            </button>
          </Flex>
        </Flex>

        <Flex className=" items-center justify-between gap-6 mt-[46px]">
          <div className="w-[33%] h-[462px] rounded-[10px] bg-gray-300"></div>
          <div className="w-[33%] h-[462px] rounded-[10px] bg-gray-300"></div>
          <div className="w-[33%] h-[462px] rounded-[10px] bg-gray-300"></div>
        </Flex>
      </Container>
    </main>
  );
};

export default Portfoliodetails;
