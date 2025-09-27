import React from "react";
import Button from "./Button";
import ButtonMobile from "./ButtonMobile";

const Missions = () => {
  return (
    <div className="relative z-10 px-8 py-3      sm:px-15">
      {/* content */}
      <div className="flex sm:justify-between sm:flex-row flex-col gap-2 md:gap-0">
        <div className="sm:w-[340px] bg-rd-500 md:w-[390px] order-1  flex flex-col gap-7 sm:gap-5 font-inter">
          <h1 className="font-bold text-xl sm:text-2xl md:text-2xl lg:text-4xl  text-black_1">
            Our Mission
          </h1>
          <button className=" hidden sm:block py-2 sm:py-2 px-5 text-white bg-gradient-to-r w-full sm:w-[110px] md:w-[120px] lg:w-[130px] from-[#F0F8FB] via-[#28C6F3] to-[#28C6F3] rounded-4xl font-bold font-inter tracking-tight text-base ">
            CTA
          </button>
        </div>
        <div className="order-3 sm:order-2 mt-4 block sm:hidden">
          <ButtonMobile>CTA</ButtonMobile>
      </div>
        <div className="order-2 bg-geen-500 sm:order-3  sm:w-[595px]   md:text-[15px] text-[11px]   text-black_1 font-inter  flex  flex-col gap-3 md:gap-5">
          <p>
            Kraut 9's mission is to revolutionize classical industries and drive
            unparalleled growth by harnessing the power of Non-Fungible Tokens.
            We create innovative solutions that elevate brands, increase sales,
            and generate new avenues of revenue. We specialize in bespoke
            NFT-based royalty programs and seamlessly merge the physical and
            digital realms through product-linked NFTs. Kraut 9 aims to develop
            new revenue streams, establish brand authority using web3
            technologies, and guide businesses through the world of NFTs.
          </p>
          <p>
            Visual artists benefit from our help to monetize their work quickly
            and even participate on resales. Imagine a community of loyal fans
            you can directly interact with. Imagine a significant increase in
            popularity. Worldwide! That is where Kraut 9 will take you.
          </p>
          <p>
            We work closely with our clients, customizing strategies to maximize
            growth potential and demystify complexities. Kraut 9 welcomes
            businesses to a realm where classical industries and NFTs converge,
            shattering traditional marketing boundaries and embracing the future
            of commerce.
          </p>
          <p>Together, we redefine success in a rapidly evolving world.</p>
        </div>
      </div>
    </div>
  );
};

export default Missions;
