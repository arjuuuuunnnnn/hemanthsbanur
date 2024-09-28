"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { TbBrandNextjs, TbBrandCpp, TbBrandCSharp, TbBrandCoinbase } from "react-icons/tb";
import { VscAzure, VscVscodeInsiders } from "react-icons/vsc";
import { SiDebian, SiDocker, SiKalilinux, SiNeovim, SiVim, SiPostman, SiFlutter, SiJavascript, SiTailwindcss, SiFirebase, SiFlask,  SiMongodb, SiScikitlearn, SiPytorch, SiTensorflow, SiOpencv, SiPandas, SiNumpy, SiPython, SiDart} from "react-icons/si";
import { FaGithub, FaGitAlt, FaLinux, FaUnity, FaHtml5, FaCss3, FaReact, FaNodeJs } from "react-icons/fa";

const TAB_DATA = [
  {
    title: "devtools",
    id: "devtools",
    content: (
      <>
        <div className="flex flex-wrap">
          <span className="mr-2 mb-2 hover:text-emerald-800 hover:scale-110"><VscAzure className="h-8 w-8" /></span>
          <span className="mr-2 mb-2 hover:text-emerald-800 hover:scale-110"><SiDebian className="h-8 w-8"/></span>
          <span className="mr-2 mb-2 hover:text-emerald-800 hover:scale-110"><SiDocker className="h-8 w-8"/></span>
          <span className="mr-2 mb-2 hover:text-emerald-800 hover:scale-110"><FaGithub className="h-8 w-8"/></span>
          <span className="mr-2 mb-2 hover:text-emerald-800 hover:scale-110"><FaGitAlt className="h-8 w-8"/></span>
          <span className="mr-2 mb-2 hover:text-emerald-800 hover:scale-110"><SiKalilinux className="h-8 w-8"/></span>
          <span className="mr-2 mb-2 hover:text-emerald-800 hover:scale-110"><FaLinux className="h-8 w-8"/></span>
          <span className="mr-2 mb-2 hover:text-emerald-800 hover:scale-110"><SiNeovim className="h-8 w-8"/></span>
          <span className="mr-2 mb-2 hover:text-emerald-800 hover:scale-110"><FaUnity className="h-8 w-8"/></span>
          <span className="mr-2 mb-2 hover:text-emerald-800 hover:scale-110"><SiVim className="h-8 w-8"/></span>
          <span className="mr-2 mb-2 hover:text-emerald-800 hover:scale-110"><VscVscodeInsiders className="h-8 w-8"/></span>
          <span className="mr-2 mb-2 hover:text-emerald-800 hover:scale-110"><SiPostman className="h-8 w-8"/></span>
		      <span className="mr-2 mb-2 hover:text-emerald-800 hover:scale-110"><SiFlutter className="h-8 w-8"/></span>
        </div>
      </>
    ),
  },
  {
    title: "webdev",
    id: "webdev",
    content: (
      <>
        <div className="flex flex-wrap">
          <span className="mr-2 mb-2 hover:text-emerald-800 hover:scale-110"><FaHtml5 className="h-8 w-8"/></span>
          <span className="mr-2 mb-2 hover:text-emerald-800 hover:scale-110"><FaCss3 className="h-8 w-8"/></span>
          <span className="mr-2 mb-2 hover:text-emerald-800 hover:scale-110"><SiJavascript className="h-8 w-8"/></span>
          <span className="mr-2 mb-2 hover:text-emerald-800 hover:scale-110"><FaReact className="h-8 w-8"/></span>
          <span className="mr-2 mb-2 hover:text-emerald-800 hover:scale-110"><TbBrandNextjs className="h-8 w-8"/></span>
          <span className="mr-2 mb-2 hover:text-emerald-800 hover:scale-110"><FaNodeJs className="h-8 w-8"/></span>
          <span className="mr-2 mb-2 hover:text-emerald-800 hover:scale-110"><SiTailwindcss className="h-8 w-8"/></span>
          <span className="mr-2 mb-2 hover:text-emerald-800 hover:scale-110"><SiFirebase className="h-8 w-8"/></span>
          <span className="mr-2 mb-2 hover:text-emerald-800 hover:scale-110"><SiFlask className="h-8 w-8"/></span>
          <span className="mr-2 mb-2 hover:text-emerald-800 hover:scale-110"><SiMongodb className="h-8 w-8"/></span>
        </div>
      </>
    ),
  },
  {
    title: "langs",
    id: "langs",
    content: (
      <>
        <div className="flex flex-wrap">
          <span className="mr-2 mb-2 hover:text-emerald-800 hover:scale-110"><TbBrandCoinbase className="h-8 w-8"/></span>
          <span className="mr-2 mb-2 hover:text-emerald-800 hover:scale-110"><TbBrandCpp className="h-8 w-8"/></span>
          <span className="mr-2 mb-2 hover:text-emerald-800 hover:scale-110"><SiPython className="h-8 w-8"/></span>
          <span className="mr-2 mb-2 hover:text-emerald-800 hover:scale-110"><SiDart className="h-8 w-8"/></span>
		      <span className="mr-2 mb-2 hover:text-emerald-800 hover:scale-110"><TbBrandCSharp className="h-8 w-8"/></span>
        </div>
      </>
    ),
  },
	{
		title: "ml",
		id: "ml",
		content: (
			<>
      <div className="flex flex-wrap">
        <span className="mr-2 mb-2 hover:text-emerald-800 hover:scale-110"><SiScikitlearn className="h-8 w-8"/></span>
        <span className="mr-2 mb-2 hover:text-emerald-800 hover:scale-110"><SiPytorch className="h-8 w-8"/></span>
        <span className="mr-2 mb-2 hover:text-emerald-800 hover:scale-110"><SiTensorflow className="h-8 w-8"/></span>
        <span className="mr-2 mb-2 hover:text-emerald-800 hover:scale-110"><SiOpencv className="h-8 w-8"/></span>
		    <span className="mr-2 mb-2 hover:text-emerald-800 hover:scale-110"><SiPandas className="h-8 w-8"/></span>
        <span className="mr-2 mb-2 hover:text-emerald-800 hover:scale-110"><SiNumpy className="h-8 w-8"/></span>
      </div>
    </>
		),

	},
];

