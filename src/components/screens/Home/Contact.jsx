import React from "react";
import Container from "../../common/Container";
import Flex from "../../common/Flex";
import Image from "../../common/Image";
import { TbTargetArrow } from "react-icons/tb";

const Contact = () => {
  return (
    <section className="mt-[200px] 2xl:mt-[211px]">
      <Container>
        <div className=" bg-conactbg bg-cover bg-no-repeat w-full px-3 2xl:px-[80px] pt-[46px] md:pt-[150px] 2xl:pt-[186px] pb-[80px]">
          <Flex className="relative flex-col justify-between gap-10 md:flex-row">
            <div className=" border-[16px] hidden lg:flex items-center justify-between border-white xl:py-[51px] xl:px-[60px] rounded-full bg-lenearOne h-[182px] w-[80%]  absolute top-[-250px] 2xl:top-[-280px] left-[50%] translate-x-[-50%]">
              <Flex className="items-center justify-between w-full">
                <div className="w-1/3">
                  <Flex className="items-center gap-7">
                    <Image src="/icon1.png" />
                    <div>
                      <h2 className=" font-nunito font-extrabold xl:text-[45px] leading-9 text-white">
                        1500
                      </h2>
                      <h4 className=" font-dm font-normal xl:text-[18px] leading-9 text-white">
                        Project Complate
                      </h4>
                    </div>
                  </Flex>
                </div>
                <div className="w-1/3">
                  <Flex className="items-center gap-7">
                    <Image src="/icon2.png" />
                    <div>
                      <h2 className=" font-nunito font-extrabold xl:text-[45px] leading-9 text-white">
                        8562
                      </h2>
                      <h4 className=" font-dm font-normal xl:text-[18px] leading-9 text-white">
                        Satisfied Clients
                      </h4>
                    </div>
                  </Flex>
                </div>
                <div className="w-1/3">
                  <Flex className="items-center gap-7">
                    <Image src="/icon3.png" />
                    <div>
                      <h2 className=" font-nunito font-extrabold xl:text-[45px] leading-9 text-white">
                        35
                      </h2>
                      <h4 className=" font-dm font-normal xl:text-[18px] leading-9 text-white">
                        Awards Win
                      </h4>
                    </div>
                  </Flex>
                </div>
              </Flex>
            </div>

            <div className=" w-full md:w-1/2">
              <Image src="contactplay.png" alt="con" />
            </div>
            <div className=" w-full md:w-1/2">
              <div>
                <Flex className="items-center gap-[10px]">
                  <TbTargetArrow className="text-[22px] text-orange" />{" "}
                  <p className=" font-dm font-medium xl:text-[20px] text-white">
                    Make an Appointment
                  </p>
                </Flex>

                <h1 className=" font-nunito font-bold xl:text-[46px] text-white mt-4 mb-7">
                  Start New Project With Us
                </h1>

                <form action="">
                  <Flex className="items-center gap-5 mb-5 flex-col md:flex-row ">
                    <input
                      className="py-[15px] px-[26px] rounded-full w-full md:w-[50%] outline-none font-dm font-normal xl:text-[16px] text-[#9a9a9a]"
                      type="text"
                      name=""
                      id=""
                      placeholder="Your Name"
                    />
                    <input
                      className="py-[15px] px-[26px] rounded-full w-full md:w-[50%] outline-none font-dm font-normal xl:text-[16px] text-[#9a9a9a]"
                      type="text"
                      name=""
                      id=""
                      placeholder="Email Address"
                    />
                  </Flex>

                  <input
                    className="mb-5 py-[15px] px-[26px] rounded-full w-full outline-none font-dm font-normal xl:text-[16px] text-[#9a9a9a]"
                    type="text"
                    name=""
                    id=""
                    placeholder="Your Name"
                  />
                  <textarea
                    className="mb-[40px] py-[15px] px-[26px] h-[171px] rounded-[40px] w-full outline-none font-dm font-normal xl:text-[16px] text-[#9a9a9a]"
                    type="text"
                    name=""
                    id=""
                    placeholder="Your Name"
                  ></textarea>

                  <button className=" font-dm font-normal xl:text-[18px] leading-[30px] text-white py-[15px] px-[33px] rounded-full bg-lenearOne flex items-center justify-center">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
