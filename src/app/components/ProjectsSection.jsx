"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";


const projectsData = [
  {
    id: 1,
    title: "Cropify",
    description: "A farmer friendly web-application uses machine learning algorithms",
    image: "/images/projects/1.png",
    gitUrl: "https://github.com/arjuuuuunnnnn/Cropify",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "End-to-End Machine Learning Projects",
    description: "From data ingestion to Deployment",
    image: "/images/projects/2.png",
    gitUrl: "https://github.com/arjuuuuunnnnn/Wine-Quality-End-to-End-ML",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Core Machine Learning",
    description: "Built my own Regression model",
    image: "/images/projects/3.png",
    gitUrl: "https://github.com/arjuuuuunnnnn/Reg-model",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "MLOps Project",
    description: "usage of ZenML, DVC, mlflow",
    image: "/images/projects/4.png",
    gitUrl: "https://github.com/arjuuuuunnnnn/Customer-Satisfaction-MLOps",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Zombie v/s Player 3D game",
    description: "An Unity built game, a player with armour firing zombies",
    image: "/images/projects/5.png",
    gitUrl: "https://github.com/arjuuuuunnnnn/Zombie-3D",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "My Portfolio",
    description: "Next JS built web application",
    image: "/images/projects/6.png",
    gitUrl: "https://github.com/arjuuuuunnnnn/Portfolio",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
	return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-emerald-800 mt-4 mb-8 md:mb-12 font-sans">
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 font-sans">
        {projectsData.map((project) => (
          <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          imgUrl={project.image}
          gitUrl={project.gitUrl}
          previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
