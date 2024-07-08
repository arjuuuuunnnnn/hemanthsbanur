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
    tags: ["ReactJS", "Flask", "ML"]
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
    <div className="min-h-screen bg-[#121212] text-zinc-300 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-start mb-8">
          <div className="flex-1 pr-4">
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
          <div className="flex-shrink-0">
            <Image
              src="/images/cv-img.jpeg"
              alt="Profile Picture"
              width={120}
              height={120}
              className="object-cover rounded-md"
            />
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-lg font-semibold border-b border-emerald-800 pb-1 mb-4">Education</h2>
          <div>
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-base">PES University</h3>
              <span className="text-xs font-normal">Nov 2022 - Present</span>
            </div>
            <p className="text-xs">Bangalore, India</p>
            <p className="text-sm">B.Tech in Computer Science and Engineering</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold border-b border-emerald-800 pb-1 mb-4">Experience</h2>
          {[
            
			{
              title: "IEEE CS, PES University",
              position: "Open Source Project Initiative",
              duration: "Jul 2024 - Aug 2024, Part-time",
              location: "Bangalore",
              description: "Developing a hybrid GAN-VAE model for artistic style transfer"
            },
			  {
              title: "Toyota Kirloskar Motor",
              position: "Data Science Intern",
              duration: "Jun 2024 - Jul 2024, Full-time",
              location: "Bangalore, India",
              description: "Developed, deployed and maintaining an automated web scraping and review analysis system using NLTK, Developed automated analysis, and report filling web application"
            },
            {
              title: "CDSAML, PES University",
              position: "Research Intern",
              duration: "Jun 2024 - Jul 2024, Part-time",
              location: "Bangalore",
              description: [
                "Developing a Multi-Model system, which converts Kannada speech to English Text",
                "Working under Dr.Shylaja S S"
              ]
            }
		  ].map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-base">{exp.title}</h3>
                <span className="text-xs font-normal">{exp.duration}</span>
              </div>
              <p className="text-xs">{exp.location}</p>
              <p className="text-sm">{exp.position}</p>
              {Array.isArray(exp.description) ? (
                <ul className="list-disc ml-6 text-sm">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm">{exp.description}</p>
              )}
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-lg font-semibold border-b border-emerald-800 pb-1 mb-4">Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">
                <a href={project.link} className="underline hover:text-emerald-800">{project.name}</a>
              </h3>
              <p className="text-sm">{project.description}</p>
              <div className="flex flex-wrap mt-1">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs bg-gray-700 text-white px-2 py-1 mr-2 mb-2 rounded-md">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ResumePage;
