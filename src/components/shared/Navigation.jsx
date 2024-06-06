import React, { useState } from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import Image from "../common/Image";
import UL from "../common/UL";
import LI from "../common/LI";
import { FaAngleDown } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
const Navigation = () => {
  const [menu, setMenu] = useState(false);
  return (
    <nav className=" fixed z-50 w-full py-2 md:py-0 xl:top-[34px] 2xl:top-[42px] bg-white xl:bg-transparent">
      <Container>
        <div className="">
          <Flex className="items-center justify-between bg-white lg:py-2 2xl:p-0  rounded-l-[500px]">
            <div className=" hidden xl:block h-[82px] 2xl:h-[102px] w-[50vw] bg-white absolute top-0 right-0 z-[-1]"></div>
            <div className=" w-[50%] 2xl:w-3/12">
              <Link to="/">
                <Image
                  src="/logo.png"
                  alt="logo"
                  className="ml-3 w-[180px] md:w-auto"
                />
              </Link>
            </div>
            <div
              className={` absolute lg:static top-[65px] bg-white ${
                menu ? "left-0" : "left-[-100%]"
              } w-full lg:w-6/12`}
            >
              <UL className="flex flex-col lg:flex-row items-center gap-3 2xl:gap-[22px]">
                <LI className="py-[20px] 2xl:py-[38px] border-b-[2px] border-white group hover:border-orange">
                  <Link
                    to="/"
                    className=" flex items-center font-poppins font-normal xl:text-[16px] text-maintext group-hover:text-orange"
                  >
                    Home <FaAngleDown />
                  </Link>
                </LI>

                <LI className="py-[15px] 2xl:py-[38px] border-b-[2px] border-white group hover:border-orange">
                  <Link
                    to="/about"
                    className=" flex items-center font-poppins font-normal xl:text-[16px] text-maintext group-hover:text-orange"
                  >
                    About
                  </Link>
                </LI>
                <LI className="py-[15px] 2xl:py-[38px] border-b-[2px] border-white group hover:border-orange">
                  <Link
                    to="/service"
                    className=" flex items-center font-poppins font-normal xl:text-[16px] text-maintext group-hover:text-orange"
                  >
                    Services <FaAngleDown />
                  </Link>
                </LI>
                <LI className="py-[15px] 2xl:py-[38px] border-b-[2px] border-white group hover:border-orange">
                  <Link
                    to="/teams"
                    className=" flex items-center font-poppins font-normal xl:text-[16px] text-maintext group-hover:text-orange"
                  >
                    Team <FaAngleDown />
                  </Link>
                </LI>
                <LI className="py-[15px] 2xl:py-[38px] border-b-[2px] border-white group hover:border-orange">
                  <a
                    href=""
                    className=" flex items-center font-poppins font-normal xl:text-[16px] text-maintext group-hover:text-orange"
                  >
                    Pages <FaAngleDown />
                  </a>
                </LI>
                <LI className="py-[15px] 2xl:py-[38px] border-b-[2px] border-white group hover:border-orange">
                  <Link
                    to="/blogs"
                    className=" flex items-center font-poppins font-normal xl:text-[16px] text-maintext group-hover:text-orange"
                  >
                    News <FaAngleDown />
                  </Link>
                </LI>
                <LI className="py-[15px] 2xl:py-[38px] border-b-[2px] border-white group hover:border-orange">
                  <Link
                    to="/contact"
                    className=" flex items-center font-poppins font-normal xl:text-[16px] text-maintext group-hover:text-orange"
                  >
                    Contact <FaAngleDown />
                  </Link>
                </LI>
              </UL>
            </div>
            <div className=" w-[50%] 2xl:w-3/12">
              <Flex className=" gap-2 items-center 2xl:gap-[25px] justify-end">
                <a
                  href=""
                  className="  flex items-center justify-center h-[30px] w-[30px] md:h-[32px] md:w-[32px] lg:w-[40px] lg:h-[40px] 2xl:w-[56px] 2xl:h-[56px] bg-[#F4F4FF] rounded-full border-[1px] border-primary"
                >
                  <IoSearchOutline className="text-[22px] text-primary" />
                </a>
                <Link
                  to="/cart"
                  href=""
                  className=" relative  flex items-center justify-center h-[30px] w-[30px] md:h-[32px] md:w-[32px] lg:w-[40px] lg:h-[40px] 2xl:w-[56px] 2xl:h-[56px] bg-[#F4F4FF] rounded-full border-[1px] border-primary"
                >
                  <div className=" absolute right-0 top-0 w-[18px] h-[18px] bg-primary p-[1px] flex items-center justify-center text-white rounded-full">
                    1
                  </div>
                  <HiOutlineShoppingBag className="text-[22px] text-primary" />
                </Link>

                <button className=" hidden md:flex items-center justify-center gap-[10px] py-[5px] px-5 2xl:py-[15px] 2xl:px-[30px] rounded-full font-dm font-normal xl:text-[18px] text-white bg-primary">
                  Free Quote <FaArrowRightLong />
                </button>

                <TiThMenu
                  onClick={() => setMenu(!menu)}
                  className=" text-4xl block lg:hidden"
                />
              </Flex>
            </div>
          </Flex>
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
