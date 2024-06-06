import React from "react";
import Image from "../../common/Image";

const ServiceCard = () => {
  return (
    <div className="w-full sm:w-[48%] md:w-[48%] lg:w-[30%] xl:w-[23%]  mx-auto rounded-[50px] overflow-hidden cursor-pointer group">
      <div className="h-[225px] bg-gray-400">
        <Image src="cardtop.png" className="w-full h-full" />
      </div>
      <div className="pt-7 pb-[30px] px-9 bg-[#F4F4FF]">
        <h2 className=" font-nunito font-bold text-[14px] md:text-[18px] lg:text-[22px] 2xl:text-[25px] text-maintext group-hover:text-primary">
          Graphics Design
        </h2>

        <p className=" font-dm font-normal text-[10px] md:text-[12px] lg:text-[14px] 2xl:text-[16px] leading-[26px] text-secondarytext xl:w-[272px]">
          Contrary to popular belief, Lorem Ips is not simply random text. It
          has root in a piece of classical.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
