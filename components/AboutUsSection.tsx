import Image from "@/node_modules/next/image";
import React from "react";
import aboutme from "../assets/images/aboutme.png";
const AboutUsSection = () => {
  return (
    <section className="w-full" id="about_us">
      <div className="container mx-auto text-text-color px-[1.5rem] lg:px-0">
        <div className="container mx-auto flex justify-center lg:py-[3.2rem] py-[1rem]">
          <h1 className="font-[700] text-[1.25rem] lg:text-[2.5rem]">
            About us
          </h1>
        </div>
        <div className="flex justify-between">
          <div className="about_left w-full lg:w-2/4 space-y-6">
            <div className="flex w-full justify-center lg:justify-start">
              <h1 className="font-[700] text-[1.25rem] lg:text-[2.5rem]">
                {" "}
                Why Choose Us?
              </h1>
            </div>
            <Image src={aboutme} alt="" className="w-full lg:hidden block" />
            <p className="text-[0.875rem] lg:text-[1.2rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              netus faucibus nunc, pellentesque in nisl. Eleifend ac pulvinar
              rhoncus euismod habitant. Bibendum sagittis adipiscing facilisi
              lectus. Ac bibendum nibh a urna, vitae.Lorem ipsum dolor s
            </p>
            <p className="text-[0.875rem] lg:text-[1.2rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              netus faucibus nunc, pellentesque in nisl. Eleifend ac pulvinar
              rhoncus euismod habitant. Bibendum sagittis adipiscing facilisi
              lectus. Ac bibendum nibh a urna, vitae.Lorem ipsum dolor s
            </p>
            <div className="w-full flex justify-start mt-[2rem]">
              <button className="text-center lg:px-[1.5rem] px-[1rem] lg:py-[12px] py-[8px] text-[12px] lg:text-[20px] bg-primary-color text-[white] bg-primary-color font-[500] rounded-full">
                Learn more
              </button>
            </div>
          </div>
          <div className="about_right w-2/4 hidden lg:flex justify-end">
            <Image src={aboutme} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
