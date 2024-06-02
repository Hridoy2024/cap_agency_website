import React from "react";
import Container from "../../common/Container";
import Title from "../../common/Title";
import Servicecard from "./Servicecard";

const AllServises = () => {
  return (
    <section className="mt-[120px]">
      <Container>
        <Title title={"Our Services"} text={"Best Quality Services"} />

        <div className="mt-[46px]">
          <Servicecard />
          <Servicecard />
          <Servicecard />
          <Servicecard />
        </div>
      </Container>
    </section>
  );
};

export default AllServises;
