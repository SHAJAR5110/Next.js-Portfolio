"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Game Page",
    description: "The Front-end of Game Page in Next js and Tailwind css", 
    image: "/images/projects/GamePage.png",
    tag: ['All','Web'],
    gitUrl: "https://github.com/SHAJAR5110/GamePage-Frontend",
    previewUrl: "https://game-page-frontend.vercel.app/",
  },
  {
    id: 2,
    title: "Static Resume",
    description: "Responsive static resume",
    image: "/images/projects/static.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/static-resume",
    previewUrl: "https://my-resume-chi-eight.vercel.app/",
  },
  {
    id: 3,
    title: "Mini Project",
    description: "Mini Project for learning purpose",
    image: "/images/projects/MiniProject.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/Mini-project",
    previewUrl: "https://mini-project-navy-three.vercel.app/",
  },
  {
    id: 4,
    title: "Number Guessing Game in Python",
    description: "CLI based number guessing game",
    image: "/images/projects/NumbreGuessing.png",
    tag: ["All", "Other"],
    gitUrl: "https://github.com/SHAJAR5110/numberGuessingGame-in-python",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Domestic Services Web App",
    description: "The FixNow is Domestic Services Web App for all your home needs, 24/7 service providers are available.",
    image: "/images/projects/fixnow.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Top-down Car Game in C#",
    description: "The Simple Top-down Car Game in C# using Windows Form Application",
    image: "/images/projects/topdown.png",
    tag: ['All','Other'],
    gitUrl: "https://github.com/SHAJAR5110/GUI-Top-down-car-game",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Calculator",
    description: "use this command in your terminal to calculate, npm i cmd-simple-calculator",
    image: "/images/projects/cmdCalculator.png",
    tag: ['All','Npm'],
    gitUrl: "https://github.com/SHAJAR5110/Cmd-calculator",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Number Guessing Game",
    description: "use this command in your terminal to play, npm i cli-mini-number-guessing-game",
    image: "/images/projects/cmdNGG.png",
    tag: ['All','Npm'],
    gitUrl: "https://github.com/SHAJAR5110/Number-Guessing-Game",
    previewUrl: "/",
  },
  {
    id: 9,
    title: " ATM Machine",
    description: "use this command in your terminal, npm i united-atm-machine",
    image: "/images/projects/ATM.png",
    tag: ['All','Npm'],
    gitUrl: "https://github.com/SHAJAR5110/ATM-machine",
    previewUrl: "/",
  },
  {
    id: 10,
    title: " Words Counter",
    description: "The words counter is made with Typescript, Node js and inquirer. For use just type 'nmp i count-my-words' in your cmd.",
    image: "/images/projects/WordCounter.png",
    tag: ['All','Npm'],
    gitUrl: "https://github.com/SHAJAR5110/words-counter",
    previewUrl: "/",
  },
  {
    id: 11,
    title: " Todo Task",
    description: "Todo Web App",
    image: "/images/projects/TodoWeb.png",
    tag: ['All','Web'],
    gitUrl: "https://github.com/SHAJAR5110/To-do-Task",
    previewUrl: "/",
  },
  {
    id: 12,
    title: " Calculator",
    description: "Calculator Web App",
    image: "/images/projects/WebCalculator.jpeg",
    tag: ['All','Web'],
    gitUrl: "https://github.com/SHAJAR5110/To-do-Task",
    previewUrl: "/",
  },
  {
    id: 13,
    title: " Different Python Codes",
    description: "",
    image: "/images/projects/DpythonCodes.png",
    tag: ['All','Other'],
    gitUrl: "https://github.com/SHAJAR5110/python-small-projects",
    previewUrl: "/",
  },
  {
    id: 14,
    title: "Soptify Clone",
    description: "Spotify clone with Html and CSS",
    image: "/images/projects/spotify.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/Spotify-Clone",
    previewUrl: "https://spotify-clone-seven-blush.vercel.app/",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Npm"
          isSelected={tag === "Npm"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Other"
          isSelected={tag === "Other"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
