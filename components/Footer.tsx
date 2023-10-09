import Image from "@/node_modules/next/image";
import React from "react";
import logo from "../assets/images/logoclient.png";
import footer1 from "../assets/images/footer1.png";
import footer2 from "../assets/images/footer2.png";
const Footer = () => {
  return (
    <section className="w-full bg-[#282C4B] py-7 relative ">
      <Image className="absolute bottom-0" src={footer1} alt="" />
      <Image className="absolute bottom-0 right-0" src={footer2} alt="" />
      <div className="container mx-auto px-[1.5rem] lg:px-0">
        <div className="grid grid-cols-7 gap-4">
          <div className="col-span-7 lg:col-span-1 row-span-1 lg:row-span-3 ">
            <div className="w-full flex flex-row lg:flex-col h-full justify-between items-start ">
              <div className="flex justify-center items-start ">
                <Image src={logo} alt="" />
                <h1 className="text-[1.5rem] text-[white]  font-[600] ml-2">
                  Logo
                </h1>
              </div>
              <ul className="flex space-x-4 px-[]">
                <li className="p-[7px] bg-[white] rounded-[8px]">
                  <a href="" className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1_204)">
                        <path
                          d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                          fill="#6C63FF"
                        />
                        <path
                          d="M16.2692 13.5085H13.9495V22.0068H10.4349V13.5085H8.76343V10.5219H10.4349V8.58918C10.4349 7.2071 11.0915 5.04291 13.9808 5.04291L16.5841 5.0538V7.95283H14.6952C14.3854 7.95283 13.9497 8.10763 13.9497 8.76693V10.5247H16.5762L16.2692 13.5085Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_204">
                          <rect width="26" height="26" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li className="p-[7px] bg-[white] rounded-[8px]">
                  <a href="" className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1_199)">
                        <path
                          d="M21.9947 21.9999V21.9989H22.0002V13.9304C22.0002 9.98327 21.1504 6.94269 16.5359 6.94269C14.3176 6.94269 12.8289 8.16002 12.2212 9.31411H12.157V7.31119H7.78174V21.9989H12.3376V14.7261C12.3376 12.8112 12.7006 10.9595 15.072 10.9595C17.4086 10.9595 17.4434 13.1449 17.4434 14.8489V21.9999H21.9947Z"
                          fill="#6C63FF"
                        />
                        <path
                          d="M0.363037 7.31219H4.92437V21.9999H0.363037V7.31219Z"
                          fill="#6C63FF"
                        />
                        <path
                          d="M2.64183 0C1.18342 0 0 1.18342 0 2.64183C0 4.10025 1.18342 5.30842 2.64183 5.30842C4.10025 5.30842 5.28367 4.10025 5.28367 2.64183C5.28275 1.18342 4.09933 0 2.64183 0V0Z"
                          fill="#6C63FF"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_199">
                          <rect width="22" height="22" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li className="p-[7px] bg-[white] rounded-[8px]">
                  <a href="" className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1_209)">
                        <path
                          d="M1.62542 1.76891C-0.417747 3.89116 0.000419311 6.14558 0.000419311 12.9944C0.000419311 18.6819 -0.991914 24.3835 4.20159 25.7257C5.82334 26.1428 20.1927 26.1428 21.8123 25.7236C23.9746 25.1657 25.7339 23.4117 25.9744 20.3535C26.008 19.9267 26.008 6.06974 25.9733 5.63424C25.7177 2.37666 23.7124 0.499243 21.0702 0.118993C20.4646 0.0312431 20.3433 0.00524313 17.2363 -0.000173531C6.2155 0.00524313 3.79967 -0.485507 1.62542 1.76891Z"
                          fill="#6C63FF"
                        />
                        <path
                          d="M12.9976 3.4005C9.06397 3.4005 5.32863 3.05058 3.90188 6.71225C3.31255 8.22458 3.39813 10.1887 3.39813 13.001C3.39813 15.4688 3.31905 17.7883 3.90188 19.2887C5.32538 22.9525 9.09105 22.6015 12.9954 22.6015C16.7621 22.6015 20.6459 22.9937 22.09 19.2887C22.6804 17.7612 22.5937 15.8263 22.5937 13.001C22.5937 9.2505 22.8006 6.82925 20.9817 5.01142C19.1401 3.16975 16.6495 3.4005 12.9932 3.4005H12.9976ZM12.1374 5.13058C20.3426 5.11758 21.3869 4.20542 20.8106 16.8772C20.6058 21.3589 17.1933 20.8671 12.9986 20.8671C5.3503 20.8671 5.13038 20.6483 5.13038 12.9967C5.13038 5.25625 5.73705 5.13492 12.1374 5.12842V5.13058ZM18.1217 6.72417C17.4858 6.72417 16.9701 7.23983 16.9701 7.87575C16.9701 8.51167 17.4858 9.02733 18.1217 9.02733C18.7576 9.02733 19.2733 8.51167 19.2733 7.87575C19.2733 7.23983 18.7576 6.72417 18.1217 6.72417ZM12.9976 8.07075C10.2751 8.07075 8.06838 10.2786 8.06838 13.001C8.06838 15.7234 10.2751 17.9302 12.9976 17.9302C15.72 17.9302 17.9256 15.7234 17.9256 13.001C17.9256 10.2786 15.72 8.07075 12.9976 8.07075ZM12.9976 9.80083C17.228 9.80083 17.2334 16.2012 12.9976 16.2012C8.76822 16.2012 8.76172 9.80083 12.9976 9.80083Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_209">
                          <rect width="26" height="26" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-7 lg:col-span-6">
            <ul className="flex justify-between text-[0.75rem] lg:text-[1.5rem] lg:px-[6rem]">
              <li>Home</li>
              <li>Services</li>
              <li>Clients</li>
              <li>About us</li>
              <li>Project</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="col-span-7 lg:col-span-6 flex  lg:justify-end">
            <div className="flex flex-row lg:flex-col w-full lg:w-auto justify-between items-start">
              <div className="flex items-center justify-center text-[0.875rem] lg:text-[1.1rem]  font-[400]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="mr-1"
                >
                  <path
                    d="M12.714 11.0078C12.8259 11.0078 13.2454 11.1972 13.9725 11.5762C14.6997 11.9552 15.0848 12.1835 15.1278 12.261C15.145 12.304 15.1536 12.3686 15.1536 12.4548C15.1536 12.739 15.0805 13.0663 14.9342 13.4367C14.7965 13.7726 14.491 14.0547 14.0177 14.2829C13.5444 14.5112 13.1056 14.6253 12.7011 14.6253C12.2106 14.6253 11.3932 14.3583 10.2487 13.8243C9.40538 13.4367 8.67395 12.9285 8.05438 12.2997C7.43481 11.671 6.79804 10.8742 6.14405 9.90956C5.52448 8.98794 5.219 8.15245 5.2276 7.4031V7.29974C5.25342 6.51593 5.57181 5.83549 6.18277 5.2584C6.38929 5.06891 6.61303 4.97416 6.85397 4.97416C6.9056 4.97416 6.98305 4.98062 7.08631 4.99354C7.18957 5.00646 7.27132 5.01292 7.33155 5.01292C7.49505 5.01292 7.60907 5.04091 7.6736 5.0969C7.73814 5.15289 7.80483 5.27132 7.87367 5.4522C7.94251 5.62446 8.0845 6.00345 8.29963 6.58915C8.51475 7.17485 8.62232 7.49785 8.62232 7.55814C8.62232 7.73902 8.47388 7.98665 8.177 8.30103C7.88013 8.61542 7.73169 8.81568 7.73169 8.90181C7.73169 8.9621 7.7532 9.0267 7.79623 9.09561C8.0888 9.72438 8.52766 10.3144 9.11281 10.8656C9.5947 11.3221 10.2444 11.7571 11.0619 12.1705C11.1651 12.2308 11.2598 12.261 11.3458 12.261C11.4749 12.261 11.7072 12.0521 12.0428 11.6344C12.3784 11.2166 12.6022 11.0078 12.714 11.0078ZM10.0938 17.8553C11.1866 17.8553 12.2343 17.64 13.2368 17.2093C14.2393 16.7786 15.102 16.2015 15.8248 15.478C16.5476 14.7545 17.1242 13.891 17.5544 12.8876C17.9847 11.8842 18.1998 10.8355 18.1998 9.7416C18.1998 8.64772 17.9847 7.59905 17.5544 6.59561C17.1242 5.59216 16.5476 4.72868 15.8248 4.00517C15.102 3.28165 14.2393 2.70457 13.2368 2.2739C12.2343 1.84324 11.1866 1.62791 10.0938 1.62791C9.00094 1.62791 7.95327 1.84324 6.95078 2.2739C5.94828 2.70457 5.08562 3.28165 4.36279 4.00517C3.63996 4.72868 3.06342 5.59216 2.63316 6.59561C2.20291 7.59905 1.98778 8.64772 1.98778 9.7416C1.98778 11.4901 2.50409 13.0749 3.5367 14.4961L2.51699 17.5065L5.64065 16.5116C7.00026 17.4074 8.48464 17.8553 10.0938 17.8553ZM10.0938 0C11.4104 0 12.6689 0.258398 13.8693 0.775194C15.0697 1.29199 16.1045 1.98536 16.9736 2.8553C17.8427 3.72524 18.5354 4.76098 19.0517 5.96253C19.568 7.16408 19.8262 8.42377 19.8262 9.7416C19.8262 11.0594 19.568 12.3191 19.0517 13.5207C18.5354 14.7222 17.8427 15.758 16.9736 16.6279C16.1045 17.4978 15.0697 18.1912 13.8693 18.708C12.6689 19.2248 11.4104 19.4832 10.0938 19.4832C8.4158 19.4832 6.84536 19.0784 5.38249 18.2687L0 20L1.75544 14.7674C0.82609 13.2343 0.361415 11.559 0.361415 9.7416C0.361415 8.42377 0.619568 7.16408 1.13587 5.96253C1.65218 4.76098 2.34489 3.72524 3.21401 2.8553C4.08312 1.98536 5.11789 1.29199 6.3183 0.775194C7.51871 0.258398 8.77721 0 10.0938 0Z"
                    fill="white"
                  />
                </svg>
                +9234664646
              </div>
              <div>
                <div className="flex items-center justify-center text-[0.875rem]lg:text-[1.1rem] font-[400]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    className="mr-1"
                  >
                    <path
                      d="M18 14H16V5.25L10 9L4 5.25V14H2V2H3.2L10 6.25L16.8 2H18M18 0H2C0.89 0 0 0.89 0 2V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H18C18.5304 16 19.0391 15.7893 19.4142 15.4142C19.7893 15.0391 20 14.5304 20 14V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0Z"
                      fill="white"
                    />
                  </svg>
                  Iftikhar123@gmail.com
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-7 flex justify-center">
            <div className="pt-[4px] px-[13px] pb-[8px] lg:border-l-2 border-opacity-40">
              <span className="text-[0.75rem] lg:text-[1rem] font-[400]">
                Copyright Pebisnis ( website name ) All right reserved
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end"></div>
        <div className="flex justify-between  items-center"></div>
      </div>
    </section>
  );
};

export default Footer;