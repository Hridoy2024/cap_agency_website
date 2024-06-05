import React from "react";
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
const Navigation = () => {
  return (
    <nav className=" fixed z-50 w-full top-[42px]">
      <Container>
        <div className="">
          <Flex className="items-center justify-between bg-white  rounded-l-[500px]">
            <div className="h-[102px] w-[50vw] bg-white absolute top-0 right-0 z-[-1]"></div>
            <div className="w-3/12">
              <Link to="/">
                <Image src="/logo.png" alt="logo" className="ml-3" />
              </Link>
            </div>
            <div className="w-6/12">
              <UL className="flex items-center gap-[22px]">
                <LI className="py-[38px] border-b-[2px] border-white group hover:border-orange">
                  <Link
                    to="/"
                    className=" flex items-center font-poppins font-normal xl:text-[16px] text-maintext group-hover:text-orange"
                  >
                    Home <FaAngleDown />
                  </Link>
                </LI>

                <LI className="py-[38px] border-b-[2px] border-white group hover:border-orange">
                  <Link
                    to="/about"
                    className=" flex items-center font-poppins font-normal xl:text-[16px] text-maintext group-hover:text-orange"
                  >
                    About
                  </Link>
                </LI>
                <LI className="py-[38px] border-b-[2px] border-white group hover:border-orange">
                  <Link
                    to="/service"
                    className=" flex items-center font-poppins font-normal xl:text-[16px] text-maintext group-hover:text-orange"
                  >
                    Services <FaAngleDown />
                  </Link>
                </LI>
                <LI className="py-[38px] border-b-[2px] border-white group hover:border-orange">
                  <Link
                    to="/teams"
                    className=" flex items-center font-poppins font-normal xl:text-[16px] text-maintext group-hover:text-orange"
                  >
                    Team <FaAngleDown />
                  </Link>
                </LI>
                <LI className="py-[38px] border-b-[2px] border-white group hover:border-orange">
                  <a
                    href=""
                    className=" flex items-center font-poppins font-normal xl:text-[16px] text-maintext group-hover:text-orange"
                  >
                    Pages <FaAngleDown />
                  </a>
                </LI>
                <LI className="py-[38px] border-b-[2px] border-white group hover:border-orange">
                  <Link
                    to="/blogs"
                    className=" flex items-center font-poppins font-normal xl:text-[16px] text-maintext group-hover:text-orange"
                  >
                    News <FaAngleDown />
                  </Link>
                </LI>
                <LI className="py-[38px] border-b-[2px] border-white group hover:border-orange">
                  <Link
                    to="/contact"
                    className=" flex items-center font-poppins font-normal xl:text-[16px] text-maintext group-hover:text-orange"
                  >
                    Contact <FaAngleDown />
                  </Link>
                </LI>
              </UL>
            </div>
            <div className="w-3/12">
              <Flex className="gap-[25px]">
                <a
                  href=""
                  className="  flex items-center justify-center w-[56px] h-[56px] bg-[#F4F4FF] rounded-full border-[1px] border-primary"
                >
                  <IoSearchOutline className="text-[22px] text-primary" />
                </a>
                <Link
                  to="/cart"
                  href=""
                  className=" relative  flex items-center justify-center w-[56px] h-[56px] bg-[#F4F4FF] rounded-full border-[1px] border-primary"
                >
                  <div className=" absolute right-0 top-0 w-[18px] h-[18px] bg-primary p-[1px] flex items-center justify-center text-white rounded-full">
                    1
                  </div>
                  <HiOutlineShoppingBag className="text-[22px] text-primary" />
                </Link>

                <button className=" flex items-center justify-center gap-[10px] py-[15px] px-[30px] rounded-full font-dm font-normal xl:text-[18px] text-white bg-primary">
                  Free Quote <FaArrowRightLong />
                </button>
              </Flex>
            </div>
          </Flex>
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
