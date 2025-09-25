import HeroLogo from "../../assets/HeroLogo.png";

const Herosection = () => {
  return (
    <div className="relative ">
      {/* moving circle */}

      {/* main content */}
      <div className="relative px-7 py-3 z-10 md:px-16 mx-auto gap-6 flex justify-between items-center md:flex-row flex-col mt-6">
        {/* text content */}
        <div className="flex flex-col gap-5">
          <div className="h-[85px] md:w-[450px] md:h-[160px]">
            <h1 className="font-inter font-bold text-2xl md:text-5xl md:leading-[3.5rem] text-black_1">
              Kraut 9 is Europe's premier NFT-based marketing agency
            </h1>
          </div>
          <div className="md:w-[280px] md:h-[47px] text-sm md:text-base text-[#27282AAB]">
            <p>leading the way in revolutionizing marketing with NFTs</p>
          </div>
          <div>
            <button className="py-2 md:py-2 px-5 text-white bg-gradient-to-r w-full md:w-[130px] from-[#F0F8FB] via-[#28C6F3] to-[#28C6F3] rounded-4xl font-bold font-inter tracking-tight text-base ">
              Email
            </button>
          </div>
        </div>

        {/* image div */}
        <div className="md:px-10">
          <img
            src={HeroLogo}
            alt="Hero Logo"
            className="md:w-[380px] md:h-[380px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
