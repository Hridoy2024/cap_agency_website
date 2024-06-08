import React from "react";
import PageBanner from "../components/common/PageBanner";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";
import Starrating from "../components/common/Starrating";
import { BsHandbag } from "react-icons/bs";
import {
  FaFacebookF,
  FaPinterest,
  FaRegHeart,
  FaTwitter,
} from "react-icons/fa6";
import { FiRefreshCw } from "react-icons/fi";
import { IoFlag } from "react-icons/io5";
import LI from "../components/common/LI";
import UL from "../components/common/UL";
import Related from "../components/screens/ProductInfo/Related";

const Product = () => {
  return (
    <main>
      <PageBanner title="Shop Details" />
      <Container>
        <Flex className="mt-[50px] flex-col xl:flex-row 2xl:mt-[120px] justify-between gap-[82px]">
          <div className="w-full xl:w-1/2">
            <Flex className=" flex-col-reverse md:flex-row">
              <div className="w-full flex md:block md:w-3/12">
                <div className="mb-[10px] w-[144px] h-[134px] rounded-[5px] bg-gray-200 2xl:py-[22px] 2xl:px-9">
                  <div className="w-full h-full bg-gray-400"></div>
                </div>
                <div className="mb-[10px] w-[144px] h-[134px] rounded-[5px] bg-gray-200 2xl:py-[22px] 2xl:px-9">
                  <div className="w-full h-full bg-gray-400"></div>
                </div>
                <div className="mb-[10px] w-[144px] h-[134px] rounded-[5px] bg-gray-200 2xl:py-[22px] 2xl:px-9">
                  <div className="w-full h-full bg-gray-400"></div>
                </div>
                <div className="mb-[10px] w-[144px] h-[134px] rounded-[5px] bg-gray-200 2xl:py-[22px] 2xl:px-9">
                  <div className="w-full h-full bg-gray-400"></div>
                </div>
              </div>
              <div className="w-full xl:w-9/12">
                <div className="w-full h-[400px] lg:h-full bg-gray-200 p-5 2xl:py-[56px] 2xl:px-[66px] rounded-[5px]">
                  <div className=" w-full h-full bg-gray-400"></div>
                </div>
              </div>
            </Flex>
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="font-dm font-medium xl:text-[30px] leading-[40px] text-maintext">
              Apple iPhone 14 Pro Max 128 GB Deep Purple
            </h1>

            <Flex className="items-center gap-4 flex-wrap mt-5">
              <p className=" font-dm font-normal xl:text-[14px] leading-[14px] text-primary">
                iPhone
              </p>
              <span className="text-[#D9D9D9] text-[14px]"> /</span>

              <p className=" font-dm font-normal xl:text-[14px] leading-[14px] text-secondarytext">
                Sold 22 Products
              </p>

              <span className="text-[#D9D9D9] text-[14px]"> /</span>

              <Flex className="items-center gap-[10px]">
                <Starrating />

                <p className=" font-dm font-normal xl:text-[14px] leading-[14px] text-secondarytext">
                  6 Reviews
                </p>
              </Flex>
            </Flex>

            <Flex className="mt-[34px] gap-[10px]">
              <del className=" font-dm font-medium xl:text-[20px] leading-[24px] text-secondarytext">
                $2000
              </del>
              <p className=" font-dm font-medium xl:text-[20px] leading-[24px] text-maintext">
                $1800
              </p>
            </Flex>

            <p className="mt-[15px] font-dm font-normal xl:text-[16px] leading-[16px] text-[#0CA640]">
              45 In stock
            </p>

            <p className="my-[31px] font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext xl:w-[635px]">
              There are many variations of passages of Lorem Ipsum available,
              but our athe majority have suffered alteration in some form, by
              injected humour, or randomised our words which don't look even
              slightly believable.
            </p>

            <Flex className="gap-[30px] flex-col md:flex-row">
              <div className="w-full md:w-3/12">
                <Flex className=" py-4 px-[27px] rounded-full border-[1px] w-full justify-between border-orange items-center gap-5">
                  <button className=" font-dm font-medium xl:text-[16px] leading-[16px] text-secondarytext">
                    -
                  </button>
                  <button className=" font-dm font-medium xl:text-[16px] leading-[16px] text-maintext">
                    1
                  </button>
                  <button className=" font-dm font-medium xl:text-[16px] leading-[16px] text-secondarytext">
                    +
                  </button>
                </Flex>
              </div>
              <div className="w-full md:w-9/12">
                <button className=" flex items-center justify-center gap-[10px] font-poppins font-medium xl:text-[18px] leading-[26px] bg-lenearOne text-white py-3 rounded-full w-full">
                  <BsHandbag /> Add to Cart
                </button>
              </div>
            </Flex>

            <Flex className="mt-[27px] gap-[30px]">
              <button className=" flex items-center gap-2 font-dm font-normal xl:text-[16px] leading-[18px] text-secondarytext capitalize">
                <FaRegHeart /> add to wishlist
              </button>
              <button className=" flex items-center gap-2 font-dm font-normal xl:text-[16px] leading-[18px] text-secondarytext capitalize">
                <FiRefreshCw /> Compare
              </button>
            </Flex>

            <div className=" w-full h-[2px] bg-[#E5EBEF] my-5"></div>

            <p className=" mb-[18px] font-dm font-normal xl:text-[16px] leading-[16px] text-secondarytext">
              <span className="text-maintext font-medium">SKU: </span>KE-91039
            </p>
            <p className="  mb-[18px] font-dm font-normal xl:text-[16px] leading-[16px] text-secondarytext">
              <span className="text-maintext font-medium">Category: </span>
              Mobile
            </p>

            <button className=" flex items-center gap-2 font-dm font-normal xl:text-[16px] leading-[18px] text-[#F03333] capitalize">
              <IoFlag /> Report This Item
            </button>

            <Flex className="mt-[18px] gap-5">
              <p className=" font-dm font-medium xl:text-[16px] leading-[24px] text-[#13172B]">
                Share
              </p>

              <button>
                <FaFacebookF className="text-[#3E75B2]" />
              </button>
              <button>
                <FaPinterest className="text-[#E12828]" />
              </button>
              <button>
                <FaTwitter className="text-[#3FD1FF]" />
              </button>
            </Flex>
          </div>
        </Flex>

        <div className=" mt-[120px] rounded-[20px] py-8 px-10 border-[1px] border-[#F4F4FF]">
          <UL className="flex gap-4 2xl:gap-[80px]">
            <LI className="font-dm pb-5 border-b-[1px] border-white hover:border-primary font-medium text-[15px] 2xl:text-[20px] leading-[30px] cursor-pointer text-secondarytext hover:text-primary">
              Description
            </LI>
            <LI className="font-dm pb-5 border-b-[1px] border-white hover:border-primary font-medium text-[15px] 2xl:text-[20px] leading-[30px] cursor-pointer text-secondarytext hover:text-primary">
              Additional information
            </LI>
            <LI className="font-dm pb-5 border-b-[1px] border-white hover:border-primary font-medium text-[15px] 2xl:text-[20px] leading-[30px] cursor-pointer text-secondarytext hover:text-primary">
              Reviews 04
            </LI>
          </UL>

          <div className=" w-full py-[34px]">
            <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext">
              Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac
              pellentesque lacus. Pellentesque dapibus nunc nec est impexrdiet,
              a maleuada sem rutrum. Sed sed vehicula ipsum dapibusetqua metus
              urna, eu luctus velit placerat ut. Cras at porttitor lectus. Ut
              dapibus aliquam nibh, in imperdiet libero tncidunt sit amet.
              Morbxi sodales femaentum our as nibh nice facilisis.que auctor
              varius lectus, lacinia rhoncus velit posuere vel. Cras condimentum
              tincidunt urna, sed vehicula ipsum
            </p>

            <div className="my-[34px]">
              <LI className="font-dm font-medium xl:text-[16px] leading-[26px] cursor-pointer text-secondarytext ">
                Aenean auctor sem ac ex efficitur
              </LI>
              <LI className="font-dm font-medium xl:text-[16px] leading-[26px] cursor-pointer text-secondarytext ">
                Aenean auctor sem ac ex efficitur
              </LI>
              <LI className="font-dm font-medium xl:text-[16px] leading-[26px] cursor-pointer text-secondarytext ">
                Aenean auctor sem ac ex efficitur
              </LI>
              <LI className="font-dm font-medium xl:text-[16px] leading-[26px] cursor-pointer text-secondarytext ">
                Aenean auctor sem ac ex efficitur
              </LI>
            </div>
            <p className=" font-dm font-normal xl:text-[16px] leading-[26px] text-secondarytext">
              Sed molestie orci sem, at semper est molestie ac. Suspendisse
              cursus feugiat erat, eu posuere massa. Nullam posuere nibh non
              eros loboxrts Ut porta et ex maximus malesuada. temp endisse at
              dui euismod, rhoncus eros non, imperdiet ipsum. Vestibulum
              vehicula vel turpis et vestibulum. Ut porta et ex maximus
              malesuada.
            </p>
          </div>
        </div>
        <div className=" mt-[114px]">
          <Related />
        </div>
      </Container>
    </main>
  );
};

export default Product;
