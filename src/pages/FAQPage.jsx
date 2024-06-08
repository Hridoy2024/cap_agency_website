import React, { useState } from "react";
import PageBanner from "../components/common/PageBanner";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";
import { TbTargetArrow } from "react-icons/tb";
import Image from "../components/common/Image";
import { TiMinus, TiPlus } from "react-icons/ti";
import OneFaq from "../components/screens/Faq/OneFaq";

const FAQPage = () => {
  return (
    <main>
      <PageBanner title="Faq" />
      <Container>
        <Flex className="mt-[50px] flex-col gap-10 md:flex-row 2xl:mt-[120px]">
          <div className="w-full md:w-1/2">
            <Flex className="items-center gap-[10px]">
              <TbTargetArrow className="text-[22px] text-orange" />{" "}
              <p className=" font-dm font-medium xl:text-[20px] text-primary">
                Common Questions
              </p>
            </Flex>

            <h1 className=" font-nunito font-bold xl:text-[46px] text-maintext mt-4 mb-7">
              Frequently Asked Questions
            </h1>

            <Flex className="items-start flex-col gap-5 lg:flex-row justify-between">
              <div className="w-full lg:w-1/2">
                <button className=" w-full lg:w-auto mt-5 flex items-center justify-center gap-[15px] py-[17px] px-[30px] bg-[#F4F4FF]  rounded-full">
                  <Image src="/qu.png" />{" "}
                  <p className=" font-dm font-medium xl:text-[20px] text-maintext">
                    General Questions
                  </p>
                </button>
                <button className=" w-full lg:w-auto mt-5 flex items-center justify-center gap-[15px] py-[17px] px-[30px] bg-[#F4F4FF]  rounded-full">
                  <Image src="/qu.png" />{" "}
                  <p className=" font-dm font-medium xl:text-[20px] text-maintext">
                    General Questions
                  </p>
                </button>
                <button className=" w-full lg:w-auto mt-5 flex items-center justify-center gap-[15px] py-[17px] px-[30px] bg-[#F4F4FF]  rounded-full">
                  <Image src="/qu.png" />{" "}
                  <p className=" font-dm font-medium xl:text-[20px] text-maintext">
                    General Questions
                  </p>
                </button>
              </div>
              <div className="w-full lg:w-1/2">
                <Image className="mx-auto lg:ml-0" src="/faq.png" />
              </div>
            </Flex>
          </div>
          <div className="w-full md:w-1/2">
            <OneFaq />
            <OneFaq />
            <OneFaq />
            <OneFaq />
          </div>
        </Flex>
      </Container>

      <div className=" bg-chooseBg py-[120px] mt-[50px] 2xl:mt-[120px]">
        <Container>
          <Flex className="gap-[85px] flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="w-full h-[300px] 2xl:h-full rounded-[20px] bg-gray-400"></div>
            </div>
            <div className="w-full md:w-1/2">
              <h1 className=" font-nunito font-bold xl:text-[46px] leading-[36px] text-maintext">
                Contact Me
              </h1>

              <p className=" font-dm font-normal xl:text-[16px] leading-[36px] text-secondarytext">
                Your email address will not be published. Required fields are
                marked
              </p>
              <form action="" className="mt-[25px]">
                <Flex className="items-center flex-col md:flex-row gap-5">
                  <input
                    className="mb-5 py-[15px] px-[26px] bg-white rounded-full w-full font-dm font-normal xl:text-[16px] outline-none"
                    placeholder="Your Name"
                    type="text"
                    name=""
                    id=""
                  />
                  <input
                    className="mb-5 py-[15px] px-[26px] bg-white rounded-full w-full font-dm font-normal xl:text-[16px] outline-none"
                    placeholder="Email Address"
                    type="text"
                    name=""
                    id=""
                  />
                </Flex>
                <input
                  className="mb-5 py-[15px] px-[26px] bg-white rounded-full w-full font-dm font-normal xl:text-[16px] outline-none"
                  placeholder="Business Topic"
                  type="text"
                  name=""
                  id=""
                />
                <textarea
                  className=" h-[173px] mb-5 py-[15px] px-[26px] bg-white rounded-[20px] w-full font-dm font-normal xl:text-[16px] outline-none"
                  placeholder="Your Message"
                  type="text"
                  name=""
                  id=""
                ></textarea>

                <button className=" font-dm font-normal xl:text-[18px] leading-[30px] text-white py-[15px] px-[33px] rounded-full bg-lenearOne flex items-center justify-center">
                  Send Message
                </button>
              </form>
            </div>
          </Flex>
        </Container>
      </div>
    </main>
  );
};

export default FAQPage;
