import React from "react";
import Flex from "../../common/Flex";
import Pagination from "./Pagination";
import { FaAngleDown, FaBarsProgress } from "react-icons/fa6";

const ProductSection = ({ handleToggle }) => {
  return (
    <section>
      <Flex className="items-center justify-between flex-col md:flex-row">
        <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext">
          Showing 1–16 of 17 results
        </p>

        <div className=" w-full md:w-auto flex items-center justify-between gap-6 lg:gap-0">
          <button className=" py-[17px] px-[37px] rounded-[5px] bg-[#F4F4FF] flex items-center gap-4 font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext">
            Default Sorting <FaAngleDown />
          </button>

          <button>
            <FaBarsProgress
              onClick={handleToggle}
              className="text-2xl block lg:hidden"
            />
          </button>
        </div>
      </Flex>

      <div className="mt-[30px]">
        <Pagination itemsPerPage={12} />
      </div>
    </section>
  );
};

export default ProductSection;
