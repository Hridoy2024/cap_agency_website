import React from "react";
import Flex from "../../common/Flex";

const Order = () => {
  return (
    <div>
      <h1 className=" font-nunito font-bold xl:text-[26px] leading-[26px] text-maintext">
        Order Summary
      </h1>

      <div className="mt-[35px] rounded-[5px] py-[30px] px-10 border-[1px] border-[#E0E0E0]">
        <Flex className="justify-between items-center">
          <h2 className=" font-nunito font-semibold xl:text-[20px] leading-[24px] text-maintext">
            Product
          </h2>
          <h2 className=" font-nunito font-semibold xl:text-[20px] leading-[24px] text-maintext">
            Total
          </h2>
        </Flex>
        <div className=" w-full h-[1px] bg-[#F4F4FF] my-5"></div>

        <Flex className="items-center justify-between mb-2">
          <p className=" font-nunito font-semibold xl:text-[16px] leading-[24px] text-secondarytext">
            Orca is an armchair
          </p>

          <p className=" font-nunito font-semibold xl:text-[16px] leading-[24px] text-secondarytext">
            +$00.00
          </p>
        </Flex>
        <Flex className="items-center justify-between mb-2">
          <p className=" font-nunito font-semibold xl:text-[16px] leading-[24px] text-secondarytext">
            Orca is an armchair
          </p>

          <p className=" font-nunito font-semibold xl:text-[16px] leading-[24px] text-secondarytext">
            +$00.00
          </p>
        </Flex>
        <Flex className="items-center justify-between mb-2">
          <p className=" font-nunito font-semibold xl:text-[16px] leading-[24px] text-secondarytext">
            Orca is an armchair
          </p>

          <p className=" font-nunito font-semibold xl:text-[16px] leading-[24px] text-secondarytext">
            +$00.00
          </p>
        </Flex>
        <Flex className="items-center justify-between mb-2">
          <p className=" font-nunito font-semibold xl:text-[16px] leading-[24px] text-secondarytext">
            Orca is an armchair
          </p>

          <p className=" font-nunito font-semibold xl:text-[16px] leading-[24px] text-secondarytext">
            +$00.00
          </p>
        </Flex>

        <div className=" w-full h-[1px] bg-[#F4F4FF] my-5"></div>

        <Flex className="justify-between items-center">
          <h2 className=" font-nunito font-semibold xl:text-[20px] leading-[24px] text-maintext">
            Subtotal
          </h2>
          <h2 className=" font-nunito font-semibold xl:text-[20px] leading-[24px] text-maintext">
            $670.00
          </h2>
        </Flex>

        <Flex className="items-center justify-between mb-2 mt-[17px]">
          <p className=" font-nunito font-semibold xl:text-[16px] leading-[24px] text-secondarytext">
            Orca is an armchair
          </p>

          <p className=" font-nunito font-semibold xl:text-[16px] leading-[24px] text-secondarytext">
            +$00.00
          </p>
        </Flex>
        <Flex className="items-center justify-between mb-2">
          <p className=" font-nunito font-semibold xl:text-[16px] leading-[24px] text-secondarytext">
            Orca is an armchair
          </p>

          <p className=" font-nunito font-semibold xl:text-[16px] leading-[24px] text-secondarytext">
            +$00.00
          </p>
        </Flex>
        <Flex className="items-center justify-between mb-2">
          <p className=" font-nunito font-semibold xl:text-[16px] leading-[24px] text-secondarytext">
            Orca is an armchair
          </p>

          <p className=" font-nunito font-semibold xl:text-[16px] leading-[24px] text-secondarytext">
            +$00.00
          </p>
        </Flex>
        <Flex className="items-center justify-between mb-2">
          <p className=" font-nunito font-semibold xl:text-[16px] leading-[24px] text-secondarytext">
            Orca is an armchair
          </p>

          <p className=" font-nunito font-semibold xl:text-[16px] leading-[24px] text-secondarytext">
            +$00.00
          </p>
        </Flex>

        <div className=" w-full h-[1px] bg-[#F4F4FF] my-5"></div>

        <Flex className="justify-between items-center">
          <h2 className=" font-nunito font-semibold xl:text-[20px] leading-[24px] text-maintext">
            Total
          </h2>
          <h2 className=" font-nunito font-semibold xl:text-[20px] leading-[24px] text-primary">
            $700.00
          </h2>
        </Flex>

        <div className="mt-[30px]">
          <Flex className="rounded-[20px] bg-[#F4F4FF] p-[25px] items-start justify-between">
            <div className="w-1/12">
              <div className="w-[14px] h-[14px] rounded-full border-[1px] border-primary p-[3px] mt-2">
                <div className="h-full w-full rounded-full bg-primary"></div>
              </div>
            </div>
            <div className="w-11/12">
              <div>
                <h1 className=" font-dm font-medium xl:text-[16px] leading-[26px] text-maintext">
                  Direct Bank Transfer
                </h1>
                <p className="font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference.
                </p>
              </div>
            </div>
          </Flex>

          <Flex className="px-[25px] my-2 items-center gap-[18px]">
            <div className="w-[14px] h-[14px] rounded-full border-[1px] border-primary p-[3px] ">
              <div className="h-full w-full rounded-full bg-primary"></div>
            </div>

            <p className=" font-dm font-normal xl:text-[13px]  text-secondarytext">
              Cash on Delivery
            </p>
          </Flex>

          <Flex className="px-[25px] my-2 items-center gap-[18px]">
            <div className="w-[14px] h-[14px] rounded-full border-[1px] border-primary p-[3px]">
              <div className="h-full w-full rounded-full bg-primary"></div>
            </div>

            <p className=" font-dm font-normal xl:text-[13px]  text-secondarytext">
              Cash on Delivery
            </p>
          </Flex>

          <button className="mt-5 py-[15px] w-full bg-lenearOne rounded-full font-dm font-normal xl:text-[18px] leading-[30px] text-white">
            Place Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
