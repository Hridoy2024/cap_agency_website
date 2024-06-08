import React from "react";
import PageBanner from "../components/common/PageBanner";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";
import { FaPhone } from "react-icons/fa6";
import { BsEnvelopeFill } from "react-icons/bs";
import Image from "../components/common/Image";

const Contact = () => {
  return (
    <main>
      <PageBanner title="Contact Us" />
      <Container>
        <Flex className="mt-[50px] 2xl:mt-[120px] flex-col md:flex-row justify-between bg-[#F4F4FF]">
          <div className="w-full md:w-1/2 p-3 2xl:py-[55px] 2xl:px-[66px] bg-[#F4F4FF] rounded-l-[20px]">
            <h1 className=" font-nunito font-bold xl:text-[46px] leading-[36px] text-maintext">
              Contact With Us
            </h1>
            <p className="mt-5 font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext">
              Send us a message and we' ll respond as soon as possible
            </p>
            <form action="" className="mt-[25px]">
              <Flex className="items-center flex-col md:flex-row gap-5">
                <input
                  className="mb-5 py-[15px] px-[26px] bg-white rounded-full w-full md:w-1/2 font-dm font-normal xl:text-[16px] outline-none"
                  placeholder="Your Name"
                  type="text"
                  name=""
                  id=""
                />
                <input
                  className="mb-5 py-[15px] px-[26px] bg-white rounded-full w-full md:w-1/2 font-dm font-normal xl:text-[16px] outline-none"
                  placeholder="Email Address"
                  type="text"
                  name=""
                  id=""
                />
              </Flex>

              <Flex className="items-center flex-col md:flex-row gap-5">
                <input
                  className="mb-5 py-[15px] px-[26px] bg-white rounded-full w-full md:w-1/2 font-dm font-normal xl:text-[16px] outline-none"
                  placeholder="Email Address*"
                  type="text"
                  name=""
                  id=""
                />
                <input
                  className="mb-5 py-[15px] px-[26px] bg-white rounded-full w-full md:w-1/2 font-dm font-normal xl:text-[16px] outline-none"
                  placeholder="Phone Number*"
                  type="text"
                  name=""
                  id=""
                />
              </Flex>
              <input
                className="mb-5 py-[15px] px-[26px] bg-white rounded-full w-full font-dm font-normal xl:text-[16px] outline-none"
                placeholder="Subject"
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

          <div className="w-full md:w-1/2 py-[55px] px-[66px] rounded-[20px] bg-primary">
            <h1 className=" font-nunito font-bold xl:text-[46px] leading-[36px] text-white">
              Need Any Help?
            </h1>
            <p className="mt-5 font-dm font-normal xl:text-[16px] leading-[26px] text-white">
              Call us or message and we' ll respond as soon as possible
            </p>

            <Flex className="mt-[42px] gap-4 flex-col lg:flex-row">
              <div className="w-full lg:w-1/2">
                <Flex className=" flex-col md:flex-row gap-[25px]">
                  <div className=" h-[60px] w-[60px] bg-lenearOne rounded-full flex items-center justify-center">
                    <FaPhone className=" text-[22px] text-white" />
                  </div>
                  <div>
                    <h2 className=" font-nunito font-bold xl:text-[25px] leading-[25px] text-white">
                      Phone
                    </h2>

                    <div className="mt-3">
                      <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-white">
                        +(323) 9847 3847 383
                      </p>
                      <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-white">
                        +(323) 9847 3847 383
                      </p>
                    </div>
                  </div>
                </Flex>
              </div>
              <div className="w-full lg:w-1/2">
                <Flex className=" flex-col md:flex-row gap-[25px]">
                  <div className=" h-[60px] w-[60px] bg-lenearOne rounded-full flex items-center justify-center">
                    <FaPhone className=" text-[22px] text-white" />
                  </div>
                  <div>
                    <h2 className=" font-nunito font-bold xl:text-[25px] leading-[25px] text-white">
                      Phone
                    </h2>

                    <div className="mt-3">
                      <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-white">
                        +(323) 9847 3847 383
                      </p>
                      <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-white">
                        +(323) 9847 3847 383
                      </p>
                    </div>
                  </div>
                </Flex>
              </div>
            </Flex>

            <div className="w-full mt-[46px]">
              <Flex className="gap-[25px] flex-col lg:flex-row">
                <div className=" h-[60px] w-[60px] bg-lenearOne rounded-full flex items-center justify-center">
                  <BsEnvelopeFill className=" text-[22px] text-white" />
                </div>
                <div>
                  <h2 className=" font-nunito font-bold xl:text-[25px] leading-[25px] text-white">
                    Location
                  </h2>

                  <div className="mt-3">
                    <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-white xl:w-[360px]">
                      4517 Washington Ave. 32 King Street, Melbourne Manchester,
                      Road USA
                    </p>
                  </div>
                </div>
              </Flex>
            </div>

            <Image src="/contact.png" alt="contact" className="mt-[58px]" />
          </div>
        </Flex>
      </Container>

      <div className="mt-[120px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1491.8270201517169!2d90.38199538450208!3d23.74194868693174!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2z4KaV4KeN4Kaw4Ka_4Kef4KeH4Kaf4Ka_4KatIOCmhuCmh-Cmn-CmvyDgpofgpqjgprjgp43gpp_gpr_gpp_gpr_gpongpp8!5e0!3m2!1sbn!2sbd!4v1717577586810!5m2!1sbn!2sbd"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
};

export default Contact;
