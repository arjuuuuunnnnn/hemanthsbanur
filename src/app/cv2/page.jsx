"use client";

import React from "react";
import { SiGmail } from "react-icons/si";
import Link from "next/link";
import { FaLinkedin, FaPhoneAlt, FaGithub } from "react-icons/fa";
import { SlGlobe } from "react-icons/sl";
import Image from "next/image";

const projects = [
  {
    name: "Cropify",
    description: "Cropify is a web application built using React.js, Flask & Machine learning models in the backend",
    link: "https://github.com/arjuuuuunnnnn/Cropify",
    tags: ["Web", "ML"]
  },
  {
    name: "Machine Learning",
    description: "1. Wine quality 2. Kidney disease classification. Data Ingestion, Data Validation, Data Transformation, Model Training, Prediction Pipeline",
    link: "https://github.com/arjuuuuunnnnn/Wine-Quality-End-to-End-ML",
    tags: ["ML"]
  },
  {
    name: "Reg-Model",
    description: "Built a Regression model for a particular dataset with all the statistical analysis",
    link: "https://github.com/arjuuuuunnnnn/Reg-model",
    tags: ["Data Analysis"]
  }
];

const ResumePage = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen bg-[#121212] text-zinc-300 px-2 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-start w-full md:w-3/4 mb-4">
          <div className="flex flex-col items-start flex-1">
            <h1 className="text-2xl font-bold">Hemanth S Banur</h1>
            <p className="text-sm text-gray-400 mb-2">Machine Learning Enthusiast</p>
            <div className="flex flex-wrap">
              <Link href="tel:+916363546350"><FaPhoneAlt className="hover:scale-105 hover:text-white mx-2 my-1"/></Link>
              <Link href="mailto:arjunbanur27@gmail.com"><SiGmail className="hover:scale-105 hover:text-white mx-2 my-1"/></Link>
              <Link href="https://www.linkedin.com/in/hemanth-s-banur-3aaa34284/"><FaLinkedin className="hover:scale-105 hover:text-white mx-2 my-1"/></Link>
              <Link href="https://github.com/arjuuuuunnnnn"><FaGithub className="hover:scale-105 hover:text-white mx-2 my-1"/></Link>
              <Link href="https://hemanthsbanur.vercel.app"><SlGlobe className="hover:scale-105 hover:text-white mx-2 my-1"/></Link>
            </div>
          </div>
          <div className="flex-shrink-0 mt-4 md:mt-0 md:ml-4">
            <Image
              src="/images/About.png"
              alt="Profile Picture"
              width={120}
              height={120}
              className="object-cover rounded-md"
            />
          </div>
        </div>

        <section className="my-2 w-full md:w-3/4">
          <h2 className="font-semibold border-b border-emerald-800 pb-1 mb-4">Education</h2>
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-base">PES University</h3>
              <span className="text-xs font-normal">Nov 2022 - Present</span>
            </div>
            <p className="text-xs">Bangalore, India</p>
            <p className="text-sm">B.Tech in Computer Science and Engineering</p>
          </div>
        </section>

        <section className="my-1 w-full md:w-3/4">
          <h2 className="font-semibold border-b border-emerald-800 pb-1 mb-4">Experience</h2>
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-base">Toyota Kirloskar Motor</h3>
              <span className="text-xs font-normal">June 2024 - July 2024, Full-time</span>
            </div>
            <p className="text-xs">Bangalore, India</p>
            <p className="text-sm">Data Science Intern</p>
            <ul className="list-disc ml-6 text-sm">
              <li>Developed, deployed and maintaining an automated web scraping and review analysis system using NLTK, Developed automated analysis, and report filling web application</li>
            </ul>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-base">CDSAML, PES University</h3>
              <span className="text-xs font-normal">June 2024 - July 2024, Part-time</span>
            </div>
            <p className="text-xs">Bangalore</p>
            <p className="text-sm">Research Intern</p>
            <ul className="list-disc ml-6 text-sm">
              <li>Developing a Multi-Model system, which converts Kannada speech to English Text</li>
              <li>Working under Dr.Shylaja S S</li>
            </ul>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-base">IEEE CS, PES University</h3>
              <span className="text-xs font-normal">Jul 2024 - Aug 2024, Part-time</span>
            </div>
            <p className="text-xs">Bangalore</p>
            <p className="text-sm">Open Source Project Initiative</p>
            <ul className="list-disc ml-6 text-sm">
              <li>Developing a model using hybrid VAE-GAN for image style transfer</li>
            </ul>
          </div>
        </section>

        <section className="my-2 w-full md:w-3/4">
          <h2 className="text-lg font-semibold border-b border-emerald-800 pb-1 mb-4">Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">
                <a href={project.link} className="underline hover:text-emerald-800">{project.name}</a>
              </h3>
              <p className="text-sm">{project.description}</p>
              <div className="flex flex-wrap mt-1 text-xs">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs bg-gray-700 text-white px-2 py-1 mr-2 mb-2 rounded-md">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </section>
      </section>
    </>
  );
};

export default ResumePage;

