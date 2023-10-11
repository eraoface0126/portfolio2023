import React from "react";
import { Space_Grotesk } from "next/font/google";
import { motion } from "framer-motion";
import Logo from "../components/svg/Logo";
import HeroBackground from "../components/background/HeroBackground";

const spaceGrotesk = Space_Grotesk({ preload: false });
const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[100vh] w-full justify-center"
      id="home"
      initial="initial"
      animate="animate"
    >
      <HeroBackground />
      <div className="mt-10 flex flex-col items-center justify-center sm:mt-0">
        <div
          className={`relative flex flex-col items-center justify-center ${spaceGrotesk.className} pointer-events-none`}
        >
          <Logo width={130} height={130} />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
