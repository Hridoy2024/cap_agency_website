import React from "react";
import Flex from "../../common/Flex";
import Image from "../../common/Image";

const Company = () => {
  return (
    <Flex className="mt-[120px] flex-col sm:flex-row sm:flex-wrap gap-5 items-center justify-between">
      <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[20%] 2xl:w-[272px] h-[140px] rounded-[10px] py-[44px] px-[57px] shadow-lg bg-[#F4F4FF] hover:bg-white">
        <Image className="block mx-auto" src="/company1.png" alt="company" />
      </div>
      <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[20%] 2xl:w-[272px] h-[140px] rounded-[10px] py-[44px] px-[57px] shadow-lg bg-[#F4F4FF] hover:bg-white">
        <Image className="block mx-auto" src="/company2.png" alt="company" />
      </div>
      <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[20%] 2xl:w-[272px] h-[140px] rounded-[10px] py-[44px] px-[57px] shadow-lg bg-[#F4F4FF] hover:bg-white">
        <Image className="block mx-auto" src="/company3.png" alt="company" />
      </div>
      <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[20%] 2xl:w-[272px] h-[140px] rounded-[10px] py-[44px] px-[57px] shadow-lg bg-[#F4F4FF] hover:bg-white">
        <Image className="block mx-auto" src="/company4.png" alt="company" />
      </div>
      <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[20%] 2xl:w-[272px] h-[140px] rounded-[10px] py-[44px] px-[57px] shadow-lg bg-[#F4F4FF] hover:bg-white">
        <Image className="block mx-auto" src="/company5.png" alt="company" />
      </div>
    </Flex>
  );
};

export default Company;
