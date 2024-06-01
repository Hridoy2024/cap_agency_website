import React from "react";
import Container from "../../common/Container";
import Title from "../../common/Title";
import Flex from "../../common/Flex";
import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Usercard from "./Usercard";

const Teams = () => {
  return (
    <section className="mt-[120px] bg-teamsbg">
      <Container>
        <div className="py-[120px]">
          <Title title="Team Member" text="Creative Team Member" />

          <Flex className="items-center justify-center gap-6 mt-[47px]">
            <Usercard />
            <Usercard />
            <Usercard />
            <Usercard />
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Teams;
