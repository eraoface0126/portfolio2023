import React from "react";
import {
  SiAmazonaws,
  SiC,
  SiCodeigniter,
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHeroku,
  SiJavascript,
  SiLaravel,
  SiLess,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxtdotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSass,
  SiSolidity,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedTools from "../animations/AnimatedTools.tsx";

const Tools = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="skills"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"MY SKILLS"}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto w-[100%] justify-center lg:max-w-[1200px]">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
            <AnimatedBody delay={0.1} text="Programming Languages" />
            <div>
              <AnimatedTools
                className="grid grid-cols-7 gap-4"
                delay={0.1}
                stepSize={0.1}
                iconSize={50}
              >
                <SiC size={50} />
                <SiCplusplus size={50} />
                <SiJavascript size={50} />
                <SiTypescript size={50} />
                <SiPhp size={50} />
                <SiPython size={50} />
                <SiSolidity size={50} />
              </AnimatedTools>
            </div>
          </div>
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
            <AnimatedBody delay={0.2} text="Frontend Development" />
            <div>
              <AnimatedTools
                className="grid grid-cols-7 gap-4"
                delay={0.2}
                stepSize={0.1}
                iconSize={50}
              >
                <SiReact size={50} />
                <SiNextdotjs size={50} />
                <SiVuedotjs size={50} />
                <SiNuxtdotjs size={50} />
                <SiTailwindcss size={50} />
                <SiLess size={50} />
                <SiSass size={50} />
              </AnimatedTools>
            </div>
          </div>
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
            <AnimatedBody delay={0.3} text="Backend Development" />
            <div>
              <AnimatedTools
                className="grid grid-cols-7 gap-4"
                delay={0.3}
                stepSize={0.1}
                iconSize={50}
              >
                <SiNodedotjs size={50} />
                <SiExpress size={50} />
                <SiLaravel size={50} />
                <SiCodeigniter size={50} />
              </AnimatedTools>
            </div>
          </div>
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
            <AnimatedBody delay={0.4} text="Database Management" />
            <div>
              <AnimatedTools
                className="grid grid-cols-7 gap-4"
                delay={0.4}
                stepSize={0.1}
                iconSize={50}
              >
                <SiMongodb size={50} />
                <SiMysql size={50} />
                <SiSqlite size={50} />
                <SiPostgresql size={50} />
              </AnimatedTools>
            </div>
          </div>
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
            <AnimatedBody delay={0.4} text="Other" />
            <div>
              <AnimatedTools
                className="grid grid-cols-7 gap-4"
                delay={0.4}
                stepSize={0.1}
                iconSize={50}
              >
                <SiGithub size={50} />
                <SiGit size={50} />
                <SiFirebase size={50} />
                <SiDocker size={50} />
                <SiAmazonaws size={50} />
                <SiHeroku size={50} />
                <SiFigma size={50} />
              </AnimatedTools>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
