import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Flex from "../../common/Flex";
import Productcard from "./Productcard";

// Example items, to simulate fetching from another resources.

const Pagination = ({ itemsPerPage }) => {
  const items = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,

    4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  ];
  function Items({ currentItems }) {
    return (
      <>
        <Flex className=" flex-wrap justify-between gap-6">
          <Productcard className=" w-full sm:w-[48%] md:w-[30%] lg:w-[30%] 2xl:w-[31.8%]" />

          <Productcard className=" w-full sm:w-[48%] md:w-[30%] lg:w-[30%] 2xl:w-[31.8%]" />
          <Productcard className=" w-full sm:w-[48%] md:w-[30%] lg:w-[30%] 2xl:w-[31.8%]" />
          <Productcard className=" w-full sm:w-[48%] md:w-[30%] lg:w-[30%] 2xl:w-[31.8%]" />
          <Productcard className=" w-full sm:w-[48%] md:w-[30%] lg:w-[30%] 2xl:w-[31.8%]" />
          <Productcard className=" w-full sm:w-[48%] md:w-[30%] lg:w-[30%] 2xl:w-[31.8%]" />
          <Productcard className=" w-full sm:w-[48%] md:w-[30%] lg:w-[30%] 2xl:w-[31.8%]" />
          <Productcard className=" w-full sm:w-[48%] md:w-[30%] lg:w-[30%] 2xl:w-[31.8%]" />
        </Flex>
      </>
    );
  }

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      <Items currentItems={currentItems} />

      <Flex className=" my-16 items-end justify-end w-full">
        <ReactPaginate
          //   previousClassName="p-5 h-[15px] w-[15px] border-[1px] flex items-center justify-center text-white rounded-full"
          nextClassName=" p-5 h-[50px] w-[50px] border-[1px] flex items-center justify-center bg-primary text-white rounded-full"
          nextLabel=" >"
          breakLabel="..."
          className=" flex ml-auto gap-6 text-block "
          activeClassName="bg-custom text-black bg-[#f4f4f4]"
          pageClassName=" p-5 h-[50px] w-[50px] border-[1px] border-secondarytext flex items-center justify-center text-white rounded-full font-os font-normal text-[24px] text-black"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel=" "
          renderOnZeroPageCount={null}
        />

        {/* <p className=" font-dm font-normal text-[14px] text-secondary leading-[30px]">
    Products from {itemOffset} to {endOffset} of {items.length}
  </p> */}
      </Flex>
    </>
  );
};

export default Pagination;
