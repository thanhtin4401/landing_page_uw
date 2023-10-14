"use client";
import React, { useState } from "react";
import vector1 from "../assets/images/VectorContact1.png";
import vector2 from "../assets/images/VectorContact2.png";
import contactelement from "../assets/images/portrait_joyful_young-man_white_shirt.png";
import Image from "@/node_modules/next/image";
import VisibilitySensor from "react-visibility-sensor";
const ContactSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const onChangeVisibility = (visible: any) => {
    if (visible && !hasAnimated) {
      setHasAnimated(true);
    }
  };
  return (
    <section
      className="w-full text-blue-color-300   bg-white mb-6 lg:mb-52"
      id="contact_us"
    >
      <VisibilitySensor
        partialVisibility
        onChange={onChangeVisibility}
        className="w-full"
      >
        <div className="container mx-auto flex flex-col lg:flex-row pt-9 lg:pt-28 px-[1.5rem] lg:px-0">
          <div className="contact_left w-full order-1 lg:order-0 lg:w-2/5">
            <div
              className={`${
                hasAnimated ? "animate__fadeInLeft animate__delay-1s" : ""
              } w-full relative animate__animated`}
            >
              <Image
                className="absolute top-[2rem] right-[8rem] z-10"
                src={vector1}
                alt=""
              />
              <Image className="absolute top-0 left-0" src={vector2} alt="" />
              <Image className="z-20 relative" src={contactelement} alt="" />
            </div>
          </div>
          <div
            className={`${
              hasAnimated ? "animate__fadeInRight animate__delay-1s" : ""
            } contact_right !overflow-hidden w-full lg:w-3/5 lg:order-1 animate__animated`}
          >
            <div className="w-full">
              <div className="lg:w-full flex justify-center lg:justify-start">
                <div className="mb-[2.5rem]">
                  <p className="">CONTACT US</p>
                  <h1 className="font-[700] text-[1.25rem] lg:text-[2.5rem] text-text-color">
                    Let’s Collaborate Now!
                  </h1>
                </div>
              </div>
              <form className="subscribeInput space-y-4">
                <div className="">
                  <h3 className="text-[1rem] lg:text-[1.25rem] text-text-color mb-[11px]">
                    Full Name
                  </h3>
                  <input
                    style={{}}
                    type="text"
                    id="fullname"
                    name="fullname"
                    className="bg-black-color-300  p-[0.9375rem] w-full outline-none"
                    placeholder="Input Your Name"
                  />
                </div>
                <div className="w-full flex justify-between space-x-4">
                  <div className="w-full">
                    <h3 className="text-[1rem] lg:text-[1.25rem] text-text-color mb-[11px]">
                      Email
                    </h3>
                    <input
                      style={{}}
                      type="text"
                      id="email"
                      name="Email"
                      className="bg-black-color-300 p-[0.9375rem] w-full outline-none"
                      placeholder="Input Your Email"
                    />
                  </div>
                  <div className="w-full">
                    <h3 className="text-[1rem] lg:text-[1.25rem] text-text-color mb-[11px]">
                      Subject
                    </h3>
                    <input
                      style={{}}
                      type="text"
                      id="Subject"
                      name="Subject"
                      className="bg-black-color-300 p-[0.9375rem] w-full outline-none"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="">
                  <h3 className="text-[1rem] lg:text-[1.25rem] text-text-color mb-[11px]">
                    Message
                  </h3>
                  <textarea
                    style={{}}
                    id="email"
                    name="email"
                    className="bg-black-color-300 p-[0.9375rem] lg:h-[8rem] w-full"
                    placeholder="Write Message..."
                  />
                </div>
                <div className="flex w-full justify-end lg:pt-[1rem]">
                  <button className="text-center shadow-lg  ml-2 px-[24px] py-[12px] bg-primary-color text-[white] bg-primary-color font-[500] rounded-full">
                    Contact Us
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </VisibilitySensor>
    </section>
  );
};

export default ContactSection;
