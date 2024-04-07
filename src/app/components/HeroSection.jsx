"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

export const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-zinc-400  text-4xl sm:text-2xl lg:text-4xl font-extrabold">
            <br/><br/>
            Hello, I&apos;m<br></br>
          </h1>
          <h1 className="text-emerald-800 mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <TypeAnimation sequence={[
                'Hemanth',
                1000,
                'Web Developer',
                1000,
                'Machine Learning Enthusiast',
                1000,
                'Game developer',
                1000,
                'DevOps Enthusiast',
                1000
            ]}
            wrapper="span"
            repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          I&apos;m a 19-year-old programmer, tech enthusiast, and all-around creative mind. My passion lies at the intersection of technology, design, and problem-solving
          </p>
          <div>
            <button 
            className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-emerald-950 via-emerald-900 to-lime-900"
            onClick={() => {
              window.open('/images/resume/resume.pdf', '_blank');
            }}
            >
              <span className="text-zinc-300">Resume</span>
            </button>
            <button 
            className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-emerald-950 via-emerald-900 to-lime-900"
            onClick={() => {
              window.open('https://github.com/arjuuuuunnnnn', '_blank');
            }}
            >
              <span className="text-zinc-300">GitHub</span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="relative transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={450}
              height={450}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
