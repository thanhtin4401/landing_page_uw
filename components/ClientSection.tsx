import Image from "@/node_modules/next/image";
import React from "react";
import client from "../assets/images/Logo.png";
import client1 from "../assets/images/Logo_1.png";
import client2 from "../assets/images/Logo_2.png";
import client3 from "../assets/images/Logo_3.png";
import client4 from "../assets/images/Logo_4.png";
const ClientSection = () => {
  return (
    <section className="w-full bg-[white]" id="clients">
      <div className="container mx-auto py-[2.5rem] lg:py-[7.5rem] flex justify-center w-full space-x-4 lg:space-x-10 px-[1.5rem] lg:px-0">
        <Image className="object-contain lg:w-32 w-12" src={client} alt="" />
        <Image className="object-contain lg:w-32 w-12" src={client1} alt="" />
        <Image className="object-contain lg:w-32 w-12" src={client2} alt="" />
        <Image className="object-contain lg:w-32 w-12" src={client3} alt="" />
        <Image className="object-contain lg:w-32 w-12" src={client4} alt="" />
      </div>
    </section>
  );
};

export default ClientSection;