import { useEffect, useState } from "react";
import Herosection from "../Components/Home/Herosection";
import WelcomeSection from "../Components/Home/WelcomeSection";

const Home = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

 useEffect(() => {
    const moveHandler = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveHandler);

    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);
  return (
    <div className="relative max-w-7xl  mx-auto">
      <div
        className="fixed md:w-[200px] md:h-[200px] rounded-full bg-yellow-500 opacity-30 blur-2xl pointer-events-none z-0 transition-all duration-150"
        style={{
          left: pos.x - 100,
          top: pos.y - 100,
        }}
      ></div>

      <Herosection  />
      <WelcomeSection  />
      
    </div>
  );
};

export default Home;
