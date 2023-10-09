import Image from "@/node_modules/next/image";
import React from "react";
import message1 from "../assets/images/message1.png";
import message2 from "../assets/images/message2.png";
import client1 from "../assets/images/testimonio1.png";
import client2 from "../assets/images/testimonio2.png";
import client3 from "../assets/images/testimonio3.png";
import client4 from "../assets/images/testimonio4.png";
import client5 from "../assets/images/testimonio5.png";
const TestimonialSection = () => {
  return (
    <section className="w-full pt-[3.25rem] mt-6 lg:mt-44">
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
            <p className="opacity-50 text-[1rem] font-[400] leading-8  text-[#03014C] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel
              lobortis tincidunt fames quisque mauris at diam. Nullam morbi
              ipsum turpis amet id posuere torto quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum
              dolore.
            </p>
            <div className="flex justify-between items-center mt-14">
              <div className="w-[50px]">
                <Image src={client1} alt="" />
              </div>
              <div className="w-[68px]">
                <Image src={client2} alt="" />
              </div>
              <div className="w-[86px] p-[4px] rounded-full border-4 border-[#706FE5]">
                <Image src={client3} className="w-full" alt="" />
              </div>
              <div className="w-[68px]">
                <Image src={client4} alt="" />
              </div>
              <div className="w-[50px]">
                <Image src={client5} alt="" />
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
