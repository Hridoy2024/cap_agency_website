import React from "react";
import PageBanner from "../components/common/PageBanner";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";
import { PiToolboxFill } from "react-icons/pi";
import { FaMailBulk } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaLocationDot,
  FaLocationPin,
  FaLocationPinLock,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Choose from "../components/screens/Home/Choose";
import Image from "../components/common/Image";
import UL from "../components/common/UL";
import LI from "../components/common/LI";
import { LuDot } from "react-icons/lu";
const TeamDetails = () => {
  return (
    <main>
      <PageBanner title="Team Details" />
      <Container>
        <Flex className="mt-[120px] items-center p-[30px] bg-[#F4F4FF] gap-[147px]">
          <div className="w-5/12">
            <div className="w-[555px] h-[555px] bg-gray-400 rounded-[20px]"></div>
          </div>
          <div className="w-7/12">
            <div>
              <h1 className=" font-nunito font-bold xl:text-[36px] leading-[56px] text-maintext">
                David Phillips
              </h1>
              <p className="mt-[7px] font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext">
                Senior Manager
              </p>
            </div>

            <div className="mt-[34px]">
              <Flex className=" items-start ">
                <Flex className="w-4/12 items-center gap-6 font-dm font-medium xl:text-[20px] leading-[50px]">
                  <PiToolboxFill className=" text-primary" />
                  <p className=" text-maintext">Experience:</p>
                </Flex>

                <div className="w-8/12">
                  <p className=" font-dm font-normal xl:text-[16px] leading-[50px] text-secondarytext">
                    15 Years
                  </p>
                </div>
              </Flex>

              <Flex className=" items-start ">
                <Flex className="w-4/12 items-center gap-6 font-dm font-medium xl:text-[20px] leading-[50px]">
                  <MdEmail className=" text-primary" />
                  <p className=" text-maintext">E-mail:</p>
                </Flex>

                <div className="w-8/12">
                  <p className=" font-dm font-normal xl:text-[16px] leading-[50px] text-secondarytext">
                    icourtnyhenry@example.com
                  </p>
                </div>
              </Flex>

              <Flex className=" items-start ">
                <Flex className="w-4/12 items-center gap-6 font-dm font-medium xl:text-[20px] leading-[50px]">
                  <FaPhone className=" text-primary" />
                  <p className=" text-maintext">Phone:</p>
                </Flex>

                <div className="w-8/12">
                  <p className=" font-dm font-normal xl:text-[16px] leading-[50px] text-secondarytext">
                    icourtnyhenry@example.com
                  </p>
                </div>
              </Flex>

              <Flex className=" items-start ">
                <Flex className="w-4/12 items-center gap-6 font-dm font-medium xl:text-[20px] leading-[50px]">
                  <FaLocationDot className=" text-primary" />
                  <p className=" text-maintext">Location:</p>
                </Flex>

                <div className="w-8/12">
                  <p className=" font-dm font-normal xl:text-[16px] leading-[50px] text-secondarytext w-[307px]">
                    380 St Kilda Road, Melbourne VIC 3004, Australia
                  </p>
                </div>
              </Flex>

              <Flex className=" items-start ">
                <Flex className="w-4/12 items-center gap-6 font-dm font-medium xl:text-[20px] leading-[50px]">
                  <p className=" text-maintext">Follow Me:</p>
                </Flex>

                <div className="w-8/12">
                  <Flex className=" items-center justify-start gap-3 mt-2 w-full ">
                    <a
                      href=""
                      className="w-[46px] h-[46px] flex items-center justify-center bg-white text-primary hover:bg-primary hover:text-white rounded-full"
                    >
                      {" "}
                      <FaFacebookF />{" "}
                    </a>
                    <a
                      href=""
                      className="w-[46px] h-[46px] flex items-center justify-center bg-white text-primary hover:bg-primary hover:text-white rounded-full"
                    >
                      {" "}
                      <FaTwitter />{" "}
                    </a>
                    <a
                      href=""
                      className="w-[46px] h-[46px] flex items-center justify-center bg-white text-primary hover:bg-primary hover:text-white rounded-full"
                    >
                      {" "}
                      <FaLinkedinIn />{" "}
                    </a>
                    <a
                      href=""
                      className="w-[46px] h-[46px] flex items-center justify-center bg-white text-primary hover:bg-primary hover:text-white rounded-full"
                    >
                      {" "}
                      <FaYoutube />{" "}
                    </a>
                  </Flex>
                </div>
              </Flex>
            </div>
          </div>
        </Flex>

        <Flex className="mt-[56px] gap-[147px]">
          <div className="w-5/12">
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

          <div className="w-7/12">
            <h1 className=" font-nunito font-bold xl:text-[46px] leading-[56px] text-maintext">
              Personal Experience and Skills
            </h1>

            <p className=" mt-[19px] font-poppins font-normal xl:text-[16px] leading-[26px] text-secondarytext">
              Since joining Sotcox in 2009 .Web design encompasses many
              different skills and discipli web graphic design; user interface
              design (UI design); authoring, including standardise optimization.
              Often many individuals will work in teams covering different
              aspects of the
            </p>
            <p className=" mt-5 font-poppins font-normal xl:text-[16px] leading-[26px] text-secondarytext">
              The term "web design" is normally used to describe the design
              process relating to the front-end (client side) design of a
              website including writing markup. Web design partiy overlaps web
              engineering in the broader scope of web development.
            </p>
          </div>
        </Flex>

        <Flex className="mt-[56px] gap-[50px]">
          <div className="w-6/12">
            <h1 className=" font-nunito font-bold xl:text-[46px] leading-[56px] text-maintext">
              Career Guidelines
            </h1>
            <p className=" xl:w-[661px] mt-[19px] font-poppins font-normal xl:text-[16px] leading-[26px] text-secondarytext">
              As a web developer, you could work for a company or agency, or as
              a freelancer on projects for individual clients. Your tasks will
              vary depending on your work sit but day-to-day responsibilities
              might generally include.
            </p>

            <UL className="mt-[25px]">
              <LI>
                <Flex className="items-center">
                  <LuDot className="text-xl" />
                  <p className=" font-poppins italic xl:text-[18px] leading-[36px] text-maintext">
                    Designing user interfaces and navigation menus
                  </p>
                </Flex>
              </LI>
              <LI>
                <Flex className="items-center">
                  <LuDot className="text-xl" />
                  <p className=" font-poppins italic xl:text-[18px] leading-[36px] text-maintext">
                    Designing user interfaces and navigation menus
                  </p>
                </Flex>
              </LI>
              <LI>
                <Flex className="items-center">
                  <LuDot className="text-xl" />
                  <p className=" font-poppins italic xl:text-[18px] leading-[36px] text-maintext">
                    Designing user interfaces and navigation menus
                  </p>
                </Flex>
              </LI>
              <LI>
                <Flex className="items-center">
                  <LuDot className="text-xl" />
                  <p className=" font-poppins italic xl:text-[18px] leading-[36px] text-maintext">
                    Designing user interfaces and navigation menus
                  </p>
                </Flex>
              </LI>
              <LI>
                <Flex className="items-center">
                  <LuDot className="text-xl" />
                  <p className=" font-poppins italic xl:text-[18px] leading-[36px] text-maintext">
                    Designing user interfaces and navigation menus
                  </p>
                </Flex>
              </LI>
            </UL>
          </div>
          <div className="w-6/12">
            <Image src="/teamdetailsimg.png" className="w-full" />
          </div>
        </Flex>

        <Flex className="mt-[111px] p-[50px] gap-[100px] rounded-[20px] bg-[#F4F4FF]">
          <div className="w-1/2">
            <h1 className=" font-nunito font-bold xl:text-[46px] leading-[36px] text-maintext">
              Contact Me
            </h1>

            <p className=" font-dm font-normal xl:text-[16px] leading-[36px] text-secondarytext">
              Your email address will not be published. Required fields are
              marked
            </p>
            <form action="" className="mt-[25px]">
              <Flex className="items-center gap-5">
                <input
                  className="mb-5 py-[15px] px-[26px] bg-white rounded-full w-full font-dm font-normal xl:text-[16px] outline-none"
                  placeholder="Your Name"
                  type="text"
                  name=""
                  id=""
                />
                <input
                  className="mb-5 py-[15px] px-[26px] bg-white rounded-full w-full font-dm font-normal xl:text-[16px] outline-none"
                  placeholder="Email Address"
                  type="text"
                  name=""
                  id=""
                />
              </Flex>
              <input
                className="mb-5 py-[15px] px-[26px] bg-white rounded-full w-full font-dm font-normal xl:text-[16px] outline-none"
                placeholder="Business Topic"
                type="text"
                name=""
                id=""
              />
              <textarea
                className=" h-[173px] mb-5 py-[15px] px-[26px] bg-white rounded-[20px] w-full font-dm font-normal xl:text-[16px] outline-none"
                placeholder="Your Message"
                type="text"
                name=""
                id=""
              ></textarea>

              <button className=" font-dm font-normal xl:text-[18px] leading-[30px] text-white py-[15px] px-[33px] rounded-full bg-lenearOne flex items-center justify-center">
                Send Message
              </button>
            </form>
          </div>
          <div className="w-1/2">
            <div className="w-full h-full rounded-[20px] bg-gray-400"> </div>
          </div>
        </Flex>
      </Container>
    </main>
  );
};

export default TeamDetails;
