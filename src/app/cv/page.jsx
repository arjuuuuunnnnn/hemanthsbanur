"use client";

import React from "react";
import { SiGmail } from "react-icons/si";
import Link from "next/link";
import { FaLinkedin, FaPhoneAlt, FaGithub} from "react-icons/fa";
import { SlGlobe } from "react-icons/sl";

const ResumePage = () => {
  return (
    <> 
      <section className="flex flex-col items-center justify-center min-h-screen bg-[#121212] text-zinc-300">
        <h1 className="text-2xl font-bold mb-4">Hemanth S Banur</h1>
        <div className="flex justify-center items-center mb-1 w-3/4 text-xs">
          <Link href="tel:+916363546350"><FaPhoneAlt className="hover:scale-105 hover:text-white mx-5"/></Link>
          <Link href="mailto:arjunbanur27@gmail.com"><SiGmail className="hover:scale-105 hover:text-white mx-5"/></Link>
          <Link href="https://www.linkedin.com/in/hemanth-s-banur-3aaa34284/"><FaLinkedin className="hover:scale-105 hover:text-white mx-5"/></Link>
          <Link href="https://github.com/arjuuuuunnnnn"><FaGithub className="hover:scale-105 hover:text-white mx-5"/></Link>
          <Link href="https://hemanthsbanur.vercel.app"><SlGlobe className="hover:scale-105 hover:text-white mx-5"/></Link>
        </div>

        <section className="my-2 w-3/4">
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

        <section className="my-1 w-3/4">
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

        <section className="my-2 w-3/4">
          <h2 className="text-lg font-semibold border-b border-emerald-800 pb-1 mb-4">Projects</h2>
          <div className="mb-4">
            <h3 className="font-semibold"><a href="https://github.com/arjuuuuunnnnn/Cropify" className="underline hover:text-emerald-800">Cropify</a></h3>
            <p className="text-sm">Cropify is a web application built using React.js, flask & Machine learning models in the backend</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold"><a href="https://github.com/arjuuuuunnnnn/Wine-Quality-End-to-End-ML" className="underline hover:text-emerald-800">Machine Learning</a></h3>
            <p className="text-sm">1. wine quality 2. Kidney disease classification</p>
            <p className="text-sm">Data Ingestion, Data Validation, Data Transformation, Model Training, Prediction Pipeline</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold"><a href="https://github.com/arjuuuuunnnnn/Reg-model" className="underline hover:text-emerald-800">Reg-Model</a></h3>
            <p className="text-sm">Built a Regression model for a particular dataset with all the statistical analysis</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default ResumePage;
