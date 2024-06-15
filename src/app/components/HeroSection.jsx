"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
// import { useRouter } from "next/navigation";

export const HeroSection = () => {
	// const router = useRouter();
	// const handleResume = () => {
	// 	router.push("/error");
	// };

	const handleResume = () => {
		window.open('/resume/hemanth_cv.pdf', '_blank');
	};

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left"> 
          <h1 className="text-zinc-400  text-1xl sm:text-1xl lg:text-1xl font-bold  ">
            <br/><br/>
            Hello, I&apos;m<br/><span className="text-2xl text-emerald-800 font-sans">Hemanth</span><br></br>
          </h1>
          <h1 className="text-emerald-800 mb-4 text-3xl sm:text-5xl lg:text-5xl font-extrabold"><span className="text-zinc-400 font-bold">I do&nbsp;</span> 
            <TypeAnimation sequence={[
                'Web Dev',
                1000,
                'Machine Learning',
                1000,
                'Game Dev',
                1000,
                'DevOps',
                1000
            ]}
            wrapper="span"
            repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE]">
          I&apos;m a 19-year-old programmer, tech enthusiast, and all-around creative mind. My passion lies at the intersection of technology, design, and problem-solving
          </p>
          <div class="space-y-2">
            <button 
            className="px-6 py-3 w-full sm:w-fit rounded-lg mr-4 bg-transparent border border-emerald-800 mt-3 border-[3px]"
            onClick={handleResume}
            >
              <span className="text-zinc-300">Resume</span>
            </button>

            <button 
            className="px-6 py-3 w-full sm:w-fit rounded-lg mr-4 bg-transparent border border-emerald-800 border-[3px]"
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

