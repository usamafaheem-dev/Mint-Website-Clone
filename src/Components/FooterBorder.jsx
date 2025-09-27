import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const FooterBorder = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveHandler);

    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);
  return (
    <div className="relative  grid  grid-cols-1   md:items-end  px-6  md:px-15   ">
      <div
        className="fixed md:w-[200px] md:h-[200px] rounded-full bg-yellow-300 opacity-30 blur-2xl pointer-events-none z-0 transition-all duration-150"
        style={{
          left: pos.x - 100,
          top: pos.y - 100,
        }}
      ></div>
      <div className="relative z-20">
        <div className="border-1  border-[#27282A1A]/50"></div>
        <div className="flex   md:justify-between items-center flex-col md:flex-row font-inter py-3 text-[#27282a60] gap-2">
          <p className=" text-[12px] order-2 md:order-1">
            © 2023 – Kraut9 – All Rights Reserved
          </p>
          <p className=" text-[12px] order-1 md:order-2 flex gap-2">
            <NavLink to='/j'>Privacy Policy </NavLink> • <NavLink to='/fj'>Terms</NavLink>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterBorder;
