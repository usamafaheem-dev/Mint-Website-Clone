// Box.js
import React from "react";

const Box = ({ title, content, icon, iconSize = {}, hiddenOnMobile }) => {
  // iconSize = { width: "23px", height: "23px", mdWidth: "30px", mdHeight: "30px" }

  return (
    <div
      className={`${
        hiddenOnMobile ? "hidden md:flex" : "flex"
      } flex-col gap-3 md:gap-4 p-4 md:p-8 md:w-[565px] rounded-2xl border-1 border-[#FFCB00] justify-center`}
    >
      <div
        className={`bg-[#27282a] flex justify-center items-center rounded-full `}
        style={{
          width: iconSize.mdWidth || iconSize.width || "50px",
          height: iconSize.mdHeight || iconSize.height || "50px",
        }}
      >
        <img
          src={icon}
          alt=""
          style={{
            width: iconSize.width || "17px",
            height: iconSize.height || "17px",
          }}
        />
      </div>
      <h1 className="font-bold text-[13px] md:text-2xl">{title}</h1>
      <div className="text-[10px] md:text-[15px] flex flex-col gap-5">
        {content.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </div>
  );
};

export default Box;
