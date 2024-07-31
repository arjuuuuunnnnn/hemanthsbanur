import React from "react";
import { SiGmail } from "react-icons/si";
import Link from "next/link";
import { FaLinkedin, FaPhoneAlt, FaGithub } from "react-icons/fa";
import { SlGlobe } from "react-icons/sl";
import Image from "next/image";

import projects from './projects.json';
import skills from './skills.json';
import activitiesAndAchievements from './act-ach.json';
import experience from './experience.json';

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-[#000000] text-zinc-400 p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1 pr-4">
            <h1 className="text-2xl font-bold text-zinc-300">Hemanth S Banur</h1>
            <p className="text-sm text-gray-400 mb-2">Machine Learning & MLOps Enthusiast</p>
            <div className="flex flex-wrap text-zinc-300">
              <Link href="tel:+916363546350"><FaPhoneAlt className="hover:scale-105 hover:text-white mx-2 my-1"/></Link>
              <Link href="mailto:arjunbanur27@gmail.com"><SiGmail className="hover:scale-105 hover:text-white mx-2 my-1"/></Link>
              <Link href="https://www.linkedin.com/in/hemanth-s-banur/"><FaLinkedin className="hover:scale-105 hover:text-white mx-2 my-1"/></Link>
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

        <section className="mb-4">
          <h2 className="text-lg font-semibold border-b border-emerald-800 pb-1 mb-2 text-zinc-300">Summary</h2>
          <p className="text-sm">
            Passionate Machine Learning and MLOps enthusiast with a strong foundation in Computer Science. 
            Experienced in developing ML models, implementing MLOps practices, and creating web applications.
          </p>
        </section>
		
        <section className="mb-4">
          <h2 className="text-lg font-semibold border-b border-emerald-800 pb-1 mb-2 text-zinc-300">Skills</h2>
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="mb-2">
              <h3 className="font-semibold text-sm text-zinc-300">{category}:</h3>
              <p className="text-sm">{skillList.join(", ")}</p>
            </div>
          ))}
        </section>
	    
        <section className="mb-4">
          <h2 className="text-lg font-semibold border-b border-emerald-800 pb-1 mb-2 text-zinc-300">Education</h2>
          <div>
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-base text-zinc-300">PES University</h3>
              <span className="text-xs font-normal">Nov 2022 - Present</span>
            </div>
            <p className="text-xs">Bangalore, India</p>
            <p className="text-sm">B.Tech in Computer Science and Engineering</p>
          </div>
        </section>

        <section className="mb-4">
          <h2 className="text-lg font-semibold border-b border-emerald-800 pb-1 mb-2 text-zinc-300">Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-base text-zinc-300">{exp.title}</h3>
                  <p className="text-sm text-zinc-300">{exp.position}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-normal">{exp.duration}</span>
                  <p className="text-xs">{exp.location}</p>
                </div>
              </div>
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
          <h2 className="text-lg font-semibold border-b border-emerald-800 pb-1 mb-2 text-zinc-300">Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="mb-2">
              <h3 className="font-semibold text-zinc-300">
                <a href={project.link} className="underline hover:text-white">{project.name}</a>
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

        <section className="mb-4">
          <h2 className="text-lg font-semibold border-b border-emerald-800 pb-1 mb-2 text-zinc-300">Activities & Achievements</h2>
          {activitiesAndAchievements.map((item, index) => (
            <div key={index} className="mb-2">
              <h3 className="font-semibold text-sm text-zinc-300">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ResumePage;
