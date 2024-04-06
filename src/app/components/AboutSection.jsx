"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content:(
            <ul className="list-disc pl-2">
                <li>Node js</li>
                <li>express js</li>
                <li>react js</li>
                <li>jshdhsbdv</li>
                <li>akdhcidbcujwbsdkucws</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content:(
            <ul className="list-disc pl-2">
                <li>PES University</li>
                <li>SSSLS PU college</li>
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
    <section className="text-zinc-400">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex-col h-full">
          <h2 className="text-4xl font-bold text-emerald-800">About Me</h2>
          <p className="text-base md:text-lg text-zinc-400">
            hello i'm hemanth s banut i'm ahdcbuysdbcw
            akshcbwidubcewiedcfwefvwev wevw
            vewrvesrvervedvsdvwsrgetfbzearhtsrdfseratesrhgxf
            bdsvfwasethrxgfdvsfrawtsehrdxgfbvx csfwtsethgxbvdfwtseyrdhgfxbcxz
            fteshfgcvftsehgxbczfatshxF xcsdArwegdxbxcsafsgdfvb
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
          </div>
        </div>
    </section>
  );
};

export default AboutSection;
