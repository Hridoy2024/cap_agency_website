import React from "react";

const Price = () => {
  return (
    <div className=" w-full rounded-[20px] border-[1px] border-orange py-6 px-[30px] mt-[60px]">
      <div>
        <h2 className=" font-nunito font-bold xl:text-[25px] text-maintext">
          Search
        </h2>

        <div className=" w-full h-[1px] bg-[#F4F4FF]">
          <div className="w-[20%] bg-lenearOne h-full"></div>
        </div>
      </div>

      <div className="my-6 rounded-[15px] bg-[#E5EBEF] h-[6px]">
        <div className="w-[50%] mx-auto bg-primary h-full relative">
          <div className="h-4 w-4 rounded-full bg-white absolute top-[50%] translate-y-[-50%] left-[-10%] shadow-xl shadow-black"></div>
          <div className="h-4 w-4 rounded-full bg-white absolute top-[50%] translate-y-[-50%] right-[-10%] shadow-xl shadow-black"></div>
        </div>
      </div>

      <p>
        <span className=" font-dm font-normal xl:text-[16px] leading-[24px] text-secondarytext">
          Price:{" "}
        </span>

        <span className="font-dm font-medium xl:text-[16px] leading-[24px] text-maintext">
          $100.00 - $1200.00
        </span>
      </p>
    </div>
  );
};

export default Price;
