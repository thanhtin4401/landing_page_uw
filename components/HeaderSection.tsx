import Image from "@/node_modules/next/image";
import React from "react";
import background from "../assets/images/backgroundheader.png";
import headerelemnent from "../assets/images/headerelement.png";
import headerperson from "../assets/images/portrait_smiling_handsome_man_eyeglasses.png";
const HeaderSection = () => {
  return (
    <section
      style={{
        // use the src property of the image object
        backgroundImage: `url(${background.src})`,
        // other styles
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className={`bg-cover bg-no-repeat bg-center w-full  overflow-hidden bg-[white]`}
      id="home"
    >
      <div className="container pt-12 lg:pt-32 mx-auto flex pl-[1.5rem] lg:pl-0">
        <div className="header_left w-3/5 pb-[1rem]">
          <h1 className="text-text-color text-[1.5rem] lg:text-[3rem] font-[700]">
            We Are top-notch{" "}
            <span className="text-primary-color">Development Agency </span>
          </h1>
          <p className="text-text-color text-[0.625rem] lg:text-[1.25rem] my-[2rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam netus
            faucibus nunc, pellentesque in nisl. Eleifend ac pulvinar rhoncus
            euismod habitant. Bibendum sagittis adipiscing facilisi lectus. Ac
            bibendum nibh a urna.
          </p>
          <div className="lg:space-x-8 space-x-4 flex ">
            <button className="text-center lg:ml-2  lg:px-[1.5rem] px-[1rem] lg:py-[12px] py-[8px] text-[12px] lg:text-[20px]  border border-primary-color text-primary-color font-[500] rounded-full">
              Learn more
            </button>
            <button className="text-center ml-2  lg:px-[1.5rem] px-[1rem] lg:py-[12px] py-[8px] text-[12px] lg:text-[20px] bg-primary-color text-[white] bg-primary-color font-[500] rounded-full">
              Contact Us
            </button>
          </div>
        </div>
        <div className="header_right relative w-2/5 over-hidden">
          <Image
            className="h-full w-full object-container"
            src={headerperson}
            alt=""
          />
          <Image
            src={headerelemnent}
            className="absolute -top-16 hidden lg:block right-0"
            alt=""
          />
          <Image
            src={headerelemnent}
            className="absolute -top-16 hidden lg:block left-0"
            alt=""
          />
        </div>
      </div>
      <div className="w-full flex justify-center items-center py-8 bg-[#F7F8F9]">
        <span className="text-[0.75rem] lg:text-[1.4rem] text-primary-color font-[500]">
          Trusted by greatest companies
        </span>
      </div>
    </section>
  );
};

export default HeaderSection;
