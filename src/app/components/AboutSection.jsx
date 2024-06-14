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
          <span className="mr-2 mb-2"><VscAzure className="h-8 w-8" /></span>
          <span className="mr-2 mb-2"><SiDebian className="h-8 w-8"/></span>
          <span className="mr-2 mb-2"><SiDocker className="h-8 w-8"/></span>
          <span className="mr-2 mb-2"><FaGithub className="h-8 w-8"/></span>
          <span className="mr-2 mb-2"><FaGitAlt className="h-8 w-8"/></span>
          <span className="mr-2 mb-2"><SiKalilinux className="h-8 w-8"/></span>
          <span className="mr-2 mb-2"><FaLinux className="h-8 w-8"/></span>
          <span className="mr-2 mb-2"><SiNeovim className="h-8 w-8"/></span>
          <span className="mr-2 mb-2"><FaUnity className="h-8 w-8"/></span>
          <span className="mr-2 mb-2"><SiVim className="h-8 w-8"/></span>
          <span className="mr-2 mb-2"><VscVscodeInsiders className="h-8 w-8"/></span>
          <span className="mr-2 mb-2"><SiPostman className="h-8 w-8"/></span>
		      <span className="mr-2 mb-2"><SiFlutter className="h-8 w-8"/></span>
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
          <span className="mr-2 mb-2"><FaHtml5 className="h-8 w-8"/></span>
          <span className="mr-2 mb-2"><FaCss3 className="h-8 w-8"/></span>
          <span className="mr-2 mb-2"><SiJavascript className="h-8 w-8"/></span>
          <span className="mr-2 mb-2"><FaReact className="h-8 w-8"/></span>
          <span className="mr-2 mb-2"><TbBrandNextjs className="h-8 w-8"/></span>
          <span className="mr-2 mb-2"><FaNodeJs className="h-8 w-8"/></span>
          <span className="mr-2 mb-2"><SiTailwindcss className="h-8 w-8"/></span>
          <span className="mr-2 mb-2"><SiFirebase className="h-8 w-8"/></span>
          <span className="mr-2 mb-2"><SiFlask className="h-8 w-8"/></span>
          <span className="mr-2 mb-2"><SiMongodb className="h-8 w-8"/></span>
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
          <span className="mr-2 mb-2"><TbBrandCoinbase className="h-8 w-8"/></span>
          <span className="mr-2 mb-2"><TbBrandCpp className="h-8 w-8"/></span>
          <span className="mr-2 mb-2"><SiPython className="h-8 w-8"/></span>
          <span className="mr-2 mb-2"><SiDart className="h-8 w-8"/></span>
		      <span className="mr-2 mb-2"><TbBrandCSharp className="h-8 w-8"/></span>
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
        <span className="mr-2 mb-2"><SiScikitlearn className="h-8 w-8"/></span>
        <span className="mr-2 mb-2"><SiPytorch className="h-8 w-8"/></span>
        <span className="mr-2 mb-2"><SiTensorflow className="h-8 w-8"/></span>
        <span className="mr-2 mb-2"><SiOpencv className="h-8 w-8"/></span>
		    <span className="mr-2 mb-2"><SiPandas className="h-8 w-8"/></span>
        <span className="mr-2 mb-2"><SiNumpy className="h-8 w-8"/></span>
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
    <section id="about" className="text-zinc-400">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/About.png"
          width={500}
          height={900}
          alt="About Image"
        />
        <div className="mt-4 md:mt-0 text-left flex-col h-full">
          <h2 className="text-4xl font-bold text-emerald-800">
            <br />
            <br />
            <br />
            <br />
            About Me
          </h2>
          <br />
          <p className="text-zinc-400">
            Hello I&apos;m{" "}
            <strong className="font-extrabold">Hemanth S Banur</strong>
            <br />
            Just your average 19-year-old programmer, problem solver, and tech
            enthusiast.
            <br />
            <strong className="font-extrabold text-emerald-800">
              sudo apt-get install programmer
            </strong>
            <br />
            <br />
            Of course, that&apos;s not all. I also happen to be a game developer
            and a web developer. I mean, who needs a social life when you can
            spend your days{" "}
            <strong className="font-extrabold text-emerald-800">
              git push
            </strong>
            ing and{" "}
            <strong className="font-extrabold text-emerald-800">
              npm install
            </strong>
            ing, am I right?
            <br />
            <br />
            And let&apos;s not forget my undying love for machine learning. I
            practically live in the terminal, running{" "}
            <strong className="font-extrabold text-emerald-800">
              python3 ml_model.py
            </strong>{" "}
            until the sun comes up. It&apos;s a tough job, but someone&apos;s
            gotta do it.
            <br />
            <strong className="font-extrabold text-emerald-800">
              sudo apt-get install machine-learning
            </strong>
            <br />
            <br />
            Oh, and did I mention I&apos;m a total Linux enthusiast? I bet you
            couldn&apos;t tell from all the{" "}
            <strong className="font-extrabold text-emerald-800">
              sudo
            </strong>{" "}
            commands
            <br />
            <br />
            Anyway, that&apos;s me in a nutshell. I&apos;m a well-rounded
            individual with a diverse skillset and an insatiable thirst for
            knowledge. Now, if you&apos;ll excuse me, I need to go{" "}
            <strong className="font-extrabold text-emerald-800">
              sudo reboot
            </strong>{" "}
            my brain and come up with some more captivating hobbies
            <br />
          </p>
          <div className="mt-8">
            <h5 className="text-3xl font-bold text-emerald-800 mb-3">
              My Tech Stack
            </h5>
            <div className="flex flex-row justify-start mr-12">
              <TabButton
                selectTab={() => handleTabChange("devtools")}
                active={tab === "devtools"}
                className="mr-4"
              >
                {" "}
					Dev-Tools
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
