import React from "react";
import Container from "./Container";
import Breadcrums from "./Breadcrums";

const PageBanner = ({ title }) => {
  return (
    <section className="h-[554px] flex items-center justify-center bg-pagebannerbg">
      <Container>
        <Breadcrums title={title} />
      </Container>
    </section>
  );
};

export default PageBanner;