const AboutSection = () => {
  const [tab, setTab] = useState("devtools");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id="about" className="text-zinc-400 text-base">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/About.png"
          width={500}
          height={900}
          alt="About Image"
		  className="hero-image"
        />
        <div className="mt-4 md:mt-0 text-left flex-col h-full">
          <h2 className="text-2xl font-bold text-emerald-800 about-section-gap">
            $ whoami
          </h2>
          <p className="text-zinc-400">
            Hello I&apos;m{" "}
            <strong className="font-bold">Hemanth S Banur</strong>
            <br />
            Just your average 19-year old programmer, problem solver, and tech
            enthusiast.
            <br />
            <strong className="font-bold text-emerald-800">
              sudo apt-get install programmer
            </strong>
            <br />
            <br />
            Of course, that&apos;s not all. I also happen to be a game developer
            and a web developer. I mean, who needs a social life when you can
            spend your days{" "}
            <strong className="font-bold text-emerald-800">
              git push
            </strong>
            ing and{" "}
            <strong className="font-bold text-emerald-800">
              npm install
            </strong>
            ing, am I right?
            <br />
            <br />
            And let&apos;s not forget my undying love for machine learning. I
            practically live in the terminal, running{" "}
            <strong className="font-bold text-emerald-800">
              python3 ml_model.py
            </strong>{" "}
            until the sun comes up. It&apos;s a tough job, but someone&apos;s
            gotta do it.
            <br />
            <strong className="font-bold text-emerald-800">
              sudo apt-get install machine-learning
            </strong>
            <br />
            <br />
            Oh, and did I mention I&apos;m a total Linux enthusiast? I bet you
            couldn&apos;t tell from all the{" "}
            <strong className="font-bold text-emerald-800">
              sudo
            </strong>{" "}
            commands
            <br />
            <br />
            Anyway, that&apos;s me in a nutshell. I&apos;m a well-rounded
            individual with a diverse skillset and an insatiable thirst for
            knowledge. Now, if you&apos;ll excuse me, I need to go{" "}
            <strong className="font-bold text-emerald-800">
              sudo reboot
            </strong>{" "}
            my brain and come up with some more captivating hobbies
            <br />
          </p>
          <div className="mt-8">
            <h5 className="text-2xl font-bold text-emerald-800 mb-3">
              cat /etc/tech-stack
            </h5>
            <div className="flex flex-row justify-start mr-12 text-1xl">
              <TabButton
                selectTab={() => handleTabChange("devtools")}
                active={tab === "devtools"}
                className="mr-4"
              >
                {" "}
					Tools
				{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("ml")}
                active={tab === "ml"}
                className="mr-4"
              >
                {" "}
					ML
				{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("webdev")}
                active={tab === "webdev"}
                className="mr-4"
              >
                {" "}
					Web-Dev
				{" "}
              </TabButton>
			  <TabButton
                selectTab={() => handleTabChange("langs")}
                active={tab === "langs"}
                className="mr-4"
              >
                {" "}
					Languages
				{" "}
              </TabButton>

            </div>
          </div>
          <div className="mt-8 mr-12">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
