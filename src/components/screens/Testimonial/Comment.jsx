import React from "react";
import Flex from "../../common/Flex";
import Image from "../../common/Image";
import Starrating from "../../common/Starrating";

const Comment = ({ className }) => {
  return (
    <div
      className={`${className} bg-lenearTwo rounded-[20px] py-[35px] 2xl:pr-[49px] mb-4`}
    >
      <Flex className="items-center justify-between">
        <Image src="/commaorenge.png" />
        <Starrating />
      </Flex>

      <p className=" my-[30px] font-dm font-normal xl:text-[20px] leading-[30px] text-maintext xl:w-[656px]">
        There are many variations of passages of Lorem as Ipsum the vaila the
        majority have suffered alteration in some form by injectes our, or rando
        word which don't look even slightly a believable. If you are going to
        use a passage of Lorem Ipsum.
      </p>

      <Flex className="items-center gap-5">
        <div className="h-[62px] w-[62px] bg-gray-400 rounded-full"></div>
        <div>
          <h1 className=" font-nunito font-bold xl:text-[25px] text-maintext">
            Kristin Waon
          </h1>
          <h2 className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext">
            Web Designer
          </h2>
        </div>
      </Flex>
    </div>
  );
};

export default Comment;
