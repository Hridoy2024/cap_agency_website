import React from "react";
import PageBanner from "../components/common/PageBanner";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";
import Order from "../components/screens/Checkout/Order";

const Checkoutpage = () => {
  return (
    <main>
      <PageBanner title="Checkout" />
      <Container>
        <div className="mt-[120px] border-t-[2px] border-primary py-[22px] px-[30px] bg-[#F4F4FF]">
          <Flex className="gap-[15px]">
            <div className=" h-[22px] w-[22px] border-[2px] border-gray-400 rounded-[2px]"></div>

            <div>
              <span className=" font-dm font-normal xl:text-[16px] leading-[26px] text-gray-400">
                Have a coupon?
              </span>
              <span className=" font-dm font-normal xl:text-[16px] leading-[26px] text-primary">
                Click here to enter your code
              </span>
            </div>
          </Flex>
        </div>

        <Flex className="mt-[50px] flex-col md:flex-row 2xl:mt-[120px] justify-between">
          <div className="w-full md:w-6/12">
            <div className="p-5 2xl:p-[60px] rounded-[20px] bg-[#F4F4FF]">
              <h1 className=" font-nunito font-bold xl:text-[26px] leading-[24px] text-maintext">
                Billing Details
              </h1>

              <div className="mt-10">
                <Flex className="flex-col md:flex-row gap-5 mb-5">
                  <input
                    className=" w-full md:w-[50%] py-[17px] px-[25px] bg-white rounded-full font-dm font-normal placeholder:text-[#A4A4A4] xl:text-[13px] leading-[24px] text-maintext"
                    type="text"
                    placeholder="First Name*"
                    name=""
                    id=""
                  />
                  <input
                    className=" w-full md:w-[50%] py-[17px] px-[25px] bg-white rounded-full font-dm font-normal placeholder:text-[#A4A4A4] xl:text-[13px] leading-[24px] text-maintext"
                    type="text"
                    placeholder="Last Name*"
                    name=""
                    id=""
                  />
                </Flex>
                <Flex className="flex-col md:flex-row gap-5 mb-5">
                  <input
                    className=" w-full md:w-[50%] py-[17px] px-[25px] bg-white rounded-full font-dm font-normal placeholder:text-[#A4A4A4] xl:text-[13px] leading-[24px] text-maintext"
                    type="text"
                    placeholder="First Name*"
                    name=""
                    id=""
                  />
                  <input
                    className=" w-full md:w-[50%] py-[17px] px-[25px] bg-white rounded-full font-dm font-normal placeholder:text-[#A4A4A4] xl:text-[13px] leading-[24px] text-maintext"
                    type="text"
                    placeholder="Last Name*"
                    name=""
                    id=""
                  />
                </Flex>

                <Flex className="gap-5 mb-5">
                  <input
                    className=" w-full py-[17px] px-[25px] bg-white rounded-full font-dm font-normal placeholder:text-[#A4A4A4] xl:text-[13px] leading-[24px] text-maintext"
                    type="text"
                    placeholder="Country*"
                    name=""
                    id=""
                  />
                </Flex>
                <Flex className="gap-5 mb-5">
                  <input
                    className=" w-full py-[17px] px-[25px] bg-white rounded-full font-dm font-normal placeholder:text-[#A4A4A4] xl:text-[13px] leading-[24px] text-maintext"
                    type="text"
                    placeholder="Address*"
                    name=""
                    id=""
                  />
                </Flex>

                <Flex className="flex-col md:flex-row gap-5 mb-5">
                  <input
                    className="w-full md:w-[50%] py-[17px] px-[25px] bg-white rounded-full font-dm font-normal placeholder:text-[#A4A4A4] xl:text-[13px] leading-[24px] text-maintext"
                    type="text"
                    placeholder="Town / City*"
                    name=""
                    id=""
                  />
                  <input
                    className="w-full md:w-[50%] py-[17px] px-[25px] bg-white rounded-full font-dm font-normal placeholder:text-[#A4A4A4] xl:text-[13px] leading-[24px] text-maintext"
                    type="text"
                    placeholder="Postcode / ZIP*"
                    name=""
                    id=""
                  />
                </Flex>
              </div>

              <Flex className=" gap-[9px] items-center mt-[49px]">
                <input type="checkbox" name="" id="" />
                <p className=" font-dm font-normal xl:text-[16px] leading-[18px] text-secondarytext">
                  Create an account?
                </p>
              </Flex>

              <div className="mt-[33px]">
                <h3 className=" font-nunito font-bold xl:text-[20px] leading-[24px] text-maintext">
                  Shipping Address
                </h3>

                <Flex className=" gap-[9px] items-center mt-[18px]">
                  <input type="checkbox" name="" id="" />
                  <p className=" font-dm font-normal xl:text-[16px] leading-[18px] text-secondarytext">
                    Create an account?
                  </p>
                </Flex>
              </div>
            </div>
          </div>
          <div className="w-full md:w-5/12">
            <Order />
          </div>
        </Flex>
      </Container>
    </main>
  );
};

export default Checkoutpage;
