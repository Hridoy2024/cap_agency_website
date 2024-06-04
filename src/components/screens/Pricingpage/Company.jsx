import React from "react";
import Flex from "../../common/Flex";
import Image from "../../common/Image";

const Company = () => {
  return (
    <Flex className="mt-[120px] items-center justify-between">
      <div className="w-[272px] h-[140px] rounded-[10px] py-[44px] px-[57px] shadow-lg bg-[#F4F4FF] hover:bg-white">
        <Image src="/company1.png" alt="company" />
      </div>
      <div className="w-[272px] h-[140px] rounded-[10px] py-[44px] px-[57px] shadow-lg bg-[#F4F4FF] hover:bg-white">
        <Image src="/company2.png" alt="company" />
      </div>
      <div className="w-[272px] h-[140px] rounded-[10px] py-[44px] px-[57px] shadow-lg bg-[#F4F4FF] hover:bg-white">
        <Image src="/company3.png" alt="company" />
      </div>
      <div className="w-[272px] h-[140px] rounded-[10px] py-[44px] px-[57px] shadow-lg bg-[#F4F4FF] hover:bg-white">
        <Image src="/company4.png" alt="company" />
      </div>
      <div className="w-[272px] h-[140px] rounded-[10px] py-[44px] px-[57px] shadow-lg bg-[#F4F4FF] hover:bg-white">
        <Image src="/company5.png" alt="company" />
      </div>
    </Flex>
  );
};

export default Company;
