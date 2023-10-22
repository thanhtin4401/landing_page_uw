import Image from "@/node_modules/next/image";
import React from "react";
import product2 from "../../assets/images/Rectangle.png";
import user from "../../assets/images/unsplash_jFAG_ixCrsM.png";
const page = () => {
  return (
    <section className="flex flex-col items-center justify-between pt-[88px] bg-[#F7F8F9]">
      <div className="container mx-auto py-5 px-[1.5rem] lg:px-0">
        <div className="hidden">
          <h1 className="text-[40px] text-text-color font-bold mb-[30px]">
            Project Detail
          </h1>
          <div className="rounded-[20px] shadow-lg">
            <div className="grid grid-cols-2 mt-[10px] gap-[60px]">
              <div className=" bg-white col-span-2 overflow-hidden lg:col-span-1 border border-gray-200 rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                  <Image className="rounded-t-lg" src={product2} alt="" />
                </div>
                <div className="card w-full rounded-[10px]  p-[20px]  bg-[#F7F7F9]">
                  <h3 className="text-[20px] flex justify-between  text-[#212121] font-medium">
                    App Development
                  </h3>
                  <p className="text-[15px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Eros, mattis cursus luctus accumsan cras. Orci at dolor
                    tempor, pulvinar et.
                  </p>
                  <div className="flex flex-col mt-[30px] space-y-4 ">
                    <div>
                      <h1 className="text-[24px] font-bold mb-[10px] text-[#0C273C]">
                        App Development using Django
                      </h1>
                      <p className="text-[#2E3E5C] text-[18px] ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Eros, mattis cursus luctus accumsan cras. Orci at dolor
                        tempor, pulvinar et.Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                    <div>
                      <h1 className="text-[24px] font-bold  mb-[10px] text-[#0C273C]">
                        Project Status
                      </h1>
                      <div className="flex">
                        <p className="bg-[#F03738] rounded-tl-[10px] rounded-bl-[10px] w-[40%] h-[50px] flex items-center justify-center text-white text-[24px] font-bold">
                          40%
                        </p>
                        <div className="bg-[#f0f0f0] rounded-tr-[10px] rounded-br-[10px] w-[60%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <h1 className="text-[20px] text-[#0C273C] font-medium my-[30px]">
                Milestone Step by Step
              </h1>
              <div>
                <div className="flex items-center">
                  <div className="flex items-center relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42"
                      height="42"
                      viewBox="0 0 42 42"
                      fill="none"
                    >
                      <circle
                        cx="21"
                        cy="21"
                        r="20.5"
                        fill="#6D6CE3"
                        stroke="#6D6CE3"
                      />
                      <path
                        d="M11 21L17.6667 28L31 14"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="232"
                      height="2"
                      viewBox="0 0 232 2"
                      fill="none"
                    >
                      <path d="M0 1L232 1.00002" stroke="#6D6CE3" />
                    </svg>
                  </div>
                  <div className="flex items-center relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42"
                      height="42"
                      viewBox="0 0 42 42"
                      fill="none"
                    >
                      <circle
                        cx="21"
                        cy="21"
                        r="20.5"
                        fill="#6D6CE3"
                        stroke="#6D6CE3"
                      />
                      <path
                        d="M11 21L17.6667 28L31 14"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="232"
                      height="2"
                      viewBox="0 0 232 2"
                      fill="none"
                    >
                      <path d="M0 1L232 1.00002" stroke="#6D6CE3" />
                    </svg>
                  </div>
                  <div className="flex items-center relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42"
                      height="42"
                      viewBox="0 0 42 42"
                      fill="none"
                    >
                      <circle cx="21" cy="21" r="21" fill="#EBF0FF" />
                      <path
                        d="M11 21L17.6667 28L31 14"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="232"
                      height="2"
                      viewBox="0 0 232 2"
                      fill="none"
                    >
                      <path d="M0 1L232 1.00002" stroke="#6D6CE3" />
                    </svg>
                  </div>
                  <div className="flex items-center relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42"
                      height="42"
                      viewBox="0 0 42 42"
                      fill="none"
                    >
                      <circle cx="21" cy="21" r="21" fill="#EBF0FF" />
                      <path
                        d="M11 21L17.6667 28L31 14"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="232"
                      height="2"
                      viewBox="0 0 232 2"
                      fill="none"
                    >
                      <path d="M0 1L232 1.00002" stroke="#6D6CE3" />
                    </svg>
                  </div>
                  <div className="flex items-center relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42"
                      height="42"
                      viewBox="0 0 42 42"
                      fill="none"
                    >
                      <circle cx="21" cy="21" r="21" fill="#EBF0FF" />
                      <path
                        d="M11 21L17.6667 28L31 14"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div></div>
                </div>
                <div className="flex ">
                  <p className="text-[#0C273C] font-medium mt-2"> UI UX</p>
                  <p className="ml-[166px] text-[#0C273C] font-medium mt-2">
                    HTML/CSS & Java Script
                  </p>
                  <p className="ml-[166px] text-[#0C273C] font-medium mt-2">
                    Dajango
                  </p>
                  <p className="ml-[215px] text-[#0C273C] font-medium mt-2">
                    React JS
                  </p>
                  <p className="ml-[215px] text-[#0C273C] font-medium mt-2">
                    Native JS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-[40px] font-bold mb-[30px] text-text-color">
            Project Detail
          </h1>
          <div className="pb-5 lg:pb-[50px] lg:p-[50px] rounded-[20px] shadow-lg bg-white">
            <h3 className="text-[24px] text-text-color lg:block hidden">
              Projcect Detail
            </h3>

            <div className="grid grid-cols-2 mt-[10px] gap-4 lg:gap-14">
              <div className=" bg-white col-span-2 overflow-hidden lg:col-span-1 rounded-[20px] lg:shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="h-2/3">
                  <Image
                    className="w-full h-full object-container rounded-t-lg"
                    src={product2}
                    alt=""
                  />
                </div>
                <div className="card w-full rounded-[10px]  p-[20px] bg-white lg:bg-[#F7F7F9] h-1/3">
                  <h3 className="text-[20px] flex justify-between  text-[#212121] font-medium">
                    App Development
                  </h3>
                  <div className="w-full flex items-center space-x-10 mt-2">
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
              <div className="flex flex-col col-span-2 lg:col-span-1 space-y-14 px-5 lg:px-x">
                <div>
                  <h1 className="text-[24px] font-bold mb-[10px] text-[#0C273C]">
                    App Development using Django
                  </h1>
                  <p className="text-[#2E3E5C]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Eros, mattis cursus luctus accumsan cras. Orci at dolor
                    tempor, pulvinar et.
                  </p>
                </div>
                <div>
                  <h1 className="text-[20px]  font-medium mb-[10px] text-[#0C273C]">
                    Project Status
                  </h1>
                  <div className="flex w-full">
                    <p className="bg-[#F03738] rounded-tl-[10px] rounded-bl-[10px] w-[40%] h-[50px] flex items-center justify-center text-white text-[24px] font-bold">
                      40%
                    </p>
                    <div className="bg-[#F8FAFC] rounded-tr-[10px] rounded-br-[10px] w-[60%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:px-0 px-5">
              <h1 className="text-[20px] text-[#0C273C] font-medium my-[30px]">
                Milestone Step by Step
              </h1>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center items-start space-y-4 lg:space-y-0 relative">
                <div className=" h-[1px] hidden lg:block bg-[#6D6CE3] absolute top-[21px] right-0 translate-y-2/4 z-1 w-[94%] mr-[20px]"></div>
                <div className="flex flex-row lg:flex-col justify-center items-center lg:space-y-2 space-y-0 lg:space-x-0 space-x-4 relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                  >
                    <circle
                      cx="21"
                      cy="21"
                      r="20.5"
                      fill="#6D6CE3"
                      stroke="#6D6CE3"
                    />
                    <path
                      d="M11 21L17.6667 28L31 14"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[1rem] font-[500] text-[#0C273C]">
                    UX UI Design
                  </span>
                </div>
                <div className="flex flex-row lg:flex-col justify-center items-center lg:space-y-2 space-y-0 lg:space-x-0 space-x-4 relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                  >
                    <circle
                      cx="21"
                      cy="21"
                      r="20.5"
                      fill="#6D6CE3"
                      stroke="#6D6CE3"
                    />
                    <path
                      d="M11 21L17.6667 28L31 14"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[1rem] font-[500] text-[#0C273C]">
                    HTML/CSS & Java Script
                  </span>
                </div>
                <div className="flex flex-row lg:flex-col justify-center items-center lg:space-y-2 space-y-0 lg:space-x-0 space-x-4 relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                  >
                    <circle cx="21" cy="21" r="21" fill="#EBF0FF" />
                    <path
                      d="M11 21L17.6667 28L31 14"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[1rem] font-[500] text-[#0C273C]">
                    Dajango
                  </span>
                </div>
                <div className="flex flex-row lg:flex-col justify-center items-center lg:space-y-2 space-y-0 lg:space-x-0 space-x-4 relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                  >
                    <circle cx="21" cy="21" r="21" fill="#EBF0FF" />
                    <path
                      d="M11 21L17.6667 28L31 14"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[1rem] font-[500] text-[#0C273C]">
                    React JS
                  </span>
                </div>
                <div className="flex flex-row lg:flex-col justify-center items-center lg:space-y-2 space-y-0 lg:space-x-0 space-x-4 relative z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                  >
                    <circle cx="21" cy="21" r="21" fill="#EBF0FF" />
                    <path
                      d="M11 21L17.6667 28L31 14"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[1rem] font-[500] text-[#0C273C]">
                    Native JS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-[30px] ">
          <h1 className="text-[40px] text-text-color font-bold mb-[30px]">
            Chat With Support Team
          </h1>
          <div>
            <div className="bg-white lg:h-[908px] flex flex-col justify-between  rounded-[10px]">
              <div>
                <div className="p-[30px]">
                  <div className="flex justify-between  items-center">
                    <div className="flex space-x-5">
                      <div className="flex -space-x-2">
                        <div className="users w-[48px] h-[48px] ">
                          <Image src={user} alt="" />
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                        >
                          <circle cx="7.5" cy="7.5" r="7.5" fill="#4BDE97" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-[16px] text-[#394149] ">
                          Designer
                        </p>
                        <span>online</span>
                      </div>
                    </div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 10C11.6044 10 11.2178 10.1173 10.8889 10.3371C10.56 10.5568 10.3036 10.8692 10.1522 11.2346C10.0009 11.6001 9.96126 12.0022 10.0384 12.3902C10.1156 12.7781 10.3061 13.1345 10.5858 13.4142C10.8655 13.6939 11.2219 13.8844 11.6098 13.9616C11.9978 14.0387 12.3999 13.9991 12.7654 13.8478C13.1308 13.6964 13.4432 13.44 13.6629 13.1111C13.8827 12.7822 14 12.3956 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10ZM5 10C4.60444 10 4.21776 10.1173 3.88886 10.3371C3.55996 10.5568 3.30362 10.8692 3.15224 11.2346C3.00087 11.6001 2.96126 12.0022 3.03843 12.3902C3.1156 12.7781 3.30608 13.1345 3.58579 13.4142C3.86549 13.6939 4.22186 13.8844 4.60982 13.9616C4.99778 14.0387 5.39992 13.9991 5.76537 13.8478C6.13082 13.6964 6.44318 13.44 6.66294 13.1111C6.8827 12.7822 7 12.3956 7 12C7 11.4696 6.78929 10.9609 6.41421 10.5858C6.03914 10.2107 5.53043 10 5 10ZM19 10C18.6044 10 18.2178 10.1173 17.8889 10.3371C17.56 10.5568 17.3036 10.8692 17.1522 11.2346C17.0009 11.6001 16.9613 12.0022 17.0384 12.3902C17.1156 12.7781 17.3061 13.1345 17.5858 13.4142C17.8655 13.6939 18.2219 13.8844 18.6098 13.9616C18.9978 14.0387 19.3999 13.9991 19.7654 13.8478C20.1308 13.6964 20.4432 13.44 20.6629 13.1111C20.8827 12.7822 21 12.3956 21 12C21 11.4696 20.7893 10.9609 20.4142 10.5858C20.0391 10.2107 19.5304 10 19 10Z"
                        fill="#394149"
                        fillOpacity="0.6"
                      />
                    </svg>
                  </div>
                </div>
                <hr className="bg-[#F0F0F0] " />
                <div className="p-[30px] ">
                  <div className="flex space-x-7">
                    <div className="users w-[48px] h-[48px] space-x-2 flex">
                      <Image src={user} alt="" />
                    </div>
                    <div className="flex flex-col">
                      <p className="bg-[#F8F9FA] h-[48px] rounded-[10px] flex items-center justify-between p-[20px] text-[#394149]">
                        <span className="text-[#394149] font-normal leading-[155.6%]">
                          Hi John - no problem, I will look at it.
                        </span>
                      </p>
                      <div className="flex space-x-2 px-[20px] py-[10px]">
                        <span className="text-[#39414999] font-400">
                          june 29, 2022, 3:42 PM
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-3 mt-[30px]">
                    <div className="users w-[48px] h-[48px] space-x-2 flex">
                      <Image src={user} alt="" />
                    </div>
                    <div className="flex flex-col">
                      <p className="bg-[#F8F9FA] h-[48px] rounded-[10px] flex items-center justify-between pl-[30px] pr-[5px] py-[10px] text-[#394149]">
                        <span className="text-[#394149] font-normal leading-[155.6%]">
                          Hi John - no problem, I will look at it.
                        </span>
                      </p>
                      <div className="flex space-x-2 pl-[30px] pr-[5px] py-[10px]">
                        <span className="text-[#39414999] font-400">
                          june 29, 2022, 3:42 PM
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <p className="bg-[#F8F9FA] h-[48px] rounded-[10px] flex items-center justify-between pl-[30px] pr-[5px] py-[10px] text-[#394149]">
                      <span className="text-[#394149] font-normal leading-[155.6%]">
                        Sure. Makes sense.
                      </span>
                    </p>
                  </div>
                  <div className="lg:flex hidden space-x-3 mt-[30px]">
                    <div className="users w-[48px] h-[48px] space-x-2 flex">
                      <Image src={user} alt="" />
                    </div>
                    <div className="flex flex-col">
                      <p className="bg-[#F8F9FA]  rounded-[10px] flex items-center justify-between pb-[40px] px-[15px] pt-[10px]  text-[#394149]">
                        <span className="text-[#394149] w-[406px] font-normal leading-[155.6%]">
                          Lorem ipsum, or lipsum as it is sometimes known, is
                          dummy text used in laying out print, graphic or web
                          designs. The passage is attributed to an unknown
                          typesetter in the 15th century.
                        </span>
                      </p>
                      <div className="flex space-x-2 pl-[30px] pr-[5px] py-[10px]">
                        <span className="text-[#39414999] font-400">
                          june 29, 2022, 3:42 PM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-[30px]">
                <div className="flex my-[20px] justify-between">
                  <span className="text-[#39414999]">Type Something...</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M1.07963 0.0768483L24.048 11.3942C24.1732 11.456 24.2787 11.5515 24.3524 11.6701C24.4262 11.7886 24.4653 11.9255 24.4653 12.0651C24.4653 12.2047 24.4262 12.3416 24.3524 12.4601C24.2787 12.5787 24.1732 12.6743 24.048 12.736L1.07813 24.0534C0.949447 24.1166 0.805307 24.1415 0.662875 24.1251C0.520443 24.1087 0.385724 24.0517 0.27476 23.9609C0.163797 23.8702 0.0812664 23.7494 0.0369984 23.613C-0.00726952 23.4767 -0.0114094 23.3304 0.0250716 23.1918L2.30022 14.5983C2.3371 14.4592 2.4133 14.3338 2.51969 14.2369C2.62608 14.1401 2.75814 14.076 2.90004 14.0523L13.1928 12.3366C13.2541 12.3264 13.312 12.3012 13.3611 12.263C13.4102 12.2249 13.449 12.1751 13.474 12.1182L13.5009 12.0285C13.5149 11.9453 13.5003 11.8598 13.4596 11.786C13.4189 11.7121 13.3544 11.6542 13.2766 11.6216L13.1928 11.5977L2.8432 9.87298C2.70157 9.84904 2.56983 9.78483 2.46373 9.68801C2.35762 9.59119 2.28164 9.46586 2.24487 9.32701L0.0250716 0.939937C-0.0117888 0.801184 -0.00793539 0.654754 0.0361721 0.518132C0.0802796 0.38151 0.162777 0.260469 0.273814 0.169463C0.38485 0.0784577 0.519733 0.0213327 0.662356 0.00490994C0.804979 -0.0115128 0.949316 0.0134608 1.07813 0.0768483H1.07963Z"
                      fill="#6D6CE3"
                    />
                  </svg>
                </div>
                <hr className="bg-[#E5E5E5] " />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[30px] mb-[3rem] lg:mb-[16rem]">
          <h1 className=" text-[24px] text-text-color lg:text-[40px] font-bold mb-[30px]">
            Share Files
          </h1>
          <div className="cards grid gap-4 lg:gap-14 lg:grid-cols-4 grid-cols-2">
            <div className="items">
              <div className="bg-[#fff] h-[150px] space-y-3 rounded-[10px] shadow-md flex flex-col p-[30px]  items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="62"
                  height="34"
                  viewBox="0 0 62 34"
                  fill="none"
                >
                  <path
                    d="M17.05 34C12.5281 34 8.19132 32.2089 4.99383 29.0208C1.79633 25.8327 0 21.5087 0 17C0 12.4913 1.79633 8.1673 4.99383 4.97918C8.19132 1.79107 12.5281 0 17.05 0H49.6C52.8887 0 56.0427 1.30259 58.3681 3.62122C60.6936 5.93986 62 9.0846 62 12.3636C62 15.6427 60.6936 18.7874 58.3681 21.106C56.0427 23.4247 52.8887 24.7273 49.6 24.7273H23.25C21.1946 24.7273 19.2233 23.9132 17.7699 22.464C16.3165 21.0149 15.5 19.0494 15.5 17C15.5 14.9506 16.3165 12.9851 17.7699 11.536C19.2233 10.0868 21.1946 9.27273 23.25 9.27273H46.5V13.9091H23.25C22.4278 13.9091 21.6393 14.2347 21.058 14.8144C20.4766 15.3941 20.15 16.1802 20.15 17C20.15 17.8198 20.4766 18.6059 21.058 19.1856C21.6393 19.7653 22.4278 20.0909 23.25 20.0909H49.6C50.6177 20.0909 51.6255 19.891 52.5658 19.5027C53.5061 19.1144 54.3604 18.5452 55.0801 17.8276C55.7997 17.1101 56.3706 16.2583 56.7601 15.3207C57.1495 14.3832 57.35 13.3784 57.35 12.3636C57.35 11.3489 57.1495 10.3441 56.7601 9.40654C56.3706 8.46902 55.7997 7.61717 55.0801 6.89963C54.3604 6.18209 53.5061 5.6129 52.5658 5.22457C51.6255 4.83623 50.6177 4.63636 49.6 4.63636H17.05C13.7613 4.63636 10.6073 5.93896 8.28187 8.25759C5.95642 10.5762 4.65 13.721 4.65 17C4.65 20.279 5.95642 23.4238 8.28187 25.7424C10.6073 28.061 13.7613 29.3636 17.05 29.3636H46.5V34H17.05Z"
                    fill="#6D6CE3"
                  />
                </svg>
                <p className="text-text-color text-[18px] lg:text-[24px] font-medium leading-[180%] ">
                  Share File
                </p>
              </div>
            </div>
            <div className="items">
              <div className="bg-[#fff] h-[150px] space-y-3 rounded-[10px] shadow-md flex flex-col p-[30px]  items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="62"
                  height="34"
                  viewBox="0 0 62 34"
                  fill="none"
                >
                  <path
                    d="M17.05 34C12.5281 34 8.19132 32.2089 4.99383 29.0208C1.79633 25.8327 0 21.5087 0 17C0 12.4913 1.79633 8.1673 4.99383 4.97918C8.19132 1.79107 12.5281 0 17.05 0H49.6C52.8887 0 56.0427 1.30259 58.3681 3.62122C60.6936 5.93986 62 9.0846 62 12.3636C62 15.6427 60.6936 18.7874 58.3681 21.106C56.0427 23.4247 52.8887 24.7273 49.6 24.7273H23.25C21.1946 24.7273 19.2233 23.9132 17.7699 22.464C16.3165 21.0149 15.5 19.0494 15.5 17C15.5 14.9506 16.3165 12.9851 17.7699 11.536C19.2233 10.0868 21.1946 9.27273 23.25 9.27273H46.5V13.9091H23.25C22.4278 13.9091 21.6393 14.2347 21.058 14.8144C20.4766 15.3941 20.15 16.1802 20.15 17C20.15 17.8198 20.4766 18.6059 21.058 19.1856C21.6393 19.7653 22.4278 20.0909 23.25 20.0909H49.6C50.6177 20.0909 51.6255 19.891 52.5658 19.5027C53.5061 19.1144 54.3604 18.5452 55.0801 17.8276C55.7997 17.1101 56.3706 16.2583 56.7601 15.3207C57.1495 14.3832 57.35 13.3784 57.35 12.3636C57.35 11.3489 57.1495 10.3441 56.7601 9.40654C56.3706 8.46902 55.7997 7.61717 55.0801 6.89963C54.3604 6.18209 53.5061 5.6129 52.5658 5.22457C51.6255 4.83623 50.6177 4.63636 49.6 4.63636H17.05C13.7613 4.63636 10.6073 5.93896 8.28187 8.25759C5.95642 10.5762 4.65 13.721 4.65 17C4.65 20.279 5.95642 23.4238 8.28187 25.7424C10.6073 28.061 13.7613 29.3636 17.05 29.3636H46.5V34H17.05Z"
                    fill="#6D6CE3"
                  />
                </svg>
                <p className="text-text-color text-[18px] lg:text-[24px] font-medium leading-[180%] ">
                  Share File
                </p>
              </div>
            </div>
            <div className="items">
              <div className="bg-[#fff] h-[150px] space-y-3 rounded-[10px] shadow-md flex flex-col p-[30px]  items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="62"
                  height="34"
                  viewBox="0 0 62 34"
                  fill="none"
                >
                  <path
                    d="M17.05 34C12.5281 34 8.19132 32.2089 4.99383 29.0208C1.79633 25.8327 0 21.5087 0 17C0 12.4913 1.79633 8.1673 4.99383 4.97918C8.19132 1.79107 12.5281 0 17.05 0H49.6C52.8887 0 56.0427 1.30259 58.3681 3.62122C60.6936 5.93986 62 9.0846 62 12.3636C62 15.6427 60.6936 18.7874 58.3681 21.106C56.0427 23.4247 52.8887 24.7273 49.6 24.7273H23.25C21.1946 24.7273 19.2233 23.9132 17.7699 22.464C16.3165 21.0149 15.5 19.0494 15.5 17C15.5 14.9506 16.3165 12.9851 17.7699 11.536C19.2233 10.0868 21.1946 9.27273 23.25 9.27273H46.5V13.9091H23.25C22.4278 13.9091 21.6393 14.2347 21.058 14.8144C20.4766 15.3941 20.15 16.1802 20.15 17C20.15 17.8198 20.4766 18.6059 21.058 19.1856C21.6393 19.7653 22.4278 20.0909 23.25 20.0909H49.6C50.6177 20.0909 51.6255 19.891 52.5658 19.5027C53.5061 19.1144 54.3604 18.5452 55.0801 17.8276C55.7997 17.1101 56.3706 16.2583 56.7601 15.3207C57.1495 14.3832 57.35 13.3784 57.35 12.3636C57.35 11.3489 57.1495 10.3441 56.7601 9.40654C56.3706 8.46902 55.7997 7.61717 55.0801 6.89963C54.3604 6.18209 53.5061 5.6129 52.5658 5.22457C51.6255 4.83623 50.6177 4.63636 49.6 4.63636H17.05C13.7613 4.63636 10.6073 5.93896 8.28187 8.25759C5.95642 10.5762 4.65 13.721 4.65 17C4.65 20.279 5.95642 23.4238 8.28187 25.7424C10.6073 28.061 13.7613 29.3636 17.05 29.3636H46.5V34H17.05Z"
                    fill="#6D6CE3"
                  />
                </svg>
                <p className="text-text-color text-[18px] lg:text-[24px] font-medium leading-[180%] ">
                  Share File
                </p>
              </div>
            </div>
            <div className="items">
              <div className="bg-[#fff] h-[150px] space-y-3 rounded-[10px] shadow-md flex flex-col p-[30px]  items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="62"
                  height="34"
                  viewBox="0 0 62 34"
                  fill="none"
                >
                  <path
                    d="M17.05 34C12.5281 34 8.19132 32.2089 4.99383 29.0208C1.79633 25.8327 0 21.5087 0 17C0 12.4913 1.79633 8.1673 4.99383 4.97918C8.19132 1.79107 12.5281 0 17.05 0H49.6C52.8887 0 56.0427 1.30259 58.3681 3.62122C60.6936 5.93986 62 9.0846 62 12.3636C62 15.6427 60.6936 18.7874 58.3681 21.106C56.0427 23.4247 52.8887 24.7273 49.6 24.7273H23.25C21.1946 24.7273 19.2233 23.9132 17.7699 22.464C16.3165 21.0149 15.5 19.0494 15.5 17C15.5 14.9506 16.3165 12.9851 17.7699 11.536C19.2233 10.0868 21.1946 9.27273 23.25 9.27273H46.5V13.9091H23.25C22.4278 13.9091 21.6393 14.2347 21.058 14.8144C20.4766 15.3941 20.15 16.1802 20.15 17C20.15 17.8198 20.4766 18.6059 21.058 19.1856C21.6393 19.7653 22.4278 20.0909 23.25 20.0909H49.6C50.6177 20.0909 51.6255 19.891 52.5658 19.5027C53.5061 19.1144 54.3604 18.5452 55.0801 17.8276C55.7997 17.1101 56.3706 16.2583 56.7601 15.3207C57.1495 14.3832 57.35 13.3784 57.35 12.3636C57.35 11.3489 57.1495 10.3441 56.7601 9.40654C56.3706 8.46902 55.7997 7.61717 55.0801 6.89963C54.3604 6.18209 53.5061 5.6129 52.5658 5.22457C51.6255 4.83623 50.6177 4.63636 49.6 4.63636H17.05C13.7613 4.63636 10.6073 5.93896 8.28187 8.25759C5.95642 10.5762 4.65 13.721 4.65 17C4.65 20.279 5.95642 23.4238 8.28187 25.7424C10.6073 28.061 13.7613 29.3636 17.05 29.3636H46.5V34H17.05Z"
                    fill="#6D6CE3"
                  />
                </svg>
                <p className="text-text-color text-[18px] lg:text-[24px] font-medium leading-[180%] ">
                  Share File
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
