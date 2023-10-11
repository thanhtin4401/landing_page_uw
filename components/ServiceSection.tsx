import Image from "@/node_modules/next/image";
import React from "react";
import service1 from "../assets/images/service1.png";
import service2 from "../assets/images/service2.png";
const ServiceSection = () => {
  return (
    <section
      className="w-full text-[#413F60] px-[1.5rem] lg:px-0"
      id="services"
    >
      <div className="container mx-auto flex justify-center py-[1rem] lg:py-[3.2rem] ">
        <h1 className="font-[700] text-[1.25rem] lg:text-[2.5rem]">
          Our Services
        </h1>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-10 lg:space-y-0 lg:space-x-10">
        <div className="service_left py-[24px] px-[40px] bg-[white] w-full lg:w-2/4  rounded-[1rem] flex justify-center flex-col items-center ">
          <Image src={service2} alt="" />
          <h1 className="lg:text-[2rem] text-[1rem] font-[700] my-[24px]">
            Website Development
          </h1>
          <p className=" text-[0.875rem] lg:text-[1rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam netus
            faucibus nunc, pellentesque in nisl..Lorem ipsum dolor sconsectetur
            adipiscing . Etiam netus faucibus nunc, pellentesque in nisl..
            pellentesque in nisl..Lorem ipsum dolor sconsectetur adipiscing .
            Etiam netus faucibus nunc, pellentesque in nisl..
          </p>
          <div className="w-full flex justify-end mt-[2rem]">
            <button className="text-center ml-2  lg:px-[1.5rem] px-[1rem] lg:py-[12px] py-[8px] text-[12px] lg:text-[20px] bg-primary-color text-[white] bg-primary-color font-[500] rounded-full">
              Learn More
            </button>
          </div>
        </div>
        <div className="service_right py-[24px] px-[40px] bg-[white] w-full lg:w-2/4 text-[#413F60] rounded-[1rem] flex justify-center flex-col items-center">
          <Image src={service1} alt="" />
          <h1 className="lg:text-[2rem] text-[1rem] font-[700] my-[24px]">
            Website Development
          </h1>
          <p className="text-[0.875rem] lg:text-[1rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam netus
            faucibus nunc, pellentesque in nisl..Lorem ipsum dolor sconsectetur
            adipiscing . Etiam netus faucibus nunc, pellentesque in nisl..
            pellentesque in nisl..Lorem ipsum dolor sconsectetur adipiscing .
            Etiam netus faucibus nunc, pellentesque in nisl..
          </p>
          <div className="w-full flex justify-end mt-[2rem]">
            <button className="text-center ml-2  lg:px-[1.5rem] px-[1rem] lg:py-[12px] py-[8px] text-[12px] lg:text-[20px] bg-primary-color text-[white] bg-primary-color font-[500] rounded-full">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
