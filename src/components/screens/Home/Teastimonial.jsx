import React from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";
import Image from "../../common/Image";
import { TbTargetArrow } from "react-icons/tb";
import { FaStar } from "react-icons/fa";

const Teastimonial = () => {
  return (
    <section className="mt-[120px]">
      <Container>
        <Flex className="items-center justify-between py-[120px] relative">
          <Image
            src="line.png"
            className=" absolute top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%]"
          />
          <div className="w-1/2">
            <Image src="testimonial.png" alt="testimonial" />
          </div>
          <div className="w-1/2">
            <div className="xl:w-[563px] ml-auto">
              <Flex className="items-center gap-[10px]">
                <TbTargetArrow className="text-[22px] text-orange" />{" "}
                <p className=" font-dm font-medium xl:text-[20px] text-primary">
                  Testimonial
                </p>
              </Flex>

              <h1 className=" font-nunito font-bold xl:text-[46px] text-maintext mt-4 mb-7">
                What Our Client Say
              </h1>

              <div>
                <Flex className="items-center justify-between">
                  <Image src="comma.png" />

                  <Flex className="items-center justify-center gap-2 py-[15px] px-5 bg-[#F4F4FF] rounded-full">
                    <FaStar className="text-yellow-400 text-[20px]" />
                    <FaStar className="text-yellow-400 text-[20px]" />
                    <FaStar className="text-yellow-400 text-[20px]" />
                    <FaStar className="text-yellow-400 text-[20px]" />
                    <FaStar className="text-yellow-400 text-[20px]" />
                  </Flex>
                </Flex>

                <p className=" font-dm font-normal xl:text-[20px] leading-[30px] text-maintext xl:w-[563px] mt-[30px]">
                  There are many variations of passages of Lorem Ipsum availa
                  the majority have suffered alteration in some form by injecte
                  our, or rando word which don't look even slightly a
                  believable. If you are going to use a passage of Lorem Ipsum,
                  you need sure there isn't anything embarrassing.
                </p>

                <div className="mt-[30px]">
                  <h2 className=" font-nunito font-bold xl:text-[25px] text-maintext">
                    Kristin Waon
                  </h2>
                  <h3 className=" font-dm font-normal xl:text-[16px] text-secondarytext">
                    Web Designer
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Teastimonial;
