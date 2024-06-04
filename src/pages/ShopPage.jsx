import React from "react";
import PageBanner from "../components/common/PageBanner";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";
import Search from "../components/screens/shop/Search";
import Price from "../components/screens/shop/Price";
import Catagory from "../components/screens/shop/Catagory";
import Availity from "../components/screens/shop/Availity";
import ProductSection from "../components/screens/shop/ProductSection";

const ShopPage = () => {
  return (
    <main>
      <PageBanner title="Shop" />
      <Container>
        <Flex className="mt-[120px] items-start justify-between gap-6">
          <div className="w-3/12">
            <Search />
            <Price />
            <Catagory />
            <Availity />
          </div>
          <div className="w-9/12">
            <ProductSection />
          </div>
        </Flex>
      </Container>
    </main>
  );
};

export default ShopPage;
