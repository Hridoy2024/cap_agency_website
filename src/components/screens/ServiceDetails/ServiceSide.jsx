import React from "react";
import UL from "../../common/UL";
import LI from "../../common/LI";
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceSide = () => {
  return (
    <>
      <div className=" rounded-[20px] py-8 px-10 bg-white shadow-shadowOne">
        <div>
          <h1 className=" font-nunito font-bold xl:text-[25px] text-maintext">
            Our All Service
          </h1>
          <div className=" w-full h-[1px] bg-gray-300 mt-2">
            <div className="w-[20%] h-full bg-lenearOne"></div>
          </div>
        </div>

        <UL className="mt-10">
          <LI className="mt-5">
            <a
              href=""
              className=" flex items-center justify-between py-[15px] px-[30px] rounded-full bg-[#F4F4FF] hover:bg-lenearOne font-dm font-medium xl:text-[20px] text-maintext hover:text-white"
            >
              Search Engine Optimization <FaArrowRightLong />{" "}
            </a>
          </LI>
          <LI className="mt-5">
            <a
              href=""
              className=" flex items-center justify-between py-[15px] px-[30px] rounded-full bg-[#F4F4FF] hover:bg-lenearOne font-dm font-medium xl:text-[20px] text-maintext hover:text-white"
            >
              Search Engine Optimization <FaArrowRightLong />{" "}
            </a>
          </LI>
          <LI className="mt-5">
            <a
              href=""
              className=" flex items-center justify-between py-[15px] px-[30px] rounded-full bg-[#F4F4FF] hover:bg-lenearOne font-dm font-medium xl:text-[20px] text-maintext hover:text-white"
            >
              Search Engine Optimization <FaArrowRightLong />{" "}
            </a>
          </LI>
          <LI className="mt-5">
            <a
              href=""
              className=" flex items-center justify-between py-[15px] px-[30px] rounded-full bg-[#F4F4FF] hover:bg-lenearOne font-dm font-medium xl:text-[20px] text-maintext hover:text-white"
            >
              Search Engine Optimization <FaArrowRightLong />{" "}
            </a>
          </LI>
        </UL>
      </div>

      <div className="rounded-[20px] py-8 px-10 bg-black/70 mt-[50px]">
        <div>
          <h1 className=" font-nunito font-bold xl:text-[25px] text-white">
            Get a free quote
          </h1>
          <div className=" w-full h-[1px] bg-gray-300 mt-2">
            <div className="w-[20%] h-full bg-lenearOne"></div>
          </div>
        </div>

        <form action="" className="mt-[25px]">
          <input
            className="mb-5 py-[15px] px-[26px] bg-[#F4F4F4] rounded-full w-full font-dm font-normal xl:text-[16px] outline-none"
            placeholder="Your Name"
            type="text"
            name=""
            id=""
          />
          <input
            className="mb-5 py-[15px] px-[26px] bg-[#F4F4F4] rounded-full w-full font-dm font-normal xl:text-[16px] outline-none"
            placeholder="Your Email Address"
            type="text"
            name=""
            id=""
          />
          <textarea
            className=" h-[173px] mb-5 py-[15px] px-[26px] bg-[#F4F4F4] rounded-[20px] w-full font-dm font-normal xl:text-[16px] outline-none"
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

      <div className=" rounded-[20px] py-8 px-10 bg-white shadow-shadowOne mt-[50px]">
        <div>
          <h1 className=" font-nunito font-bold xl:text-[25px] text-maintext">
            Download
          </h1>
          <div className=" w-full h-[1px] bg-gray-300 mt-2">
            <div className="w-[20%] h-full bg-lenearOne"></div>
          </div>
        </div>

        <UL className="mt-10">
          <LI className="mt-5">
            <a
              href=""
              className=" flex items-center justify-between py-[15px] px-[30px] rounded-full bg-[#F4F4FF] hover:bg-lenearOne font-dm font-medium xl:text-[20px] text-maintext hover:text-white"
            >
              Our Brochures 2023 <FaArrowRightLong />{" "}
            </a>
          </LI>
          <LI className="mt-5">
            <a
              href=""
              className=" flex items-center justify-between py-[15px] px-[30px] rounded-full bg-[#F4F4FF] hover:bg-lenearOne font-dm font-medium xl:text-[20px] text-maintext hover:text-white"
            >
              About Our Company <FaArrowRightLong />{" "}
            </a>
          </LI>
        </UL>
      </div>
    </>
  );
};

export default ServiceSide;
