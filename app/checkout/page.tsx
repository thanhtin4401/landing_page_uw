import Image from "@/node_modules/next/image";
import React from "react";
import product from "../../assets/images/product.png";
const CheckoutPage = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between pt-[88px] bg-[#F7F8F9]">
      <div className="w-full container mb-[2rem] lg:mb-[10rem]">
        <div className="container mx-auto py-5 px-[1.5rem] lg:px-0">
          <h1 className="text-[2.5rem] text-[black] font-[700]">Checkout</h1>
          <div className="mt-[2.1875rem] py-[1.25rem] px-[2rem] bg-white rounded-lg">
            <h2 className="text-[1.5rem] text-[black] font-[500]">
              Project Details
            </h2>
            <div className="flex lg:flex-row flex-col space-y-10 lg:space-y-0 lg:space-x-10">
              <div className="w-full lg:w-2/4 rounded-xl overflow-hidden h-full">
                <Image src={product} alt="" />
                <div className="bg-gray-300 px-[1rem] py-[0.5rem]">
                  <h1 className="text-dark-blue-300 text-[20px] font-[500]">
                    App Development
                  </h1>
                  <div className="w-full flex items-center space-x-10">
                    <p className="text-second-color text-[8px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Eros, mattis cursus luctus accumsan cras. Orci at dolor
                      tempor, pulvinar et.
                    </p>
                    <div className="flex space-x-4 items-center lg:hidden">
                      <div className="w-[7px] h-[7px] bg-orange-300 rounded-full"></div>
                      <span className="text-orange-300">spaceing</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-2/4">
                <h2 className="text-[black] text-[24px] font-[500] mb-4">
                  App Development
                </h2>
                <p className="text-second-color">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros,
                  mattis cursus luctus accumsan cras. Orci at dolor tempor,
                  pulvinar et.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Eros, mattis cursus luctus accu.
                </p>
                <div className="flex justify-between mt-4">
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="text-[20px] text-[black] font-[500]">
                      Amount
                    </h1>
                    <h2 className="font-[600] text-primary-color">$500</h2>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="text-[20px] text-[black] font-[500]">
                      Screens
                    </h1>
                    <h2 className="text-[20px] text-[black] font-[600]">12</h2>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-[1.5rem] my-[2rem] font-[600] text-[black]">
              Details
            </h2>
            <div className="flex lg:flex-row flex-col justify-between space-y-10 lg:space-y-0 lg:space-x-10">
              <div className="w-full lg:w-2/4">
                <div className="w-full mb-5">
                  <h3 className="text-[1rem] lg:text-[1.25rem] text-text-color mb-[11px]">
                    First Name
                  </h3>
                  <input
                    style={{}}
                    type="text"
                    id="fullname"
                    name="fullname"
                    className="bg-black-color-300  p-[0.9375rem] w-full outline-none rounded-lg"
                    placeholder="Iftikhar Ahmad "
                  />
                </div>
                <div>
                  <h3 className="text-[1rem] lg:text-[1.25rem] text-text-color mb-[11px]">
                    Address
                  </h3>
                  <input
                    style={{}}
                    type="text"
                    id="fullname"
                    name="fullname"
                    className="bg-black-color-300  p-[0.9375rem] w-full outline-none rounded-lg"
                    placeholder="Baig market Daniyore gilgit, pakistan"
                  />
                </div>
              </div>
              <div className="w-full lg:w-2/4">
                <div className="w-full mb-5">
                  <h3 className="text-[1rem] lg:text-[1.25rem] text-text-color mb-[11px]">
                    Last Name
                  </h3>
                  <input
                    style={{}}
                    type="text"
                    id="fullname"
                    name="fullname"
                    className="bg-black-color-300  p-[0.9375rem] w-full outline-none rounded-lg"
                    placeholder="Baig"
                  />
                </div>
                <div>
                  <h3 className="text-[1rem] lg:text-[1.25rem] text-text-color mb-[11px]">
                    Email
                  </h3>
                  <input
                    style={{}}
                    type="text"
                    id="fullname"
                    name="fullname"
                    className="bg-black-color-300  p-[0.9375rem] w-full outline-none rounded-lg"
                    placeholder="iftikharab133@gmail.com"
                  />
                </div>
              </div>
            </div>
            <div className="flex mt-5 space-x-10">
              <div className="w-full lg:w-2/4">
                <h2 className="text-[1.5rem] text-[black] font-[600]">
                  Paymennt
                </h2>
                <div className="flex items-center mt-4 space-x-4">
                  <div className="bg-[#F7F7F9] rounded-full ">
                    <div className="w-[24px] h-[24px] bg-primary-color rounded-full m-1"></div>
                  </div>
                  <h2 className="text-[black]">Payment</h2>
                </div>
              </div>
              <div className="w-2/4">
                <h2 className="text-[1.5rem] text-[black] mb-4 font-[600]">
                  Project Price
                </h2>
                <div className="bg-primary-color rounded-xl  py-2 px-4 inline ">
                  <span className="font-[700]">$500</span>
                </div>
              </div>
            </div>
            <div className="flex justify-end w-full mt-[1.5rem]">
              <div className="lg:space-x-8 space-x-4 flex animate__animated animate__fadeInUp">
                <button className="text-center lg:ml-2  lg:px-[1.5rem] px-[1rem] lg:py-[12px] py-[8px] text-[12px] lg:text-[20px]  border border-primary-color text-primary-color font-[500] rounded-full hover:bg-primary-color transition-all duration-500  hover:!text-white ">
                  Cancel
                </button>
                <button className="text-center lg:ml-2  lg:px-[1.5rem] px-[1rem] lg:py-[12px] py-[8px] text-[12px] lg:text-[20px]  text-[white] bg-primary-color  font-[500] rounded-full hover:bg-primary-color transition-all duration-500  hover:!text-white ">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
