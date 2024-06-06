import React from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";
import { TbTargetArrow } from "react-icons/tb";

const Support = () => {
  return (
    <section className=" bg-supportbannerbg py-[102px]">
      <Container>
        <Flex className="items-center justify-center gap-[10px]">
          <TbTargetArrow className="text-[22px] text-orange" />{" "}
          <p className=" font-dm font-medium xl:text-[20px] text-white">
            Let’s Support
          </p>
        </Flex>

        <h1 className=" font-nunito font-bold xl:text-[46px] text-white xl:w-[628px] mx-auto text-center mt-4 mb-7">
          You need our support to have any projects?
        </h1>

        <p className="font-dm font-medium xl:text-[20px] text-white xl:w-[832px] text-center mx-auto">
          Enthusiastically architect corporate metrics via enterprise
          methodologies. Progressively extend distinctive process improvements
          rather than parallel channels.
        </p>

        <Flex className="items-center justify-center gap-[30px] mt-[49px]">
          <button className=" font-dm font-normal text-[12px] md:text-[15px] 2xl:text-[18px] leading-[30px] text-white py-3 px-4 2xl:py-[15px] 2xl:px-[33px] rounded-full border-[1px] border-orange bg-transparent  hover:bg-lenearOne flex items-center justify-center">
            Set Free Quotes
          </button>
          <button className=" font-dm font-normal text-[12px] md:text-[15px] 2xl:text-[18px] leading-[30px] text-white py-3 px-4 2xl:py-[15px] 2xl:px-[33px] rounded-full border-[1px] border-orange bg-transparent  hover:bg-lenearOne flex items-center justify-center">
            Contact For Us
          </button>
        </Flex>
      </Container>
    </section>
  );
};

export default Support;
