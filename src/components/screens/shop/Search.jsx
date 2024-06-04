import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
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
  );
};

export default Search;
