"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <strong className="font-extrabold">PES University</strong> [2022 -
          Present]
        </li>
        <li>
          <strong className="font-extrabold">SSSLS PU college</strong> [2020 -
          2022]
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Web Dev</li>
        <li>Machine Learning</li>
        <li>Game Dev</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id="about" className="text-zinc-400">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/About.png" width={500} height={900} alt="About Image"/>
        <div className="mt-4 md:mt-0 text-left flex-col h-full">
          <h2 className="text-4xl font-bold text-emerald-800">
            <br />
            <br />
            <br />
            <br />
            About Me
          </h2>
			<br/>
          <p className="text-base md:text-lg text-zinc-400">
            Hello{" "}
            <strong className="font-extrabold">I&apos;m Hemanth S Banur</strong>
            <br />
            Just your average 19-year-old programmer, problem solver, and tech
            enthusiast.
            <br />
            <strong className="font-extrabold text-emerald-800">
              sudo apt-get install programmer
            </strong>
            <br />
            <br />
            Of course, that&apos;s not all. I also happen to be a game developer and
            a web developer. I mean, who needs a social life when you can spend
            your days{" "}
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
            until the sun comes up. It&apos;s a tough job, but someone&apos;s gotta do it.
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
            Anyway, that&apos;s me in a nutshell. I&apos;m a well-rounded individual with
            a diverse skillset and an insatiable thirst for knowledge. Now, if
            you&apos;ll excuse me, I need to go{" "}
            <strong className="font-extrabold text-emerald-800">
              sudo reboot
            </strong>{" "}
            my brain and come up with some more captivating hobbies
            <br />
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Education{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Skills{" "}
            </TabButton> */}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
