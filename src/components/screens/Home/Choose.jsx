import React from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";
import { TbTargetArrow } from "react-icons/tb";
import Image from "../../common/Image";

const Choose = () => {
  return (
    <section className="mt-[120px] bg-chooseBg py-[120px]">
      <Container>
        <Flex className="items-center justify-between">
          <div className="w-1/2">
            <div>
              <Flex className="items-center gap-[10px]">
                <TbTargetArrow className="text-[22px] text-orange" />{" "}
                <p className=" font-dm font-medium xl:text-[20px] text-primary">
                  Why Choose Ortencey
                </p>
              </Flex>

              <h1 className=" xl:w-[558px] font-nunito font-bold xl:text-[46px] text-maintext mt-4 mb-7">
                Reason For Choosing Our Digital Agency
              </h1>

              <p className=" font-dm font-normal xl:text-[16px] text-secondarytext  xl:w-[584px]">
                There are many variations of passages of Lorem Ipsum available,
                but the majori suffered alteration in some form, by injected
                humour, or randomised word whic look even sligh believable. If
                you are going to use.
              </p>
            </div>

            <div className=" xl:w-[586px] mt-6">
              <div className="mb-[22px]">
                <Flex className="items-center justify-between">
                  <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext">
                    Software Development
                  </p>
                  <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext">
                    85%
                  </p>
                </Flex>

                <div className=" w-full h-[10px] rounded-full bg-primary/15 p-[3px] mt-[9px]">
                  <div className="w-[85%] h-full bg-primary rounded-full relative">
                    <Image
                      src="point.png"
                      className=" absolute top-[-18px] right-[-8px]"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-[22px]">
                <Flex className="items-center justify-between">
                  <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext">
                    Web Development
                  </p>
                  <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext">
                    95%
                  </p>
                </Flex>

                <div className=" w-full h-[10px] rounded-full bg-primary/15 p-[3px] mt-[9px]">
                  <div className="w-[95%] h-full bg-primary rounded-full relative">
                    <Image
                      src="point.png"
                      className=" absolute top-[-18px] right-[-8px]"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-[22px]">
                <Flex className="items-center justify-between">
                  <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext">
                    UL / UX Design
                  </p>
                  <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext">
                    80%
                  </p>
                </Flex>

                <div className=" w-full h-[10px] rounded-full bg-primary/15 p-[3px] mt-[9px]">
                  <div className="w-[80%] h-full bg-primary rounded-full relative">
                    <Image
                      src="point.png"
                      className=" absolute top-[-18px] right-[-8px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className=" h-[460px] w-full rounded-[50px] bg-gray-300 relative">
              <div className=" absolute bottom-[30px] left-[50%] translate-x-[-50%] bg-white py-[15px] px-[50px] rounded-full xl:w-[364px]">
                <Flex className="items-end gap-[10px]">
                  <p className=" font-nunito font-bold xl:text-[46px] leading-[56px] text-orange">
                    25
                  </p>
                  <p className=" font-nunito font-bold xl:text-[25px] text-maintext">
                    Years Experience
                  </p>
                </Flex>
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Choose;
