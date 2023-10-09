import Image from "@/node_modules/next/image";
import React from "react";
import product1 from "../assets/images/product1.png";
import product2 from "../assets/images/product2.png";
import product3 from "../assets/images/product3.png";
import product4 from "../assets/images/product4.png";
const ProductSection = () => {
  return (
    <section className="w-full" id="projects">
      <div className="container mx-auto text-text-color py-[3.975rem] px-[1.5rem] lg:px-0">
        <div>
          <h1 className="hidden lg:block font-[700] text-[2.5rem] mb-[1rem]">
            We create world-class digital products
          </h1>
          <p className="text-[0.75rem] lg:text-[1.25rem] font-[400. ]">
            By information about Development the world to the best instructors,
            heatc helping By information
          </p>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-5 gap-4 grid-rows-2">
            <div className="lg:col-span-3 col-span-5 lg:row-span-2">
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
            <div className="flex flex-col h-full justify-between space-y-2 lg:col-span-1 col-span-5">
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
            <div className="flex flex-col h-full justify-between space-y-2 lg:col-span-1 col-span-5">
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
            <div className="flex flex-col h-full justify-between space-y-2 lg:col-span-1 col-span-5">
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
            <div className="flex flex-col h-full justify-between space-y-2 lg:col-span-1 col-span-5">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
