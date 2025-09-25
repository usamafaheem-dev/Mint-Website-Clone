import React from "react";
import loyality from "../../assets/WelcomeSection/loyalty.png";
import Ellipse_8 from "../../assets/WelcomeSection/Ellipse8.png";

const WelcomeSection = () => {
  return (
    <div className="relative   z-10    px-7 py-7 md:py-16   md:px-15 ">
      {/* content */}
      <div className="flex md:justify-between md:flex-row flex-col gap-3 md:gap-0">
        <div className="md:max-w-[490px]   flex flex-col   gap-3 font-inter ">
          <h1 className="font-bold text-xl  md:text-4xl text-black_1">
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
      <div className=" py-7 md:py-12 font-inter text-black_1  md:flex justify-between">
        {/* first */}
        <div className="flex flex-col gap-4 mb-3">
          {/* first box */}
          <div className=" flex justify-center flex-col gap-4 p-4 md:p-8 md:w-[565px] rounded-2xl md:rounded-4xl border-1 md:border-2 border-[#FFCB00] ">
            <div className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] bg-[#27282a] flex justify-center items-center rounded-full">
              <img
                className=" w-[23px] h-[23px] md:w-[30px] md:h-[30px]"
                src={loyality}
                alt=""
              />
            </div>
            <h1 className="font-bold text-[13px]    md:text-3xl ">
              The future of loyalty programs
            </h1>
            <div className="text-justify  text-[10px] md:text-[17px] flex gap-5 flex-col">
              <p>
                With Kraut 9 you utilize NFT loyalty passes to get closer to
                your customers than before.
              </p>
              <p>
                Sell them even on your website to raise money and get a cut of
                any subsequent sales, creating a brand-new source of revenue.
                With Kraut 9 you make this even as easy as ordering from a web
                shop.
              </p>
            </div>
          </div>
          {/* second box */}
          <div className=" flex justify-center flex-col gap-4 p-4 md:p-8 md:w-[565px] rounded-2xl md:rounded-4xl border-1 md:border-2 border-[#FFCB00] ">
            <div className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] bg-[#27282a] flex justify-center items-center rounded-full">
              <img
                className=" w-[23px] h-[23px] md:w-[30px] md:h-[30px]"
                src={loyality}
                alt=""
              />
            </div>
            <h1 className="font-bold text-[13px]    md:text-3xl ">
              The future of revenue streams
            </h1>
            <div className="text-justify  text-[10px] md:text-[17px] flex gap-5 flex-col">
              <p>
                Kraut 9 helps you creating new revenue streams for your business
                with NFT sales and sales commissions every time your NFTs are
                being resold on secondary markets.
              </p>
            </div>
          </div>
          {/* thirf box */}
          <div className=" flex justify-center flex-col gap-4 p-4 md:p-8 md:w-[565px] rounded-2xl md:rounded-4xl border-1 md:border-2 border-[#FFCB00] ">
            <div className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] bg-[#27282a] flex justify-center items-center rounded-full">
              <img
                className=" w-[23px] h-[23px] md:w-[30px] md:h-[30px]"
                src={loyality}
                alt=""
              />
            </div>
            <h1 className="font-bold text-[13px]    md:text-3xl">
              The future of loyalty programs
            </h1>
            <div className="text-justify  text-[10px] md:text-[17px] flex gap-5 flex-col">
              <p>
                With Kraut 9 you provide your customers an unfakeble and easy to
                transfer authenticity proof by linking an NFT to your product.
                You can even earn money everytime that product is being resold.
              </p>
            </div>
          </div>
        </div>

        {/* second */}

        <div className="flex flex-col gap-4">
          {/* first box */}
          <div className=" flex justify-center flex-col gap-4 p-4 md:p-8 md:w-[565px] rounded-2xl md:rounded-4xl border-1 md:border-2 border-[#FFCB00] ">
            <div className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] bg-[#27282a] flex justify-center items-center rounded-full">
              <img
                className=" w-[23px] h-[23px] md:w-[30px] md:h-[30px]"
                src={loyality}
                alt=""
              />
            </div>
            <h1 className="font-bold text-[13px]    md:text-3xl ">
              The future of loyalty programs
            </h1>
            <div className="text-justify  text-[10px] md:text-[17px] flex gap-5 flex-col">
              <p>
                With Kraut 9 you provide your customers an unfakeble and easy to
                transfer authenticity proof by linking an NFT to your product.
                You can even earn money everytime that product is being resold.
              </p>
            </div>
          </div>

          {/* second box */}
          <div className=" flex justify-center flex-col gap-4 p-4 md:p-8 md:w-[565px] rounded-2xl md:rounded-4xl border-1 md:border-2 border-[#FFCB00] ">
            <div className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] bg-[#27282a] flex justify-center items-center rounded-full">
              <img
                className=" w-[23px] h-[23px] md:w-[30px] md:h-[30px]"
                src={loyality}
                alt=""
              />
            </div>
            <h1 className="font-bold text-[13px]    md:text-3xl ">
              The future of loyalty programs
            </h1>
            <div className="text-justify  text-[10px] md:text-[17px] flex gap-5 flex-col">
              <p>
                With Kraut 9 you provide your customers an unfakeble and easy to
                transfer authenticity proof by linking an NFT to your product.
                You can even earn money everytime that product is being resold.
              </p>
            </div>
          </div>
          {/* third box */}
          <div className=" flex justify-center flex-col gap-4 p-4 md:p-8 md:w-[565px] rounded-2xl md:rounded-4xl border-1 md:border-2 border-[#FFCB00] ">
            <div className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] bg-[#27282a] flex justify-center items-center rounded-full">
              <img
                className=" w-[23px] h-[23px] md:w-[30px] md:h-[30px]"
                src={loyality}
                alt=""
              />
            </div>
            <h1 className="font-bold text-[13px]    md:text-3xl ">
              The future of loyalty programs
            </h1>
            <div className="text-justify  text-[10px] md:text-[17px] flex gap-5 flex-col">
              <p>
                With Kraut 9 you provide your customers an unfakeble and easy to
                transfer authenticity proof by linking an NFT to your product.
                You can even earn money everytime that product is being resold.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
