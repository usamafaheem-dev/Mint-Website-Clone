import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "./Button";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import ButtonMobile from "./ButtonMobile";

const Footer = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // use effect for bacgkound cursor moment color
  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const mediaLinks = [
    {
      icon: FaFacebookF,
      link: "https://www.facebook.com/",
    },
    {
      icon: FaTwitter,
      link: "https://www.twitter.com/",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/",
    },
  ];

  return (
    <div className="relative  max-w-7xl mx-auto">
      {/* mouse moment */}
      <div
        className="fixed w-[200px] h-[200px] rounded-full bg-yellow-400 opacity-30 blur-3xl pointer-events-none z-0 transition-all duration-150"
        style={{
          left: pos.x - 100,
          top: pos.y - 100,
        }}
      ></div>

      {/* main content */}
      <div className="relative z-10 grid gap-6 grid-cols-1 md:grid-cols-3  md:items-end  mb-4 px-7 mt-12 md:px-15  ">
        {/* navlinks */}

        <div className="order-2 md:order-1 gap-7 md:gap-3  flex justify-center md:justify-start items-center ">
          {mediaLinks.map((value, index) => (
            <div
              key={index}
              className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-gradient-to-r from-[#F0F8FB] via-[#28C6F3] to-[#28C6F3] "
            >
              <NavLink className="text-white" to={value.link}>
                {value.icon}
              </NavLink>
            </div>
          ))}
        </div>
        <div className="grid order-1 md:order-2 grid-cols-1 gap-5 md:gap-9">
          <div className="flex justify-center items-center ">
            <NavLink to="/">
              {" "}
              <img className="  md:w-[200px] md:h-[120px]" src={logo} alt="" />
            </NavLink>
          </div>
          <div className="  flex justify-center  items-center text-[13px] md:text-base  gap-8  bg-re-400 font-inter tracking-tight text-base text-black_1">
            <NavLink to="collection">Collections</NavLink>
            <NavLink to="use-casses">Use Cases</NavLink>
            <NavLink to="team">Team</NavLink>
          </div>
        </div>
        <div className="order-3 md:order-2 flex justify-end items-center">
          <button
            className="py-3 px-4 md:px-9 
               text-white bg-gradient-to-r 
               from-[#F0F8FB] via-[#28C6F3] to-[#28C6F3] 
               rounded-4xl font-semibold md:font-bold font-inter  
               text-[11px] tracking-wide 
               w-full md:w-[110px]"
          >
            MINT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
