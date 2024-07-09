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
    tags: ["ReactJS", "Flask", "scikit-learn", "keras"]
  },
  {
    name: "MLOps",
    description: ["1. Credit Card Fraud Detection 2. Customer Satisfaction.", "Used pipelining, DagsHub, ZenML, mlFlow"],
    link: "https://github.com/arjuuuuunnnnn/CreditCard-Fraud-Detect-MLOps",
    tags: ["dagshub", "mlflow", "python"]
  },
  {
    name: "Machine Learning",
    description: "1. Wine quality 2. Kidney disease classification. Data Ingestion, Data Validation, Data Transformation, Model Training, Prediction Pipeline",
    link: "https://github.com/arjuuuuunnnnn/Wine-Quality-End-to-End-ML",
    tags: ["scikit-learn", "dvc", "python"]
  },
  {
    name: "Reg-Model",
    description: "Built a Regression model for a particular dataset with all the statistical analysis",
    link: "https://github.com/arjuuuuunnnnn/Reg-model",
    tags: ["Data Analysis", "scikit-learn", "python"]
  },
  {
    name: "Zombie v/s player 3D",
    description: "An Unity Developed 3D game",
    link: "https://github.com/arjuuuuunnnnn/Zombie-3D",
    tags: ["Unity", "C#"]
  }
];

const skills = {
  Languages: ["C/C++", "C#", "Python", "JavaScript", "TypeScript", "MATLAB", "HTML", "CSS"],
  Libraries: ["Pandas", "Numpy", "Scikit-Learn", "OpenCV", "PyTorch", "TensorFlow", "Matplotlib", "Seaborn", "NLTK"],
  "Frameworks/Tools": ["Docker", "React.js", "Node.js", "MongoDB", "Git", "Unity", "Azure", "mlflow", "ZenML", "Flask", "Dagshub", "Firebase", "Django", "Flutter", "Linux"]
};

const activitiesAndAchievements = [
  {
    title: "Practical Approach to ML:",
    description: "Won 1st place in the hackathon organised by CIE PESU held for 8 weeks (Apr 2024)"
  },
  {
    title: "Appex | Technical Lead",
    description: "Organised \"AppGenesis,\" an ideation event, served as a mentor for the same, providing guidance and support to participants throughout the event"
  },
  {
    title: "Aura | Technical member",
    description: "Organized \"Crayion\", a hackathon event focused on image generation using advanced models such as DALL-E and Midjourney"
  }
];


const ResumePage = () => {
  return (
    <div className="min-h-screen bg-[#000000] text-zinc-400 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-start mb-8">
          <div className="flex-1 pr-4">
            <h1 className="text-2xl font-bold text-zinc-300">Hemanth S Banur</h1>
            <p className="text-sm text-gray-400 mb-2">Machine Learning & MLOps Enthusiast</p>
            <div className="flex flex-wrap text-zinc-300">
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
          <h2 className="text-lg font-semibold border-b border-emerald-800 pb-1 mb-4">Summary</h2>
          <p className="text-sm">
            Passionate Machine Learning and MLOps enthusiast with a strong foundation in Computer Science. 
            Experienced in developing ML models, implementing MLOps practices, and creating web applications. 
            Skilled in various programming languages and frameworks, with a keen interest in solving complex 
            problems through innovative technological solutions. Committed to continuous learning and 
            staying updated with the latest advancements in software development.
          </p>
        </section>
		
		<section className="mb-8">
			<h2 className="text-lg font-semibold border-b border-emerald-800 pb-1 mb-4">Skills</h2>
				{Object.entries(skills).map(([category, skillList]) => (
			<div key={category} className="mb-2">
				<h3 className="font-semibold text-sm text-zinc-300">{category}:</h3>
				<p className="text-sm">{skillList.join(", ")}</p>
			</div>
			))}
		</section>
	    
        <section className="mb-8">
          <h2 className="text-lg font-semibold border-b border-emerald-800 pb-1 mb-4">Education</h2>
          <div>
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-base text-zinc-300">PES University</h3>
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
              description: ["Developed an automated web scraping and review analysis system using NLTK, used by all the employees reducing manual work time from 6-7 hours to 8-10 seconds",
				  "Developed an automated daily remote data pre-processor, analyser, visualizer"
			  ]
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
          <h2 className="text-lg font-semibold border-b border-emerald-800 pb-1 mb-4">Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="mb-4">
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

	    <section className="mb-8">
			<h2 className="text-lg font-semibold border-b border-emerald-800 pb-1 mb-4">Activities & Achievements</h2>
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
