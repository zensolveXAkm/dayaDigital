import React from "react";
import { HiOutlineDesktopComputer, HiOutlineDeviceMobile } from "react-icons/hi";
import { Typewriter } from "react-simple-typewriter";

function HeroSection() {
  return (
    <div
      className="relative w-full h-96 lg:h-[32rem] bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white overflow-hidden"
      style={{
        backgroundImage: "url('your-image-path.jpg')", // Add the path to your background image here
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Animated Icons */}
      <div className="absolute top-10 left-10 animate-float">
        <HiOutlineDesktopComputer className="text-blue-500 text-7xl" />
      </div>
      <div className="absolute bottom-10 right-10 animate-rotate">
        <HiOutlineDeviceMobile className="text-green-500 text-6xl" />
      </div>

      {/* Welcome Text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-wide mb-4 glow-text">
          Welcome to{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 animate-text-flicker">
            <Typewriter
              words={[
                "Google Play Console Store",
                "Digital Line",
                "Console Hub",
                "Console Marketplace",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>
        <p className="text-lg lg:text-2xl mt-2 font-medium">
          <span className="text-shadow glow-text text-pink-500 animate-pulse">
            Buy Google Play Console accounts
          </span>{" "}
          and{" "}
          <span className="text-shadow text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
            boost your online console selling
          </span>{" "}
          journey.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
