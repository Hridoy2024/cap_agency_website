import React from "react";
import Container from "../../common/Container";
import Title from "../../common/Title";
import Flex from "../../common/Flex";
import { CiUser } from "react-icons/ci";
import { IoChatbubblesOutline } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import Blogcard from "./Blogcard";

const Blogs = () => {
  return (
    <section className="mt-[50px] 2xl:mt-[120px]">
      <Container>
        <Title title="Our Blog" text="Latest Blogs & Articles" />

        <Flex className="items-center gap-6 flex-col sm:flex-row sm:flex-wrap mt-[47px]">
          <Blogcard className=" mx-auto w-[100%] sm:w-[48%] lg:w-[30%] 2xl:w-[32%]" />
          <Blogcard className=" mx-auto w-[100%] sm:w-[48%] lg:w-[30%] 2xl:w-[32%]" />
          <Blogcard className=" mx-auto w-[100%] sm:w-[48%] lg:w-[30%] 2xl:w-[32%]" />
        </Flex>
      </Container>
    </section>
  );
};

export default Blogs;
