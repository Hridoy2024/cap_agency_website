import React from "react";
import PageBanner from "../components/common/PageBanner";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";
import BlogsSide from "../components/screens/Blogs/BlogsSide";
import { IoChatbubblesOutline } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import { GrAnnounce } from "react-icons/gr";
import Image from "../components/common/Image";
import UL from "../components/common/UL";
import LI from "../components/common/LI";
import {
  FaCheckCircle,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const BlogDetailsPage = () => {
  return (
    <main>
      <PageBanner title="Blog Details" />
      <Container>
        <Flex className="mt-[120px] gap-[90px] justify-between">
          <div className="w-8/12">
            <div className=" w-full h-[647px] rounded-[20px] bg-gray-300"></div>
            <div className="mt-[23px]">
              <Flex className="items-center gap-10">
                <Flex className="items-center gap-[6px]">
                  <GrAnnounce className=" text-primary" />{" "}
                  <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext">
                    Business Planning
                  </p>
                </Flex>
                <Flex className="items-center gap-[6px]">
                  <IoChatbubblesOutline className=" text-primary" />{" "}
                  <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext">
                    25
                  </p>
                </Flex>
                <Flex className="items-center gap-[6px]">
                  <LuEye className=" text-primary" />{" "}
                  <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext">
                    120 Views
                  </p>
                </Flex>
              </Flex>
            </div>

            <div className="mt-[33px]">
              <h1 className=" font-nunito font-bold xl:text-[25px] text-maintext">
                Staff meeting group a young modern people smart in casual
              </h1>

              <Flex className="items-center gap-[10px] mt-[19px]">
                <div className=" h-[45px] w-[45px] rounded-[5px] bg-primary py-[5px] px-[11px] inline-flex items-center justify-center">
                  <span className=" font-dm font-bold xl:text-[25px] text-white">
                    M
                  </span>
                </div>

                <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext xl:w-[828px]">
                  posuere morbi leo urna molestie at. Ipsum dolor sit amet
                  consectetur adipiscing elit pellentesqu habitant morbi Odio ut
                  enim blandit volutpat maecenas volutpat. Tristique magna sit
                  amet purus gravda purus sit amet luctuss.
                </p>
              </Flex>

              <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext xl:w-[889px]">
                Posuere morbi leo urna molestie at. Ipsum dolor sit amet
                consectetur adipiscing elit pellentesqu habitant morbi. Odio ut
                enim blandit volutpat maecenas volutpat. Tristique magna sit
                amet purus gravida. Vitae proin sagittis nisl rhoncus. Sagit tis
                nisl rhoncus mattis rhoncus urna. Mauris vitae ultricies leo
                integer. Elit eget gravida cum sociis natoque Amet consec tetur
                adipiscing elit ut aliquam purus sit amet luctus
              </p>
            </div>

            <Flex className="p-[30px] rounded-[20px] bg-[#F4F4FF] mt-9">
              <div className="w-1/12">
                <Image src="/commaoutline.png" />
              </div>

              <div className="w-11/12">
                <h1 className=" font-dm font-normal xl:text-[20px] leading-[30px] text-maintext xl:w-[749px]">
                  Our office is something we are pleased with. We consider it
                  the little magnet; it is wanting to come here and afterward
                  difficult to leave it. I try as much as possible to give you a
                  great basic product and what comes out, I feel, is really
                  amazing
                </h1>

                <p className="mt-5 font-dm font-normal xl:text-[16px] leading-[28px] text-primary">
                  __ Hanan Innocent
                </p>
              </div>
            </Flex>

            <Flex className="justify-between items-start gap-10 mt-10">
              <div className="w-5/12">
                <div className="w-full h-[309px] rounded-[20px] bg-gray-300"></div>
              </div>
              <div className="w-7/12">
                <h1 className=" font-nunito font-bold xl:text-[25px] text-maintext">
                  Let our investment management team
                </h1>

                <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext mt-[19px] xl:w-[443px]">
                  Curabitur vulputatea vestibulum Phasellus rhoncus, as dolor
                  eget viverra pretium, dolor tellus aliquet nunc, vitae
                  ultricies erat elit eu lacus. Vestibulum non justo
                </p>

                <UL className="mt-[19px]">
                  <LI className="w-full mb-2 flex items-center gap-[10px] font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
                    <FaCheckCircle className="text-orange" /> Financial Growth
                    System
                  </LI>
                  <LI className="w-full mb-2 flex items-center gap-[10px] font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
                    <FaCheckCircle className="text-orange" /> Customer Oriented
                    Program Daily
                  </LI>
                  <LI className="w-full mb-2 flex items-center gap-[10px] font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
                    <FaCheckCircle className="text-orange" /> Dedicated Team
                    member
                  </LI>
                  <LI className="w-full mb-2 flex items-center gap-[10px] font-dm font-normal xl:text-[16px] leading-[26px] text-maintext">
                    <FaCheckCircle className="text-orange" /> Product ux Design
                    & Development Process
                  </LI>
                </UL>
              </div>
            </Flex>

            <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext mt-[30px]">
              Posuere morbi leo urna molestie at. Ipsum dolor sit amet
              consectetur adipiscing elit pellentesqu habitant morbi. Odio ut
              enim blandit volutpat maecenas volutpat. Tristique magna sit amet
              purus gravida. Vitae proin sagittis nisl rhoncus. Sagit tis nisl
              rhoncus mattis rhoncus urna. Mauris vitae ultricies leo integer.
              Elit eget gravida cum sociis natoque Amet consec tetur adipiscing
              elit ut aliquam purus sit amet luctus
            </p>

            <Flex className="mt-9 items-center justify-between gap-5">
              <div className="w-1/3 h-[282px] rounded-[20px] bg-gray-300"></div>
              <div className="w-1/3 h-[282px] rounded-[20px] bg-gray-300"></div>
              <div className="w-1/3 h-[282px] rounded-[20px] bg-gray-300"></div>
            </Flex>

            <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext mt-[30px]">
              Enim blandit volutpat maecenas volutpat. Tristique magna sit amet
              purus gravida. Vitae proin sagittis nisl rhoncus. Sagit tis nisl
              rhoncus mattis rhoncus urna. Mauris vitae ultricies leo integer.
              Elit eget gravida cum sociis natoque Amet consec tetur adipiscing
              elit ut aliquam purus sit amet luctus
            </p>

            <Flex className="mt-[30px] rounded-[20px] justify-between bg-[#F4F4FF] p-[38px]">
              <Flex className=" items-center gap-5">
                <p className=" font-nunito font-bold xl:text-[25px] text-maintext">
                  Tag:
                </p>

                <span className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext hover:text-primary">
                  #Business
                </span>
                <span className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext hover:text-primary">
                  #Business
                </span>
                <span className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext hover:text-primary">
                  #Business
                </span>
              </Flex>

              <Flex className="items-center gap-5">
                <p className=" font-nunito font-bold xl:text-[25px] text-maintext">
                  Share::
                </p>
                <Flex className=" items-center justify-start gap-3 mt-2 w-full ">
                  <a
                    href=""
                    className="w-[32px] h-[32px] flex items-center justify-center bg-white text-primary hover:bg-primary hover:text-white rounded-full"
                  >
                    {" "}
                    <FaFacebookF />{" "}
                  </a>
                  <a
                    href=""
                    className="w-[32px] h-[32px] flex items-center justify-center bg-white text-primary hover:bg-primary hover:text-white rounded-full"
                  >
                    {" "}
                    <FaTwitter />{" "}
                  </a>
                  <a
                    href=""
                    className="w-[32px] h-[32px] flex items-center justify-center bg-white text-primary hover:bg-primary hover:text-white rounded-full"
                  >
                    {" "}
                    <FaLinkedinIn />{" "}
                  </a>
                  <a
                    href=""
                    className="w-[32px] h-[32px] flex items-center justify-center bg-white text-primary hover:bg-primary hover:text-white rounded-full"
                  >
                    {" "}
                    <FaYoutube />{" "}
                  </a>
                </Flex>
              </Flex>
            </Flex>

            <div className="mt-[66px]">
              <p className=" font-nunito font-bold xl:text-[25px] text-maintext">
                Comments (04)
              </p>

              <div className="mt-9">
                <Flex className="p-[35px] bg-[#F4F4FF] rounded-[20px] mb-[30px]">
                  <div className="w-1/12">
                    <div className="h-[68px] w-[68px] rounded-full bg-gray-300"></div>
                  </div>

                  <div className="w-8/12">
                    <div className="ml-[26px]">
                      <h1 className=" font-dm font-medium xl:text-[20px] text-maintext">
                        Abubokkor Siddik
                      </h1>

                      <p className=" font-dm font-normal xl:text-[14px] leading-[26px] text-maintext">
                        Dec 16, 2022
                      </p>

                      <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext mt-[7px]">
                        Simply dummy text of the printing and typesetting
                        industry.
                      </p>
                    </div>
                  </div>

                  <div className="w-3/12">
                    <button className=" ml-auto mt-[50px] font-dm font-normal xl:text-[16px] leading-[16px] text-white py-[11px] px-[29px] rounded-full bg-lenearOne flex items-center justify-center">
                      Read More
                    </button>
                  </div>
                </Flex>

                <Flex className="p-[35px] bg-[#F4F4FF] rounded-[20px] mb-[30px]">
                  <div className="w-1/12">
                    <div className="h-[68px] w-[68px] rounded-full bg-gray-300"></div>
                  </div>

                  <div className="w-8/12">
                    <div className="ml-[26px]">
                      <h1 className=" font-dm font-medium xl:text-[20px] text-maintext">
                        Abubokkor Siddik
                      </h1>

                      <p className=" font-dm font-normal xl:text-[14px] leading-[26px] text-maintext">
                        Dec 16, 2022
                      </p>

                      <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext mt-[7px]">
                        Simply dummy text of the printing and typesetting
                        industry.
                      </p>
                    </div>
                  </div>

                  <div className="w-3/12">
                    <button className=" ml-auto mt-[50px] font-dm font-normal xl:text-[16px] leading-[16px] text-white py-[11px] px-[29px] rounded-full bg-lenearOne flex items-center justify-center">
                      Read More
                    </button>
                  </div>
                </Flex>

                <Flex className="p-[35px] bg-[#F4F4FF] rounded-[20px] mb-[30px]">
                  <div className="w-1/12">
                    <div className="h-[68px] w-[68px] rounded-full bg-gray-300"></div>
                  </div>

                  <div className="w-8/12">
                    <div className="ml-[26px]">
                      <h1 className=" font-dm font-medium xl:text-[20px] text-maintext">
                        Abubokkor Siddik
                      </h1>

                      <p className=" font-dm font-normal xl:text-[14px] leading-[26px] text-maintext">
                        Dec 16, 2022
                      </p>

                      <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext mt-[7px]">
                        Simply dummy text of the printing and typesetting
                        industry.
                      </p>
                    </div>
                  </div>

                  <div className="w-3/12">
                    <button className=" ml-auto mt-[50px] font-dm font-normal xl:text-[16px] leading-[16px] text-white py-[11px] px-[29px] rounded-full bg-lenearOne flex items-center justify-center">
                      Read More
                    </button>
                  </div>
                </Flex>

                <Flex className="p-[35px] bg-[#F4F4FF] rounded-[20px] mb-[30px]">
                  <div className="w-1/12">
                    <div className="h-[68px] w-[68px] rounded-full bg-gray-300"></div>
                  </div>

                  <div className="w-8/12">
                    <div className="ml-[26px]">
                      <h1 className=" font-dm font-medium xl:text-[20px] text-maintext">
                        Abubokkor Siddik
                      </h1>

                      <p className=" font-dm font-normal xl:text-[14px] leading-[26px] text-maintext">
                        Dec 16, 2022
                      </p>

                      <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext mt-[7px]">
                        Simply dummy text of the printing and typesetting
                        industry.
                      </p>
                    </div>
                  </div>

                  <div className="w-3/12">
                    <button className=" ml-auto mt-[50px] font-dm font-normal xl:text-[16px] leading-[16px] text-white py-[11px] px-[29px] rounded-full bg-lenearOne flex items-center justify-center">
                      Read More
                    </button>
                  </div>
                </Flex>
              </div>
            </div>

            <div className="mt-[63px]">
              <p className=" font-nunito font-bold xl:text-[25px] text-maintext">
                Write Your Comment
              </p>

              <form action="" className="mt-10">
                <Flex className="items-center gap-5">
                  <input
                    className="mb-5 py-[15px] px-[26px] bg-[#F4F4FF] rounded-full w-full font-dm font-normal xl:text-[16px] outline-none"
                    placeholder="Your Name"
                    type="text"
                    name=""
                    id=""
                  />
                  <input
                    className="mb-5 py-[15px] px-[26px] bg-[#F4F4FF] rounded-full w-full font-dm font-normal xl:text-[16px] outline-none"
                    placeholder="Email Address"
                    type="text"
                    name=""
                    id=""
                  />
                  <input
                    className="mb-5 py-[15px] px-[26px] bg-[#F4F4FF] rounded-full w-full font-dm font-normal xl:text-[16px] outline-none"
                    placeholder="Email Address"
                    type="text"
                    name=""
                    id=""
                  />
                </Flex>

                <textarea
                  className=" h-[173px] mb-5 py-[15px] px-[26px] bg-[#F4F4FF] rounded-[20px] w-full font-dm font-normal xl:text-[16px] outline-none"
                  placeholder="Your Message"
                  type="text"
                  name=""
                  id=""
                ></textarea>

                <button className=" mt-[40px] font-dm font-normal xl:text-[18px] leading-[30px] text-white py-[15px] px-[33px] rounded-full bg-lenearOne flex items-center justify-center">
                  Read More
                </button>
              </form>
            </div>
          </div>
          <div className="w-4/12">
            <BlogsSide />
          </div>
        </Flex>
      </Container>
    </main>
  );
};

export default BlogDetailsPage;
