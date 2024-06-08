import React, { useState } from "react";
import PageBanner from "../components/common/PageBanner";
import Container from "../components/common/Container";
import Title from "../components/common/Title";
import Comment from "../components/screens/Testimonial/Comment";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialPage = () => {
  const [slide, setSlide] = useState(0);
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    beforeChange: (prev, next) => {
      setSlide(next);
    },
    appendDots: (dots) => (
      <div>
        <ul
          style={{
            position: "absolute",
            top: "40px",
            left: "50%",
            // marginLeft: "10px",
            // marginRight: "10px",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "10px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === slide
            ? {
                width: "40px",
                height: "5px",
                background:
                  "linear-gradient(90deg, #FE651B -0.02%, #FFAA52 100.06%)",
                cursor: "pointer",
                transition: "0.4s",
                borderRadius: "20px",
              }
            : {
                width: "25px",
                height: "5px",
                background:
                  "linear-gradient(90deg, #FE651B -0.02%, #FFAA52 100.06%)",
                cursor: "pointer",
                transition: "0.4s",
                borderRadius: "20px",
              }
        }
      ></div>
    ),

    responsive: [
      {
        breakpoint: 992,
        settings: {
          rows: 2,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          rows: 2,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <main>
      <PageBanner title="Testimonial" />
      <Container>
        <div className="mt-[120px]">
          <Title title="Testimonial" text="What Our Client Say" />

          <div className="mt-[46px] w-full">
            <Slider {...settings}>
              <div className=" w-full block">
                <Comment className=" w-[96%] md:w-[90%] 2xl:w-[95%] mx-auto" />
              </div>
              <div className=" w-full block">
                <Comment className=" w-[96%] md:w-[90%] 2xl:w-[95%] mx-auto" />
              </div>
              <div className=" w-full block">
                <Comment className=" w-[96%] md:w-[90%] 2xl:w-[95%] mx-auto" />
              </div>
            </Slider>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default TestimonialPage;
