import React from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";
import { TbTargetArrow } from "react-icons/tb";

const Hire = () => {
  return (
    <section className="mt-[50px] 2xl:mt-[120px] bg-hirebg py-[80px] bg-cover bg-no-repeat">
      <Container>
        <div className=" px-10 2xl:px-[80px] py-10 2xl:py-[80px]  rounded-[50px] bg-primary ">
          <Flex className="items-center flex-col md:flex-row">
            <div className="w-full md:w-9/12">
              <Flex className="items-center justify-center md:justify-start gap-[10px]">
                <TbTargetArrow className="text-[22px] text-orange" />
                <p className=" font-dm font-medium  xl:text-[20px] text-white">
                  We Are Hire
                </p>
              </Flex>

              <h1 className=" font-nunito font-bold text-center md:text-left xl:text-[46px] text-white mt-4 mb-7 xl:w-[693px]">
                Tell us About Your Business, We are Ready to Solve.
              </h1>
            </div>
            <div className="w-full md:w-2/12">
              <button className=" mx-auto  2xl:ml-auto font-dm font-normal xl:text-[18px] leading-[30px] text-white py-[15px] px-[33px] rounded-full bg-lenearOne flex items-center justify-center">
                Contact Us
              </button>
            </div>
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Hire;
