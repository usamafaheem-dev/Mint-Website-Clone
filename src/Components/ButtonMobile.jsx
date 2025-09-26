import React from "react";

const ButtonMobile = ({children}) => {
  return (
    <div>
      <button className="py-3 md:py-2 px-5 text-white bg-gradient-to-r w-full md:w-[130px] from-[#F0F8FB] via-[#28C6F3] to-[#28C6F3] rounded-4xl font-semibold md:font-bold font-inter  text-[11px] tracking-wide ">
        {children}
      </button>
    </div>
  );
};

export default ButtonMobile;
