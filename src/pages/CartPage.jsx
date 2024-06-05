import React from "react";
import PageBanner from "../components/common/PageBanner";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";
import CartItem from "../components/screens/Cart/CartItem";
import Total from "../components/screens/Cart/Total";

const CartPage = () => {
  return (
    <main>
      <PageBanner title="Your Cart" />
      <Container>
        <Flex className="justify-between mt-[120px] gap-6">
          <div className="w-9/12">
            <Flex className=" py-[26px] pl-[41px] gap-[15px] pr-[23px] bg-[#F4F4FF]">
              <div className="w-5/12">
                <h2 className=" font-nunito font-medium xl:text-[22px] leading-[18px] text-maintext">
                  Products
                </h2>
              </div>
              <div className="w-7/12">
                <Flex className="items-center justify-between">
                  <div className="w-1/4">
                    <h2 className=" font-nunito font-medium xl:text-[22px] leading-[18px] text-maintext">
                      Price
                    </h2>
                  </div>
                  <div className="w-1/4">
                    <h2 className=" font-nunito font-medium xl:text-[22px] leading-[18px] text-maintext">
                      Quantity
                    </h2>
                  </div>
                  <div className="w-1/4">
                    <h2 className=" text-center font-nunito font-medium xl:text-[22px] leading-[18px] text-maintext">
                      Total
                    </h2>
                  </div>
                  <div className="w-1/4">
                    <h2 className=" text-right font-nunito font-medium xl:text-[22px] leading-[18px] text-maintext">
                      Action
                    </h2>
                  </div>
                </Flex>
              </div>
            </Flex>

            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />

            <div className="w-[445px] h-[60px] relative mt-[50px]">
              <input
                className=" w-full py-5 px-6 rounded-full font-dm font-normal placeholder:text-[#CECECE] xl:text-[13px] leading-[24px] text-maintext border-[1px] border-[#F4F4FF]"
                type="text"
                placeholder="Discount Code"
                name=""
                id=""
              />

              <button className=" absolute right-0 top-0 py-[15px] w-[117px] bg-lenearOne rounded-full font-dm font-normal xl:text-[18px] leading-[30px] text-white">
                Apply
              </button>
            </div>
          </div>
          <div className="w-3/12">
            <Flex className="gap-[10px]">
              <button className=" font-nunito font-semibold xl:text-[16px] leading-[16px] text-maintext py-5 px-[26px] rounded-full bg-[#F4F4FF]">
                Continue Shopping
              </button>
              <button className=" font-nunito font-semibold xl:text-[16px] leading-[16px] text-maintext py-5 px-[26px] rounded-full bg-[#F4F4FF]">
                Update Cart
              </button>
            </Flex>

            <Total />
          </div>
        </Flex>
      </Container>
    </main>
  );
};

export default CartPage;
