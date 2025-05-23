"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c182d8] to-[#4a00e0]">
              Hello, I&apos;m{" Shajar Abbas "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                1000,
                "Web Developer",
                1000,
                "Agency Ai Developer",
                1000,
                "Programmer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          I am a passionate MERN Stack and Agentic Ai Developer with expertise in building dynamic, user-friendly web applications. Proficient in MongoDB, Express.js, React.js, and Node.js, I specialize in creating full-stack solutions tailored to client needs. Currently expanding my skill set by diving into Agentic Ai to develop smarter, data-driven applications. 
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
             target="_blank"
              href="https://drive.google.com/file/d/1YXx1j-PCTlKt3uQb2-rMyCn8jwSwHjxm/view?usp=sharing"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
            <Image
              src="/MyImage.png"
              alt="Shajar Abbas&apos;"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={320}

            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
