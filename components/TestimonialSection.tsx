"use client";
import Image from "@/node_modules/next/image";
import React, { useState } from "react";
import message1 from "../assets/images/message1.png";
import message2 from "../assets/images/message2.png";
import client1 from "../assets/images/testimonio1.png";
import client2 from "../assets/images/testimonio2.png";
import client3 from "../assets/images/testimonio3.png";
import client4 from "../assets/images/testimonio4.png";
import client5 from "../assets/images/testimonio5.png";
import client6 from "../assets/images/testimonio6.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
const TestimonialSection = () => {
  const settings = {
    infinite: true,
    centerPadding: "60px",
    // autoplay: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    rows: 1,
    centerMode: true,

    // initialSlide: 1, // Phần tử active ban đầu
  };

  return (
    <TestimonialSectionCSS className="w-full pt-[3.25rem] mt-[10px] lg:mt-44">
      <div className="container mx-auto px-[1.5rem] lg:px-0 mb-48">
        <div className="flex justify-center w-full">
          <h1 className="font-[700] text-text-color text-[1.25rem] lg:text-[2.5rem]">
            Let’s hear What they says
          </h1>
        </div>
        <div className=" flex justify-center w-full my-6 lg:my-16">
          <div className="relative w-full lg:max-w-[50%] ">
            <Image
              src={message1}
              className="absolute hidden lg:block -top-[2rem] -right-[4rem]"
              alt=""
            />
            <Image
              src={message2}
              className="absolute hidden lg:block -top-[2rem] -left-[4rem]"
              alt=""
            />

            <Slider {...settings} className="mt-[20px]">
              <div>
                <div className="!w-[50px] dad rounded-full ">
                  <Image
                    src={client1}
                    alt=""
                    className="rounded-full w-full h-full"
                  />
                </div>
              </div>

              <div>
                <div className="!w-[50px] dad rounded-full ">
                  <Image
                    src={client2}
                    alt=""
                    className="rounded-full w-full h-full"
                  />
                </div>
              </div>
              <div>
                <div className="!w-[50px] dad rounded-full ">
                  <Image
                    src={client3}
                    alt=""
                    className="rounded-full w-full h-full"
                  />
                </div>
              </div>
            </Slider>
            <div className="flex w-full justify-center mt-4">
              <div className="flex justify-center flex-col items-center">
                <h1 className="text-[#1E1F4B] text-[24px] font-[700]">
                  Ricky Aprilia
                </h1>
                <p className="text-[#2E3E5C] text-[20px] font-[]">
                  Founder of Varibo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TestimonialSectionCSS>
  );
};
const TestimonialSectionCSS = styled.div`
  .slick-list {
    padding: 0 !important;
  }
  .slide {
    margin-right: 10px; /* Khoảng cách giữa các slide */
  }
  .slick-current {
    transition: all 0.4s;
    .dad {
      transition: all 0.3s;
      width: 100px !important;
      height: 100px !important;
      border: 4px #706fe5 solid;
      border-radius: 50%;
      padding: 4px;
    }
    img {
      transition: all 0.3s;
      height: 100%;
      width: 100% !important;
    }
  }
`;
export default TestimonialSection;
