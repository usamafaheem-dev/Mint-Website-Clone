import React from "react";

const WelcomeSection = () => {
  return (
    <div className="relative   z-10    px-7 py-5 md:px-15 ">
      {/* content */}
      <div className="flex md:justify-between md:flex-row flex-col gap-3 md:gap-0">
        <div className="md:max-w-[490px]   flex flex-col   gap-3 font-inter ">
          <h1 className="font-bold text-xl  md:text-3xl text-black_1">
            Welcome to KRAUT9
          </h1>
          <p className="text-black_1 text-justify text-[12px] md:text-base   text-base">
            We offer a thrilling journey for businesses to expand their
            audience, monetize their fanbase, and embrace the cutting-edge world
            of web3 technology.
          </p>
        </div>
        <div className="md:max-w-[600px] text-justify  text-[13px]  text-black_1 font-inter  md:text-base flex flex-col  gap-3  md:gap-5 ">
          <p>
            With over 20 years of experience each, our expert team empowers
            businesses to tap into the dynamic potential of non-fungible tokens,
            transforming products and ideas into coveted digital assets. Kraut 9
            shapes the future by combining digital art, blockchain technology,
            and marketing expertise to create immersive experiences for brands.
          </p>
          <p>
            Our comprehensive suite of services integrates NFTs strategically
            into marketing campaigns, delivering unrivaled results tailored to
            each client's needs. Kraut 9 invites you to join us on an
            exhilarating adventure, bridging the gap between traditional and
            groundbreaking approaches and propelling your business into the
            future. It's time to embrace the extraordinary, seize untapped
            potential, and ride the wave of NFT innovation with Kraut 9.
          </p>
        </div>
      </div>

      {/* boxes */}
    </div>
  );
};

export default WelcomeSection;
