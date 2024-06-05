import React from "react";
import PageBanner from "../components/common/PageBanner";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";
import Image from "../components/common/Image";

const Error = () => {
  return (
    <main>
      <PageBanner title="Error" />
      <Container>
        <Flex className="mt-[120px] items-center justify-center flex-col gap-[60px]">
          <Image src="/error.png" alt="error" />

          <div>
            <h1 className=" font-nunito font-bold xl:text-[25px] text-maintext text-center">
              Oops! Page Not Found.
            </h1>
            <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext text-center mt-[17px] xl:w-[513px]">
              The page you are looking for is not available or has been moved.
              Try a different page or go to homepage with the button below.
            </p>

            <button className=" mx-auto mt-[40px] font-dm font-normal xl:text-[18px] leading-[30px] text-white py-[15px] px-[33px] rounded-full bg-lenearOne flex items-center justify-center">
              Back to Home
            </button>
          </div>
        </Flex>
      </Container>
    </main>
  );
};

export default Error;
