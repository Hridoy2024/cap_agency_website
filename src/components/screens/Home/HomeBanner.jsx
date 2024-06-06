import React from "react";
import Image from "../../common/Image";
import Container from "../../common/Container";
import Flex from "../../common/Flex";

const HomeBanner = () => {
  return (
    <section className=" h-auto 2xl:h-[950px] bg-homeBanner">
      <Container>
        <div className=" pt-[120px] md:pt-[120px] 2xl:pt-[216px]">
          <Flex className="items-center flex-col md:flex-row justify-between">
            <div className=" w-full md:w-1/2 text-center md:text-left">
              <h4 className=" font-dm font-medium text-center md:text-left text-[15px] md:text-[18px] lg:text-[22px] 2xl:text-[25px] leading-[25px] text-orange">
                Your Trusted Ortencey Agency
              </h4>
              <h1 className=" font-nunito font-bold text-center md:text-left text-[30px] md:text-[40px] lg:text-[50px] 2xl:text-[60px] 2xl:leading-[70px] text-white my-1 2xl:my-[20px]">
                Our Digital Agency With Excellence Services
              </h1>

              <p className=" font-dm font-medium text-center md:text-left text-[12px] md:text-[15px] lg:text-[18px] 2xl:text-[20px] leading-[30px] text-white w-auto 2xl:w-[596px] capitalize">
                The 3 golden rules professional Digital Marketing Agency don’t
                want you to know about.
              </p>

              <button className=" mx-auto md:ml-0 mt-[30px] 2xl:mt-[65px] font-dm font-normal text-[14px] lg:text-[16px] 2xl:text-[18px] text-white py-[15px] px-[33px] rounded-full bg-lenearOne flex items-center justify-center">
                Discover More
              </button>
            </div>
            <div className=" w-full md:w-1/2">
              <Image
                src="/banner_img.png"
                className=" mx-auto 2xl:ml-auto block"
              />
            </div>
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default HomeBanner;
