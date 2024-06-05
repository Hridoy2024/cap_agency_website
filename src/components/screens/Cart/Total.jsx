import React from "react";
import Flex from "../../common/Flex";
import { FaAngleDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Total = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-full py-[25px] px-[30px] rounded-[20px] border-[1px] border-[#F4F4FF] mt-6">
      <Flex className="items-center justify-between ">
        <p className=" font-nunito font-semibold xl:text-[16px] leading-[24px] text-maintext">
          Subtotal
        </p>
        <p className=" font-nunito font-semibold xl:text-[16px] leading-[24px] text-primary">
          $670.00
        </p>
      </Flex>

      <div className="w-full h-[1px] bg-[#F4F4FF] my-[20px]"></div>

      <div>
        <p className=" font-nunito font-semibold xl:text-[16px] leading-[24px] text-maintext">
          Shipping
        </p>
        <Flex className="items-center justify-between mt-[17px]">
          <Flex className="items-center gap-[9px]">
            <div className="w-[14px] h-[14px] rounded-full border-[1px] border-primary p-[3px]">
              <div className="h-full w-full rounded-full bg-primary"></div>
            </div>

            <p className=" font-nunito font-semibold xl:text-[16px] leading-[24px] text-secondarytext">
              Free Shipping
            </p>
          </Flex>

          <p className=" font-nunito font-semibold xl:text-[16px] leading-[24px] text-secondarytext">
            +$00.00
          </p>
        </Flex>

        <Flex className="items-center justify-between mt-[6px]">
          <Flex className="items-center gap-[9px]">
            <div className="w-[14px] h-[14px] rounded-full border-[1px] border-primary p-[3px]">
              <div className="h-full w-full rounded-full bg-primary"></div>
            </div>

            <p className=" font-nunito font-semibold xl:text-[16px] leading-[24px] text-secondarytext">
              Flate Rate
            </p>
          </Flex>

          <p className=" font-nunito font-semibold xl:text-[16px] leading-[24px] text-secondarytext">
            +$00.00
          </p>
        </Flex>
        <Flex className="items-center justify-between mt-[6px]">
          <Flex className="items-center gap-[9px]">
            <div className="w-[14px] h-[14px] rounded-full border-[1px] border-primary p-[3px]">
              <div className="h-full w-full rounded-full bg-primary"></div>
            </div>

            <p className=" font-nunito font-semibold xl:text-[16px] leading-[24px] text-secondarytext">
              Local Delivery
            </p>
          </Flex>

          <p className=" font-nunito font-semibold xl:text-[16px] leading-[24px] text-secondarytext">
            +$00.00
          </p>
        </Flex>
      </div>
      <div className="mt-[25px]">
        <p className=" font-nunito font-semibold xl:text-[16px] leading-[24px] text-maintext">
          Calculate Shipping
        </p>

        <div className=" relative mt-5">
          <input
            className=" w-full py-3 px-5 rounded-full border-[1px] border-[#F4F4FF] font-dm font-normal placeholder:text-maintext xl:text-[13px] leading-[24px] text-maintext"
            type="text"
            name=""
            placeholder="Select Country"
            id=""
          />

          <FaAngleDown className=" text-maintext absolute top-[50%] translate-y-[-50%] right-3" />
        </div>

        <div className=" relative mt-5">
          <input
            className=" w-full py-3 px-5 rounded-full border-[1px] border-[#F4F4FF] font-dm font-normal placeholder:text-[#A4A4A4] xl:text-[13px] leading-[24px] text-maintext"
            type="text"
            name=""
            placeholder="Postcode / ZIP"
            id=""
          />
        </div>

        <button className="mt-5 py-[15px] w-full bg-[#F4F4FF] rounded-full font-dm font-normal xl:text-[18px] leading-[16px] text-maintext">
          Update Cart
        </button>

        <Flex className="items-center justify-between mt-5">
          <p className=" font-nunito font-semibold xl:text-[16px] leading-[24px] text-maintext">
            Total
          </p>
          <p className=" font-nunito font-semibold xl:text-[16px] leading-[24px] text-primary">
            $670.00
          </p>
        </Flex>

        <button
          onClick={() => navigate("/checkout")}
          className="mt-5 py-[15px] w-full bg-lenearOne rounded-full font-dm font-normal xl:text-[18px] leading-[30px] text-white"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Total;
