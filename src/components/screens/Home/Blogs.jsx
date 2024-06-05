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
    <section className="mt-[120px]">
      <Container>
        <Title title="Our Blog" text="Latest Blogs & Articles" />

        <Flex className="items-center gap-6 mt-[47px]">
          <Blogcard className="w-[32%]" />
          <Blogcard className="w-[32%]" />
          <Blogcard className="w-[32%]" />
        </Flex>
      </Container>
    </section>
  );
};

export default Blogs;
