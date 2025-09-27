import HeroLogo from "../../assets/HeroLogo.png";

const Herosection = () => {
  return (
    <div className="relative ">
      {/* moving circle */}

      {/* main content */}
      <div className="relative px-6 py-3 z-10 md:px-16 mx-auto gap-6 flex justify-between items-center sm:flex-row flex-col mt-6">
        {/* text content */}
        <div className="flex flex-col gap-5 md:gap-6 ">
          <div className=" sm:w-[270px]  md:w-[330px] lg:w-[410px]  xl:w-[450px] ">
            <h1 className="font-inter font-bold text-2xl  sm:text-2xl  md:text-4xl xl:text-5xl  text-black_1">
              Kraut 9 is Europe's premier NFT-based marketing agency
            </h1>
          </div>
          <div className="sm-[200px] md:[220px] lg-[250px]  xl:w-[280px]  text-sm md:text-base text-[#27282AAB]">
            <p>leading the way in revolutionizing marketing with NFTs</p>
          </div>
          <div>
               
            <button className="py-3 md:py-3 px-5 text-white bg-gradient-to-r w-full sm:w-[130px] from-[#F0F8FB] via-[#28C6F3] to-[#28C6F3] rounded-4xl font-bold font-inter tracking-wide  text-[11px] ">
              Email
            </button>
          </div>
        </div>

        {/* image div */}
        <div className="md:px-10">
          <img
            src={HeroLogo}
            alt="Hero Logo"
            className="  sm:w-[300px] sm:h-[300px]  md:w-[280px] md:h-[280px]  lg:w-[380px] lg:h-[380px]    xl:w-[380px] xl:h-[380px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
