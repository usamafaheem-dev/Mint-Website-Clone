import React from "react";
import Button from "./Button";
import ButtonMobile from "./ButtonMobile";

const Missions = () => {
  return (
    <div className="relative z-10 px-7 py-3      md:px-15">
      {/* content */}
      <div className="flex md:justify-between md:flex-row flex-col gap-5 md:gap-0">
        <div className="md:max-w-[490px] order-1  flex flex-col gap-7 font-inter">
          <h1 className="font-bold text-xl md:text-4xl text-black_1">
            Our Mission
          </h1>
          <button className=" hidden md:block py-2 md:py-2 px-5 text-white bg-gradient-to-r w-full md:w-[130px] from-[#F0F8FB] via-[#28C6F3] to-[#28C6F3] rounded-4xl font-bold font-inter tracking-tight text-base ">
            CAT
          </button>
        </div>
        <div className="order-3 md:order-2  block md:hidden">
          <ButtonMobile>CAT</ButtonMobile>
      </div>
        <div className="order-2 md:order-3 md:max-w-[600px] text-justif text-[13px] text-black_1 font-inter md:text-base flex flex-col gap-3 md:gap-5">
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
