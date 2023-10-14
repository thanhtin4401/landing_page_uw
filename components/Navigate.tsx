"use client";
import Image from "@/node_modules/next/image";
import React, { useState } from "react";
import logo from "../assets/images/logoclient.png";
import phone from "../assets/images/phone.png";
const Navigate = () => {
  const [open, setOpen] = useState(false);
  const handleNavigate = () => {
    console.log(open);
    setOpen(!open);
  };
  const navigate = [
    { id: "home", name: "Home" },
    { id: "clients", name: "Clients" },
    { id: "services", name: "Services" },
    { id: "projects", name: "Projects" },
    { id: "about_us", name: "About Us" },
  ];
  const [active, setActive] = useState(0);
  const [toggleNavigate, setToggleNavigate] = useState(false);
  const handleToggleMenu = () => {
    setToggleNavigate((toggleNavigate) => !toggleNavigate);
  };
  return (
    <div className="fixed w-full bg-white text-black z-50 ">
      <div className="container flex justify-between mx-auto py-5 px-[1.5rem] lg:px-0">
        <a
          href="#home"
          className="flex justify-center items-center animate__animated animate__fadeInLeft"
        >
          <Image src={logo} alt="" />
          <h1 className="text-[1.5rem] text-dark-blue font-[600] ml-2">Logo</h1>
        </a>
        <div className="justify-center hidden lg:flex space-x-8">
          <ul className="flex justify-center space-x-8 text-[1.4rem] items-center font-[500]">
            {navigate.map((menu, i) => (
              <li
                key={i}
                className={`${
                  active === i ? "text-primary-color" : "text-text-color"
                }`}
                onClick={() => {
                  setActive(i);
                }}
              >
                <a href={`#${menu.id}`}>{menu.name}</a>
              </li>
            ))}
          </ul>
          <a
            href="#contact_us"
            className="text-center ml-2 px-[24px] py-[12px] bg-primary-color text-[white]  font-[500] rounded-full"
          >
            Contact Us
          </a>
        </div>
        <div className=" justify-center hidden lg:flex items-center space-x-4 animate__animated animate__fadeInRight">
          <Image src={phone} alt="" />
          <p className="text-[1.4rem] text-text-color font-[500]">
            +92323284724
          </p>
        </div>
        <div className="button_navigate lg:hidden relative">
          <div className="" onClick={handleNavigate}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="21"
              viewBox="0 0 27 21"
              fill="none"
            >
              <path
                d="M2 2H24.6667M2 10.5H24.6667M14.75 19H24.6667"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <ul
            className={`${
              open
                ? "animate__fadeInUp animate__faster"
                : "animate__fadeOutDown"
            } w-[12rem] animate__animated space-y-6 flex-col transition-all  justify-start absolute top-[3.75rem] right-0 py-[1rem] px-[1.5rem] bg-white rounded-lg text-[0.75rem]`}
          >
            {navigate.map((menu, i) => (
              <li
                key={i}
                className={`${
                  active === i ? "text-primary-color" : "text-text-color"
                }`}
                onClick={() => {
                  setActive(i);
                }}
              >
                <a href={`#${menu.id}`}>{menu.name}</a>
              </li>
            ))}
            <li className="flex space-x-2 justify-start items-center ">
              <Image src={phone} alt="" />
              <p className="text-[0.8125rem] text-text-color font-[500]">
                +92323284724
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigate;
