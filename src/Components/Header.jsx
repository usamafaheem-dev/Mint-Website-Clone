import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "./Button";
import { IoMenuSharp } from "react-icons/io5";

const Header = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const hanletry = () => {
    console.log("i am running");
  };
  // use effect for bacgkound cursor moment color
  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const handleClose = () => {
    setShow(!show);
  };
  return (
    <div className="relative  md:w-7xl mx-auto">
      {/* mouse moment */}
      <div
        className="fixed w-[200px] h-[200px] rounded-full bg-yellow-400 opacity-30 blur-3xl pointer-events-none z-0 transition-all duration-150"
        style={{
          left: pos.x - 100,
          top: pos.y - 100,
        }}
      ></div>
      {/* main content */}
      <div className="relative z-10 grid grid-cols-3 items-center px-7 py-3 md:px-15  ">
        {/* for desktop */}
        {/* navlinks */}
        <div className=" md:hidden flex ">
          <button onClick={handleShow}>
            <IoMenuSharp className="h-[25px] w-[25px]" />
          </button>
        </div>
        <div className="hidden md:flex   gap-5  bg-re-400 font-inter tracking-tight text-base text-black_1">
          <NavLink to="collection">Collections</NavLink>
          <NavLink to="use-casses">Use Cases</NavLink>
          <NavLink to="team">Team</NavLink>
        </div>
        <div className="flex justify-center items-center">
          <NavLink to="/">
            {" "}
            <img
              className=" w-[100px] h-[60px] md:w-[150px] md:h-[90px]"
              src={logo}
              alt=""
            />
          </NavLink>
        </div>
        <div className=" bg-rd-400  flex justify-end items-center  ">
          <button onClick={hanletry} className="text-[#28C6F3] bg-none md:bg-gradient-to-r from-[#F0F8FB] via-[#28C6F3] to-[#28C6F3] md:px-8 md:py-2 rounded-4xl font-bold font-inter tracking-tight text-base md:text-white ">
            MINT
          </button>
        </div>
      </div>
      {/* for mobile */}
      {/* overlay for mid black color */}
      {show && (
        <>
          <div
            onClick={handleClose}
            className="fixed w-screen bg-black/40 inset-0 z-40"
          ></div>
          <div className="fixed top-0 left-0 z-50  w-screen  md:hidden flex  flex-col items-start gap-4 px-4 py-3  bg-re-400 font-inter tracking-tight text-base text-black_1 bg-white">
            <button onClick={handleClose} className="font-medium text-xl">
              X
            </button>
            <NavLink to="collection">Collections</NavLink>
            <NavLink to="use-casses">Use Cases</NavLink>
            <NavLink to="team">Team</NavLink>
            <div className="w-full">
              <button className="py-2 text-white bg-gradient-to-r w-full  from-[#F0F8FB] via-[#28C6F3] to-[#28C6F3]  rounded-4xl font-bold font-inter tracking-tight text-base ">
                MINT
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
