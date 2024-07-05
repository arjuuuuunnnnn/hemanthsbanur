"use client";

import React from "react";
import Head from 'next/head';

const ResumePage = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baskervville+SC&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section className="flex flex-col items-center justify-center min-h-screen bg-[#121212] text-zinc-300">
        <h1 className="text-2xl font-bold mb-4">Hemanth S Banur</h1>
        <p className="text-xs mb-2 w-3/4">
          <a href="tel:+916363546350" className="underline hover:text-emerald-800">+91 636 354 6350</a> |
          <a href="mailto:arjunbanur27@gmail.com" className="underline hover:text-emerald-800">arjunbanur27@gmail.com</a> |
          <a href="https://www.linkedin.com/in/hemanth-s-banur-3aaa34284/" className="underline hover:text-emerald-800">LinkedIn</a> |
          <a href="https://github.com/arjuuuuunnnnn" className="underline hover:text-emerald-800">GitHub</a> |
          <a href="https://hemanthsbanur.vercel.app" className="underline hover:text-emerald-800">Portfolio</a> |
          Bangalore, India
        </p>

        <section className="my-6 w-3/4">
          <h2 className="text-lg font-semibold border-b border-emerald-800 pb-1 mb-4">Education</h2>
          <div className="mb-4">
            <h3 className="font-semibold">PES University</h3>
            <p>Bangalore, India</p>
            <p>B.Tech in Computer Science and Engineering; Nov 2022 -- Present</p>
          </div>
        </section>

        <section className="my-6 w-3/4">
          <h2 className="text-lg font-semibold border-b border-emerald-800 pb-1 mb-4">Experience</h2>
          <div className="mb-4">
            <h3 className="font-semibold">Toyota Kirloskar Motor</h3>
            <p>Bangalore</p>
            <p>Data Science Intern; Jun 2024 -- Jul 2024, Full-time</p>
            <ul className="list-disc ml-6">
              <li>Developed, deployed and maintaining an automated web scraping and review analysis system using NLTK, Developed automated analysis, and report filling web application</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">CDSAML, PES University</h3>
            <p>Bangalore</p>
            <p>Research Intern; Jun 2024 -- Jul 2024, Part-time</p>
            <ul className="list-disc ml-6">
              <li>Developing a Multi-Model system, which converts Kannada speech to English Text</li>
              <li>Working under Dr.Shylaja S S</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Appex, AURA (co-curricular clubs), PES University</h3>
            <p>Bangalore</p>
            <p>Technical Head, Technical Member; Dec 2023 -- Present, Part-time</p>
            <ul className="list-disc ml-6">
              <li>Organized "AppGenesis," an ideathon event, served as a mentor for the same, providing guidance and support to participants throughout the event</li>
              <li>Organized "Crayion," a hackathon event focused on image generation using advanced models such as DALL-E and MidJourney</li>
            </ul>
          </div>
        </section>

        <section className="my-6 w-3/4">
          <h2 className="text-lg font-semibold border-b border-emerald-800 pb-1 mb-4">Projects</h2>
          <div className="mb-4">
            <h3 className="font-semibold"><a href="https://github.com/arjuuuuunnnnn/Cropify" className="underline hover:text-emerald-800">Cropify</a></h3>
            <p>Cropify is a web application built using React.js, flask & Machine learning models in the backend</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold"><a href="https://github.com/arjuuuuunnnnn/Wine-Quality-End-to-End-ML" className="underline hover:text-emerald-800">Machine Learning</a></h3>
            <p>1. wine quality 2. Kidney disease classification</p>
            <p>Data Ingestion, Data Validation, Data Transformation, Model Training, Prediction Pipeline</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold"><a href="https://github.com/arjuuuuunnnnn/Reg-model" className="underline hover:text-emerald-800">Reg-Model</a></h3>
            <p>Built a Regression model for a particular dataset with all the statistical analysis</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default ResumePage;

