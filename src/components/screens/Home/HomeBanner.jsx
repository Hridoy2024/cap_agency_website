import React from "react";
import Image from "../../common/Image";
import Container from "../../common/Container";
import Flex from "../../common/Flex";

const HomeBanner = () => {
  return (
    <section className="h-[950px] bg-homeBanner">
      <Container>
        <div className="pt-[216px]">
          <Flex className="items-center justify-between">
            <div className="w-1/2">
              <h4 className=" font-dm font-medium xl:text-[25px] leading-[25px] text-orange">
                Your Trusted Ortencey Agency
              </h4>
              <h1 className=" font-nunito font-bold xl:text-[60px] leading-[70px] text-white my-[20px]">
                Our Digital Agency With Excellence Services
              </h1>

              <p className=" font-dm font-medium xl:text-[20px] leading-[30px] text-white xl:w-[596px] capitalize">
                The 3 golden rules professional Digital Marketing Agency don’t
                want you to know about.
              </p>

              <button className=" mt-[65px] font-dm font-normal xl:text-[18px] text-white py-[15px] px-[33px] rounded-full bg-lenearOne flex items-center justify-center">
                Discover More
              </button>
            </div>
            <div className="w-1/2">
              <Image src="/banner_img.png" className="ml-auto block" />
            </div>
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default HomeBanner;
