import React from "react";
import { FaSearch } from "react-icons/fa";
import LI from "../../common/LI";
import Flex from "../../common/Flex";
import UL from "../../common/UL";
import { SlCalender } from "react-icons/sl";

const BlogsSide = () => {
  return (
    <div>
      <div className=" w-full rounded-[20px] border-[1px] border-orange py-6 px-[30px]">
        <div>
          <h2 className=" font-nunito font-bold xl:text-[25px] text-maintext">
            Search
          </h2>

          <div className=" w-full h-[1px] bg-[#F4F4FF]">
            <div className="w-[20%] bg-lenearOne h-full"></div>
          </div>
        </div>

        <div className=" relative mt-6">
          <input
            className=" font-poppins font-normal xl:text-[14px] leading-[24px] text-[#e9e9e9] placeholder:text-[#e9e9e9] outline-none rounded-full py-[8px] px-[20px] w-full  bg-lenearOne"
            type="text"
            name=""
            id=""
            placeholder="Search"
          />

          <FaSearch className=" text-[#e9e9e9] absolute top-[50%] translate-y-[-50%] right-3" />
        </div>
      </div>

      <div className=" w-full rounded-[20px] border-[1px] border-orange py-6 px-[30px] mt-[50px]">
        <div>
          <h2 className=" font-nunito font-bold xl:text-[25px] text-maintext">
            Categorys
          </h2>

          <div className=" w-full h-[1px] bg-[#F4F4FF]">
            <div className="w-[20%] bg-lenearOne h-full"></div>
          </div>
        </div>

        <UL>
          <LI className="my-1">
            <Flex className=" justify-between">
              <div className="w-[80%] md:w-1/2">
                <p className=" font-dm font-normal text-[12px] 2xl:text-[16px] leading-[50px] text-secondarytext">
                  Business Consulting(05)
                </p>
              </div>
              <div className="w-[20%] md:w-1/2">
                <Flex className="items-center justify-between">
                  <span className=" hidden md:block font-dm font-normal text-[12px] 2xl:text-[16px] leading-[50px] text-secondarytext">
                    --------------
                  </span>

                  <span className="font-dm font-normal text-[12px] 2xl:text-[16px] leading-[50px] text-secondarytext">
                    (05)
                  </span>
                </Flex>
              </div>
            </Flex>
          </LI>
          <LI className="my-1">
            <Flex className=" justify-between">
              <div className="w-[80%] md:w-1/2">
                <p className=" font-dm font-normal text-[12px] 2xl:text-[16px] leading-[50px] text-secondarytext">
                  Business Consulting(05)
                </p>
              </div>
              <div className="w-[20%] md:w-1/2">
                <Flex className="items-center justify-between">
                  <span className=" hidden md:block font-dm font-normal text-[12px] 2xl:text-[16px] leading-[50px] text-secondarytext">
                    --------------
                  </span>

                  <span className="font-dm font-normal text-[12px] 2xl:text-[16px] leading-[50px] text-secondarytext">
                    (05)
                  </span>
                </Flex>
              </div>
            </Flex>
          </LI>
          <LI className="my-1">
            <Flex className=" justify-between">
              <div className="w-[80%] md:w-1/2">
                <p className=" font-dm font-normal text-[12px] 2xl:text-[16px] leading-[50px] text-secondarytext">
                  Business Consulting(05)
                </p>
              </div>
              <div className="w-[20%] md:w-1/2">
                <Flex className="items-center justify-between">
                  <span className=" hidden md:block font-dm font-normal text-[12px] 2xl:text-[16px] leading-[50px] text-secondarytext">
                    --------------
                  </span>

                  <span className="font-dm font-normal text-[12px] 2xl:text-[16px] leading-[50px] text-secondarytext">
                    (05)
                  </span>
                </Flex>
              </div>
            </Flex>
          </LI>
          <LI className="my-1">
            <Flex className=" justify-between">
              <div className="w-[80%] md:w-1/2">
                <p className=" font-dm font-normal text-[12px] 2xl:text-[16px] leading-[50px] text-secondarytext">
                  Business Consulting(05)
                </p>
              </div>
              <div className="w-[20%] md:w-1/2">
                <Flex className="items-center justify-between">
                  <span className=" hidden md:block font-dm font-normal text-[12px] 2xl:text-[16px] leading-[50px] text-secondarytext">
                    --------------
                  </span>

                  <span className="font-dm font-normal text-[12px] 2xl:text-[16px] leading-[50px] text-secondarytext">
                    (05)
                  </span>
                </Flex>
              </div>
            </Flex>
          </LI>
          <LI className="my-1">
            <Flex className=" justify-between">
              <div className="w-[80%] md:w-1/2">
                <p className=" font-dm font-normal text-[12px] 2xl:text-[16px] leading-[50px] text-secondarytext">
                  Business Consulting(05)
                </p>
              </div>
              <div className="w-[20%] md:w-1/2">
                <Flex className="items-center justify-between">
                  <span className=" hidden md:block font-dm font-normal text-[12px] 2xl:text-[16px] leading-[50px] text-secondarytext">
                    --------------
                  </span>

                  <span className="font-dm font-normal text-[12px] 2xl:text-[16px] leading-[50px] text-secondarytext">
                    (05)
                  </span>
                </Flex>
              </div>
            </Flex>
          </LI>
        </UL>
      </div>
      <div className=" w-full rounded-[20px] border-[1px] border-orange py-6 px-[30px] mt-[50px]">
        <div>
          <h2 className=" font-nunito font-bold xl:text-[25px] text-maintext">
            Recent News
          </h2>

          <div className=" w-full h-[1px] bg-[#F4F4FF]">
            <div className="w-[20%] bg-lenearOne h-full"></div>
          </div>
        </div>

        <Flex className="items-center mt-6 mb-[30px]">
          <div className="w-[45%] xl:w-3/12">
            <div className="h-[92px] w-[92px] rounded-[5px] bg-gray-300"></div>
          </div>
          <div className="w-[55%] xl:w-9/12">
            <div>
              <h1 className=" font-nunito font-medium text-[15px] 2xl:text-[20px] text-maintext">
                Successful business partners having a meetin
              </h1>

              <Flex className="items-center gap-[15px]">
                <SlCalender className="text-primary" />
                <p className=" font-dm font-normal xl:text-[16px] leading-[26px]  text-secondarytext">
                  15 Dec 2022
                </p>
              </Flex>
            </div>
          </div>
        </Flex>
        <Flex className="items-center mt-6 mb-[30px]">
          <div className="w-[45%] xl:w-3/12">
            <div className="h-[92px] w-[92px] rounded-[5px] bg-gray-300"></div>
          </div>
          <div className="w-[55%] xl:w-9/12">
            <div>
              <h1 className=" font-nunito font-medium text-[15px] 2xl:text-[20px] text-maintext">
                Successful business partners having a meetin
              </h1>

              <Flex className="items-center gap-[15px]">
                <SlCalender className="text-primary" />
                <p className=" font-dm font-normal xl:text-[16px] leading-[26px]  text-secondarytext">
                  15 Dec 2022
                </p>
              </Flex>
            </div>
          </div>
        </Flex>
        <Flex className="items-center mt-6 mb-[30px]">
          <div className="w-[45%] xl:w-3/12">
            <div className="h-[92px] w-[92px] rounded-[5px] bg-gray-300"></div>
          </div>
          <div className="w-[55%] xl:w-9/12">
            <div>
              <h1 className=" font-nunito font-medium text-[15px] 2xl:text-[20px] text-maintext">
                Successful business partners having a meetin
              </h1>

              <Flex className="items-center gap-[15px]">
                <SlCalender className="text-primary" />
                <p className=" font-dm font-normal xl:text-[16px] leading-[26px]  text-secondarytext">
                  15 Dec 2022
                </p>
              </Flex>
            </div>
          </div>
        </Flex>
      </div>

      <div className=" w-full rounded-[20px] border-[1px] border-orange py-6 px-[30px] mt-[50px]">
        <div>
          <h2 className=" font-nunito font-bold xl:text-[25px] text-maintext">
            Popular Tags
          </h2>

          <div className=" w-full h-[1px] bg-[#F4F4FF]">
            <div className="w-[20%] bg-lenearOne h-full"></div>
          </div>
        </div>

        <Flex className="mt-[25px] flex-wrap gap-[19px]">
          <span className=" py-[7px] px-5 bg-[#F4F4FF] rounded-[5px] font-dm font-normal xl:text-[16px] leading-[28px] text-secondarytext">
            Agency
          </span>
          <span className=" py-[7px] px-5 bg-[#F4F4FF] rounded-[5px] font-dm font-normal xl:text-[16px] leading-[28px] text-secondarytext">
            Agency
          </span>
          <span className=" py-[7px] px-5 bg-[#F4F4FF] rounded-[5px] font-dm font-normal xl:text-[16px] leading-[28px] text-secondarytext">
            Agency
          </span>
          <span className=" py-[7px] px-5 bg-[#F4F4FF] rounded-[5px] font-dm font-normal xl:text-[16px] leading-[28px] text-secondarytext">
            Agency
          </span>
          <span className=" py-[7px] px-5 bg-[#F4F4FF] rounded-[5px] font-dm font-normal xl:text-[16px] leading-[28px] text-secondarytext">
            Agency
          </span>
          <span className=" py-[7px] px-5 bg-[#F4F4FF] rounded-[5px] font-dm font-normal xl:text-[16px] leading-[28px] text-secondarytext">
            Agency
          </span>
        </Flex>
      </div>

      <div className=" w-full rounded-[20px] bg-black/60 py-6 px-[30px] mt-[50px]">
        <div>
          <h2 className=" font-nunito font-bold xl:text-[25px] text-white">
            Need Help
          </h2>

          <div className=" w-full h-[1px] bg-[#F4F4FF]">
            <div className="w-[20%] bg-gray-300 h-full"></div>
          </div>
        </div>

        <div className="mt-7">
          <h1 className=" font-nunito font-bold xl:text-[25px] text-white">
            Help to Create Great Business Agency Future
          </h1>

          <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-white mt-[19px] xl:w-[346px]">
            Sit amet consectetur adipiscing elseds do eius mod tempor incididunt
          </p>

          <button className=" mt-[30px] font-dm font-normal xl:text-[18px] leading-[30px] text-white py-[15px] px-[33px] rounded-full bg-lenearOne flex items-center justify-center">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogsSide;
