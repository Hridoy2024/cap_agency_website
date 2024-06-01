import React from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";
import { TbTargetArrow } from "react-icons/tb";

const Hire = () => {
  return (
    <section className="mt-[120px] bg-hirebg py-[80px] bg-cover bg-no-repeat">
      <Container>
        <div className="py-[80px] rounded-[50px] bg-primary px-[80px]">
          <Flex className="items-center">
            <div className="w-9/12">
              <Flex className="items-center gap-[10px]">
                <TbTargetArrow className="text-[22px] text-orange" />
                <p className=" font-dm font-medium xl:text-[20px] text-white">
                  We Are Hire
                </p>
              </Flex>

              <h1 className=" font-nunito font-bold xl:text-[46px] text-white mt-4 mb-7 xl:w-[693px]">
                Tell us About Your Business, We are Ready to Solve.
              </h1>
            </div>
            <div className="w-2/12">
              <button className="  ml-auto font-dm font-normal xl:text-[18px] leading-[30px] text-white py-[15px] px-[33px] rounded-full bg-lenearOne flex items-center justify-center">
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
