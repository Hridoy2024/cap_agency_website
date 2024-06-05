import React, { useState } from "react";
import Flex from "../../common/Flex";
import Blogcard from "../Home/Blogcard";
import ReactPaginate from "react-paginate";

const BlogsPagination = ({ itemsPerPage }) => {
  const items = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,

    4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  ];
  function Items({ currentItems }) {
    return (
      <>
        <Flex className="justify-between gap-6 flex-wrap">
          <Blogcard className="w-[48.7%]" />
          <Blogcard className="w-[48.7%]" />
          <Blogcard className="w-[48.7%]" />
          <Blogcard className="w-[48.7%]" />
          <Blogcard className="w-[48.7%]" />
          <Blogcard className="w-[48.7%]" />
          <Blogcard className="w-[48.7%]" />
          <Blogcard className="w-[48.7%]" />
          <Blogcard className="w-[48.7%]" />
          <Blogcard className="w-[48.7%]" />
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

      <Flex className=" my-16 items-start justify-start w-full">
        <ReactPaginate
          //   previousClassName="p-5 h-[15px] w-[15px] border-[1px] flex items-center justify-center text-white rounded-full"
          nextClassName=" p-5 h-[50px] w-[50px] border-[1px] flex items-center justify-center bg-lenearOne text-white rounded-full"
          nextLabel=" >"
          breakLabel="..."
          className=" flex gap-6 text-block "
          activeClassName="bg-custom text-black bg-[#f4f4f4]"
          pageClassName=" p-5 h-[50px] w-[50px] border-[1px]  font-dm font-normal xl:text-[16px] leading-[26px] text-block border-secondarytext flex items-center justify-center rounded-full text-maintext"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel=" "
          renderOnZeroPageCount={null}
        />
      </Flex>
    </>
  );
};

export default BlogsPagination;
