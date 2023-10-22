import React from "react";

const ChooseService = () => {
  return (
    <section className=" w-full bg-[#F8FAFC] pt-[88px]">
      <div className="font-Poppins mx-auto py-5 px-[1.5rem] lg:px-0 container ">
        <div className="">
          <h1 className="text-[24px] lg:text-[40px] mb-0 lg:mb-[65px] text-text-color  font-[700]">
            Choose Service
          </h1>
          <div className="p-[10px]">
            <div className="bg-white rounded-[10px] flex flex-col px-5 py-5 lg:p-[50px]">
              <div className="lg:px-0 px-5">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center items-start space-y-4 lg:space-y-0 relative">
                  <div className=" h-[1px] hidden lg:block bg-primary-color absolute top-[21px] right-0 translate-y-2/4 z-1 w-[90%] mr-[45px]"></div>
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
                    <span className="text-[1rem] font-[500] text-text-color">
                      Custumer Detail
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
                    <span className="text-[1rem] font-[500] text-text-color">
                      Project Details
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
                    <span className="text-[1rem] font-[500] text-text-color">
                      Attached File
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
                    <span className="text-[1rem] font-[500] text-text-color">
                      Payment Details
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-[30px]">
                <div className="grid grid-cols-2  gap-x-[100px] rounded-[10px] ">
                  <div className="col-span-2 lg:col-span-1">
                    <h3 className="text-[20px] font-medium leading-[36px] text-text-color">
                      Project Name
                    </h3>
                    <input
                      defaultValue={" Please Enter Project Name"}
                      className="text-second-color bg-[#F8FAFC] rounded-[10px] p-[15px] w-full outline-none mt-[10px]"
                    />
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <h3 className="text-[20px] font-medium leading-[36px] text-text-color">
                      Bussiness Name
                    </h3>
                    <input
                      defaultValue={" Please Enter Project Name"}
                      className="text-second-color bg-[#F8FAFC] rounded-[10px] p-[15px] w-full outline-none mt-[10px]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 mt-[20px]">
                  <div>
                    <h3 className="text-[20px] col-span-2  font-medium leading-[36px] text-text-color">
                      Project Name
                    </h3>
                    <input
                      defaultValue={" Please Enter Project Name"}
                      className="text-second-color bg-[#F8FAFC] rounded-[10px] pb-[150px] p-[15px] w-full outline-none mt-[10px]"
                    />
                  </div>
                </div>
              </div>
              <div className="group-buttons flex justify-end mt-[50px]">
                <div className="">
                  <a className="py-[12px] px-[21px] text-primary-color rounded-[28px] border mr-[30px] border-primary-color">
                    Back
                  </a>
                  <a
                    href="/checkout"
                    className="bg-primary-color text-[white] py-[12px] px-[21px] rounded-[28px]"
                  >
                    Next
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseService;
