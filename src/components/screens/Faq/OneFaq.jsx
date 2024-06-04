import React, { useState } from "react";
import Flex from "../../common/Flex";
import { TiMinus, TiPlus } from "react-icons/ti";

const OneFaq = () => {
  const [faq, setFaq] = useState(false);
  return (
    <div className=" py-[23px] px-10 rounded-[50px] shadow-lg mb-[30px]">
      <Flex className="items-center justify-between">
        <p className=" font-nunito font-bold xl:text-[25px] text-maintext">
          Is it Full Digital Marketing Agency?
        </p>
        {faq ? (
          <TiMinus
            onClick={() => setFaq(!faq)}
            className=" text-primary text-[30px] cursor-pointer"
          />
        ) : (
          <TiPlus
            onClick={() => setFaq(!faq)}
            className=" text-primary text-[30px] cursor-pointer"
          />
        )}
        {/* <TiPlus className=" text-primary text-[30px] cursor-pointer" /> */}
      </Flex>

      {faq && (
        <div className=" w-full">
          <div className=" w-full h-[1px] bg-[#D7DFFE] my-5"></div>
          <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext">
            It is a long established fact that a reader will be distracted by
            the readable content of page when looking at its layout. The point
            of using Lorem Ipsuim is that it has as more less or randomised
            words which don't look even slightly believable. If you are going to
            use a passage of Lorem Ipsum, you need to be sure.
          </p>
        </div>
      )}
    </div>
  );
};

export default OneFaq;
