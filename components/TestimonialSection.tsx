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
import VisibilitySensor from "react-visibility-sensor";
import Slider from "react-slick";
import styled from "styled-components";
const TestimonialSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const onChangeVisibility = (visible: any) => {
    if (visible && !hasAnimated) {
      setHasAnimated(true);
    }
  };
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [nav3, setNav3] = useState();
  const settingsText = {
    autoplay: true,
    asNavFor: nav2,
    speed: 3000,
    arrows: false,
    ref: (slider: any) => setNav1(slider),
  };
  const closeNav = () => {
    const values = window.scrollY;
    if (values >= 1024) {
      return 4;
    } else if (values < 1024) {
      return 2;
    }
  };
  window.addEventListener("scroll", closeNav);

  const settings = {
    infinite: true,
    autoplay: true,
    asNavFor: nav3,
    pauseOnHover: true,
    // speed: 3000,
    slidesToShow: closeNav(),
    arrows: false,
    centerMode: true,
    ref: (slider: any) => setNav2(slider),
  };
  const settingsName = {
    infinite: true,
    asNavFor: nav1,
    pauseOnHover: true,
    speed: 3000,
    arrows: false,
    ref: (slider: any) => setNav3(slider),
  };

  return (
    <section className="" id="testimonial">
      <VisibilitySensor partialVisibility onChange={onChangeVisibility}>
        <TestimonialSectionCSS className="w-full pt-[3.25rem] mt-[10px] lg:mt-44">
          <div
            className={`${
              hasAnimated
                ? "animate__animated  animate__delay-1s animate__fadeInUp "
                : ""
            } container mx-auto px-[1.5rem] lg:px-0 mb-48`}
          >
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
                <Slider {...settingsText}>
                  <p className="opacity-50  w-text-[1rem] font-[400] leading-8  text-[#03014C] text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Risus vel lobortis tincidunt fames quisque mauris at diam.
                    Nullam morbi ipsum turpis amet id posuere torto quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit es se cillum dolore.
                  </p>
                  <p className="opacity-50  w-text-[1rem] font-[400] leading-8  text-[#03014C] text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Risus vel lobortis tincidunt fames quisque mauris at diam.
                    Nullam morbi ipsum turpis amet id posuere torto quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit es se cillum dolore.
                  </p>
                  <p className="opacity-50  w-text-[1rem] font-[400] leading-8  text-[#03014C] text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Risus vel lobortis tincidunt fames quisque mauris at diam.
                    Nullam morbi ipsum turpis amet id posuere torto quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit es se cillum dolore.
                  </p>
                  <p className="opacity-50  w-text-[1rem] font-[400] leading-8  text-[#03014C] text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Risus vel lobortis tincidunt fames quisque mauris at diam.
                    Nullam morbi ipsum turpis amet id posuere torto quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit es se cillum dolore.
                  </p>
                  <p className="opacity-50  w-text-[1rem] font-[400] leading-8  text-[#03014C] text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Risus vel lobortis tincidunt fames quisque mauris at diam.
                    Nullam morbi ipsum turpis amet id posuere torto quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit es se cillum dolore.
                  </p>
                  <p className="opacity-50  w-text-[1rem] font-[400] leading-8  text-[#03014C] text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Risus vel lobortis tincidunt fames quisque mauris at diam.
                    Nullam morbi ipsum turpis amet id posuere torto quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit es se cillum dolore.
                  </p>
                </Slider>

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
                  <div>
                    <div className="!w-[50px] dad rounded-full ">
                      <Image
                        src={client4}
                        alt=""
                        className="rounded-full w-full h-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="!w-[50px] dad rounded-full ">
                      <Image
                        src={client5}
                        alt=""
                        className="rounded-full w-full h-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="!w-[50px] dad rounded-full ">
                      <Image
                        src={client6}
                        alt=""
                        className="rounded-full w-full h-full"
                      />
                    </div>
                  </div>
                </Slider>
                <Slider {...settingsName}>
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
                </Slider>
              </div>
            </div>
          </div>
        </TestimonialSectionCSS>
      </VisibilitySensor>
    </section>
  );
};
const TestimonialSectionCSS = styled.div`
  /* .slick-slide:not(.slick-active) {
    transition: transform 0.3s ease;
  } */
  .slick-list {
    padding: 0 !important;
  }
  .slide {
    margin-right: 10px; /* Khoảng cách giữa các slide */
  }
  .slick-current {
    /* transition: all 1; */

    .dad {
      transition: all 0.4s ease-in-out;
      width: 100px !important;
      height: 100px !;
      border: 4px #706fe5 solid;
      border-radius: 50%;
      padding: 4px;
    }
    img {
      width: 100% !important;
      height: 100%;
      transition: all 0.3s ease-in-out;
    }
  }
`;
export default TestimonialSection;
