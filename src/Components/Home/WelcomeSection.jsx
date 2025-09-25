import React from "react";

import first from "../../assets/WelcomeSection/first.png";
import Second from "../../assets/WelcomeSection/Second.png";
import Third from "../../assets/WelcomeSection/Third.png";
import Fourth from "../../assets/WelcomeSection/Fourth.png";
import Fifth from "../../assets/WelcomeSection/Fifth.png";
import Six from "../../assets/WelcomeSection/Six.png";
import Box from "./Box";

// Array for first column
const boxColumn1 = [
  {
    title: "The future of loyalty programs",
    content: [
      "With Kraut 9 you utilize NFT loyalty passes to get closer to your customers than before.",
      "Sell them even on your website to raise money and get a cut of any subsequent sales, creating a brand-new source of revenue. With Kraut 9 you make this even as easy as ordering from a web shop."
    ],
    icon: first
  },
  {
    title: "The future of revenue streams",
    content: [
      "Kraut 9 helps you creating new revenue streams for your business with NFT sales and sales commissions every time your NFTs are being resold on secondary markets."
    ],
    icon: Second
  },
  {
    title: "The future of customer life time value",
    content: [
      "With Kraut 9 you increase revenue from clients that are familiar with and devoted to your business by utilizing community and exclusive access. Kraut 9 helps you turning your customers into an army of brand ambassadors."
    ],
    icon: Third,
    hiddenOnMobile: true
  }
];

// Array for second column
const boxColumn2 = [
  {
    title: "The future of authenticity proofs",
    content: [
      "With Kraut 9 you provide your customers an unfakeble and easy to transfer authenticity proof by linking an NFT to your product. You can even earn money everytime that product is being resold."
    ],
    icon: Fourth,
  },
  {
    title: "The future of brand authority",
    content: [
      "You are leading the way in innovation. With Kraut 9 you will increase brand authority in your industry by leading the way into web3."
    ],
    icon: Fifth
  },
  {
    title: "The future of making money as visual artist",
    content: [
      "Kraut 9 combines the power of state-of-the-art web3 technology with your creativity and passion as a visual artist. With NFTs we help you monetizing your works easy and rapidly increase your popularity. You will even be able to participate in the resale of your works."
    ],
    icon: Six,
    hiddenOnMobile: true
  }
];

const WelcomeSection = () => {
  return (
    <div className="relative z-10 px-7 py-7 md:py-16 md:px-15">
      {/* content */}
      <div className="flex md:justify-between md:flex-row flex-col gap-3 md:gap-0">
        <div className="md:max-w-[490px] flex flex-col gap-3 font-inter">
          <h1 className="font-bold text-xl md:text-4xl text-black_1">
            Welcome to KRAUT9
          </h1>
          <p className="text-black_1 text-justify text-[12px] md:text-base">
            We offer a thrilling journey for businesses to expand their audience, monetize their fanbase, and embrace the cutting-edge world of web3 technology.
          </p>
        </div>
        <div className="md:max-w-[600px] text-justify text-[13px] text-black_1 font-inter md:text-base flex flex-col gap-3 md:gap-5">
          <p>
            With over 20 years of experience each, our expert team empowers businesses to tap into the dynamic potential of non-fungible tokens, transforming products and ideas into coveted digital assets. Kraut 9 shapes the future by combining digital art, blockchain technology, and marketing expertise to create immersive experiences for brands.
          </p>
          <p>
            Our comprehensive suite of services integrates NFTs strategically into marketing campaigns, delivering unrivaled results tailored to each client's needs. Kraut 9 invites you to join us on an exhilarating adventure, bridging the gap between traditional and groundbreaking approaches and propelling your business into the future. It's time to embrace the extraordinary, seize untapped potential, and ride the wave of NFT innovation with Kraut 9.
          </p>
        </div>
      </div>

      {/* boxes */}
      <div className="py-7 md:py-12 font-inter text-black_1 md:flex justify-between">
        <div className="flex flex-col gap-4 mb-3">
          {boxColumn1.map((box, i) => (
            <Box
              key={i}
              title={box.title}
              content={box.content}
              icon={box.icon}
              hiddenOnMobile={box.hiddenOnMobile}
            />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {boxColumn2.map((box, i) => (
            <Box
              key={i}
              title={box.title}
              content={box.content}
              icon={box.icon}
              hiddenOnMobile={box.hiddenOnMobile}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
