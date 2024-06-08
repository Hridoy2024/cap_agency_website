import React, { useState } from "react";
import PageBanner from "../components/common/PageBanner";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";
import Search from "../components/screens/shop/Search";
import Price from "../components/screens/shop/Price";
import Catagory from "../components/screens/shop/Catagory";
import Availity from "../components/screens/shop/Availity";
import ProductSection from "../components/screens/shop/ProductSection";

const ShopPage = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <main>
      <PageBanner title="Shop" />
      <Container>
        <Flex className="mt-[120px] relative items-start justify-between gap-6">
          <div
            className={` absolute top-0 ${
              toggle ? "left-0" : "left-[-100%]"
            } lg:static bg-white w-[90%] lg:w-3/12`}
          >
            <Search />
            <Price />
            <Catagory />
            <Availity />
          </div>
          <div className=" w-full lg:w-9/12">
            <ProductSection handleToggle={handleToggle} />
          </div>
        </Flex>
      </Container>
    </main>
  );
};

export default ShopPage;
