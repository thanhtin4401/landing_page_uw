"use client";
import Image from "@/node_modules/next/image";
import React, { useState } from "react";
import product1 from "../assets/images/product1.png";
import product2 from "../assets/images/product2.png";
import product3 from "../assets/images/product3.png";
import product4 from "../assets/images/product4.png";
import product5 from "../assets/images/product5.png";
import VisibilitySensor from "react-visibility-sensor";
const ProductSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const onChangeVisibility = (visible: any) => {
    if (visible && !hasAnimated) {
      setHasAnimated(true);
    }
  };
  return (
    <section className="w-full" id="projects">
      <VisibilitySensor
        partialVisibility
        onChange={onChangeVisibility}
        className="w-full"
        id="projects"
      >
        <div
          className={`container mx-auto text-text-color py-[1rem] lg:py-[3.975rem] px-[1.5rem] lg:px-0    `}
        >
          <div
            className={`animate__animated animate__delay-1s mb-[1rem] lg:mb-[3.75rem] ${
              hasAnimated ? "animate__fadeInLeft my-element" : ""
            }`}
          >
            <h1 className="hidden lg:block font-[700] text-[2.5rem] mb-[1rem]">
              We create world-class digital products
            </h1>
            <p className="text-[0.75rem] lg:text-[1.25rem] font-[400. ]">
              By information about Development the world to the best
              instructors, heatc helping By information
            </p>
          </div>
          <div className="w-full flex lg:flex-row flex-col space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="w-full lg:w-2/4">
              <div
                className={`${
                  hasAnimated ? "animate__fadeInLeft my-element" : ""
                } lg:col-span-2 col-span-5 lg:row-span-2 animate__animated animate__delay-2s`}
              >
                <Image src={product1} className="w-full" alt="" />
                <div className="space-y-2">
                  <p className="font-[400] text-[0.8rem]">
                    App Design - June 22, 2022
                  </p>
                  <h1 className="font-[700] text-[1rem] lg:text-[1.5rem]">
                    App Development
                  </h1>
                  <p className="font-[400] text-[0.75rem] lg:text-[1rem]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etianetus faucibus nunc, pellentesque in nisl. Eleifend{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/4">
              <div className="grid grid-cols-2 gap-8 grid-rows-2">
                <div
                  className={`${
                    hasAnimated ? "animate__fadeInRight my-element" : ""
                  } flex flex-col animate__animated animate__delay-1s h-full justify-between space-y-2 lg:col-span-1 col-span-5`}
                >
                  <Image className="w-full" src={product2} alt="" />
                  <div className="space-y-1">
                    <p className="font-[400] text-[0.8rem]">
                      App Design - June 22, 2022
                    </p>
                    <h1 className="font-[700] text-[1.2rem]">
                      ReCreate channel website landng page
                    </h1>
                  </div>
                </div>
                <div
                  className={`${
                    hasAnimated ? "animate__fadeInRight my-element" : ""
                  } flex flex-col animate__animated animate__delay-1s h-full justify-between space-y-2 lg:col-span-1 col-span-5`}
                >
                  <Image className="w-full" src={product3} alt="" />
                  <div className="space-y-1">
                    <p className="font-[400] text-[0.8rem]">
                      App Design - June 22, 2022
                    </p>
                    <h1 className="font-[700] text-[1.2rem]">
                      ReCreate channel website landng page
                    </h1>
                  </div>
                </div>
                <div
                  className={`${
                    hasAnimated ? "animate__fadeInRight my-element" : ""
                  } flex flex-col animate__animated animate__delay-1s h-full justify-between space-y-2 lg:col-span-1 col-span-5`}
                >
                  <Image className="w-full" src={product4} alt="" />
                  <div className="space-y-1">
                    <p className="font-[400] text-[0.8rem]">
                      App Design - June 22, 2022
                    </p>
                    <h1 className="font-[700] text-[1.2rem]">
                      ReCreate channel website landng page
                    </h1>
                  </div>
                </div>
                <div
                  className={`${
                    hasAnimated ? "animate__fadeInRight my-element" : ""
                  } flex flex-col animate__animated animate__delay-1s h-full justify-between space-y-2 lg:col-span-1 col-span-5`}
                >
                  <Image className="w-full" src={product5} alt="" />
                  <div className="space-y-1">
                    <p className="font-[400] text-[0.8rem]">
                      App Design - June 22, 2022
                    </p>
                    <h1 className="font-[700] text-[1.2rem]">
                      ReCreate channel website landng page
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full"></div>
        </div>
      </VisibilitySensor>
    </section>
  );
};

export default ProductSection;
