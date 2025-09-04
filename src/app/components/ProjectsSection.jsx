"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "HVAC Website",
    description: "HVAC website using wordpress for USA client. ",
    image: "/images/projects/adams.png",
    tag: ["All", "Web"],
    gitUrl: "https://adamssvcs.com/",
    previewUrl: "https://adamssvcs.com/",
  },
    {
    id: 2,
    title: "Agentic Ai Project",
    description: "Agentic Ai project: Website for USA client company Robo Growth Partners. ",
    image: "/images/projects/demo.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/demo",
    previewUrl: "https://demo-henna-two.vercel.app/",
  },
  {
    id: 3,
    title: "E-Commerce Website",
    description: "E-commerce using React.js and Tailwind CSS with firebase authentication and database.",
    image: "/images/projects/FashioNestecommerce.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/e-commerce",
    previewUrl: "https://github.com/SHAJAR5110/e-commerce",
  },
  {
    id: 4,
    title: "Hospital Ai Assistant project for Client",
    description: "Developed an AI-powered voice assistant using GoHighLevel, n8n, and Vapithat handled real-time customer calls, processed voice inputs using Gemini,and automated CRM actions",
    image: "/images/projects/ClientProject.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.linkedin.com/posts/shajar-abbas-45a855268_automation-n8n-vapi-activity-7322056537479241728-ubmx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEGfGUYBiqD39b4369d0DhRnQvjqs9KEa28",
    previewUrl: "https://www.linkedin.com/posts/shajar-abbas-45a855268_automation-n8n-vapi-activity-7322056537479241728-ubmx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEGfGUYBiqD39b4369d0DhRnQvjqs9KEa28",
  },
  {
    id: 5,
    title: "Hackathon Project of GEN AI from PEC",
    description: "Pakistan Engineering Council Hackathon Project: Developed a web app using python and streamlit. Dr. Ai chatbot based on RAG for medical assistance, providing accurate and reliable information to users retrieved from a pdf file using langchain.",
    image: "/images/projects/DrAi.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/Dr.-Ai",
    previewUrl: "https://98czftepcm5knsgki8gtso.streamlit.app/",
  },
  {
    id: 6,
    title: "Data Secure Encryption System",
    description: "Develop a Streamlit-based secure data storage and retrieval system where: Users store data with a unique passkey. Users decrypt data by providing the correct passkey. Multiple failed attempts result in a forced reauthorization (login page). The system operates entirely in memory without external databases.",
    image: "/images/projects/secure.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/Secure-Data-Encryption-System-Using-Streamlit",
    previewUrl: "https://secure-data-encryption-system-using-app-2bcee5yf7ef8dsaabnq5lf.streamlit.app/",
  },
  {
      id: 7,
      title: "Soptify Clone",
      description: "Spotify clone with Html and CSS",
      image: "/images/projects/spotify.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/SHAJAR5110/Spotify-Clone",
      previewUrl: "https://spotify-clone-seven-blush.vercel.app/",
    },
   {
    id: 8,
    title: "Resume Aanalyzer",
    description: "Resume Analyzer is a web application that uses the OpenAI API to analyze resumes and provide feedback on their content and structure. It helps job seekers improve their resumes by offering suggestions for improvement.",
    image: "/images/projects/resumeAnalyzer.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/resume-analyzer",
    previewUrl: "https://www.linkedin.com/posts/shajar-abbas-45a855268_reactjs-flask-generativeai-activity-7330067490103877632-a17V?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEGfGUYBiqD39b4369d0DhRnQvjqs9KEa28",
  },
  {
    id: 9,
    title: "Eco Aware Project",
    description: "Eco Aware is a web application that uses the OpenAI API to provide users with information about eco-friendly products and practices. It helps users make informed decisions about their purchases and lifestyle choices.",
    image: "/images/projects/ecoaware.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/EcoAware",
    previewUrl: "https://eco-aware-six.vercel.app/",
  },
  {
    id: 10,
    title: "React Chatbot using Groq API",
    description: "Chatbot is a web application that uses the Groq API to provide users with a conversational interface for asking questions and receiving answers. It is built using React.js and tailwind CSS and offers a user-friendly experience.",
    image: "/images/projects/myAI.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/chatbot-in-react",
    previewUrl: "https://www.linkedin.com/posts/shajar-abbas-45a855268_reactjs-aichatbot-groq-activity-7330063537194631168-2OTy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEGfGUYBiqD39b4369d0DhRnQvjqs9KEa28",
  },
  {
    id: 11,
    title: "Quote Generator",
    description: "Quote Generator is a web application that uses the Public API to generate random quotes. It is built using React.js and tailwind CSS and offers a user-friendly experience.",
    image: "/images/projects/quote.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/Quote-generator-in-react",
    previewUrl: "https://www.linkedin.com/posts/shajar-abbas-45a855268_reactjs-webdevelopment-opensource-activity-7330055897068605441-yinc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEGfGUYBiqD39b4369d0DhRnQvjqs9KEa28",
  },
  {
    id: 12,
    title: "Google Notes",
    description: "Google Notes is a web application that allows users to create and manage notes. It is built using React.js and tailwind CSS and offers a user-friendly experience.",
    image: "/images/projects/notes.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/Google-notes-in-react",
    previewUrl: "https://google-notes-in-react.vercel.app/",
  },
  {
    id: 13,
    title: "Clone internee",
    description: "Clone internee is a web application that allows users to create and manage notes. It is built using React.js and tailwind CSS and offers a user-friendly experience and responsive UI as well.",
    image: "/images/projects/internee.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/Clone-Internee.pk",
    previewUrl: "https://clone-internee-pk.vercel.app/",
  },
  {
    id: 14,
    title: "Secure Data Encryption System",
    description: "Develop a Streamlit-based secure data storage and retrieval system where: Users store data with a unique passkey. Users decrypt data by providing the correct passkey. Multiple failed attempts result in a forced reauthorization (login page). The system operates entirely in memory without external databases.",
    image: "/images/projects/security.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/Secure-Data-Encryption-System-Using-Streamlit",
    previewUrl: "https://secure-data-encryption-system-using-app-2bcee5yf7ef8dsaabnq5lf.streamlit.app/",
  },
  {
    id: 15,
    title: "Data Sweeper",
    description: "Handling messy CSV and Excel files can be frustrating, but Data Sweeper makes it effortless! This Streamlit-powered web app allows users to upload, clean, visualize, and convert their data in just a few clicks.",
    image: "/images/projects/dataSweeper.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/DataSweeper-in-python",
    previewUrl: "https://datasweeper-in-python-luufexvmupylfidwguujpn.streamlit.app/",
  },

  {
    id: 16,
    title: "Google Unit Converter",
    description: "Google Unit Converter is a simple and easy-to-use unit conversion tool that allows users to convert between different units of measurement. It supports a wide range of units, including length, weight, volume, temperature, and more.",
    image: "/images/projects/googleunitconverter.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/google-unit-conversion",
    previewUrl: "https://app-unit-conversion-cpbdnb26qkpwcuaykfss7z.streamlit.app/",
  },
  {
    id: 17,
    title: "FashioNest 'E-commerce Website'",
    description: "FashioNest is an e-commerce website that offers clothing. It is built using React.js, Next.js, and Tailwind CSS also have a clerk authentication system ,including cart and checkout system.",
    image: "/images/projects/FashioNest.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/FashioNest-Ecommerce",
    previewUrl: "https://fashio-nest-ecommerce.vercel.app/",
  },
  {
    id: 18,
    title: "E-commerce Website",
    description: "E-commerce website with React js(Next.js) and Tailwind css",
    image: "/images/projects/ecommerce.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/Next.js-Ecommerce",
    previewUrl: "https://next-js-ecommerce-snowy.vercel.app/",
  },
  {
    id: 19,
    title: "Game Page",
    description: "The Front-end of Game Page in Next js and Tailwind css", 
    image: "/images/projects/GamePage.png",
    tag: ['All','Web'],
    gitUrl: "https://github.com/SHAJAR5110/GamePage-Frontend",
    previewUrl: "https://game-page-frontend.vercel.app/",
  },
  {
    id: 20,
    title: "Mini Project",
    description: "Mini Project for learning purpose",
    image: "/images/projects/MiniProject.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/Mini-project",
    previewUrl: "https://mini-project-navy-three.vercel.app/",
  },
  {
    id: 21,
    title: "Number Guessing Game in Python",
    description: "CLI based number guessing game",
    image: "/images/projects/NumbreGuessing.png",
    tag: ["All", "Other"],
    gitUrl: "https://github.com/SHAJAR5110/numberGuessingGame-in-python",
    previewUrl: "/",
  },
  {
    id: 22,
    title: "Domestic Services Web App",
    description: "The FixNow is Domestic Services Web App for all your home needs, 24/7 service providers are available.",
    image: "/images/projects/fixnow.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 23,
    title: "Top-down Car Game in C#",
    description: "The Simple Top-down Car Game in C# using Windows Form Application",
    image: "/images/projects/topdown.png",
    tag: ['All','Other'],
    gitUrl: "https://github.com/SHAJAR5110/GUI-Top-down-car-game",
    previewUrl: "/",
  },
  {
    id: 24,
    title: "Calculator",
    description: "use this command in your terminal to calculate, npm i cmd-simple-calculator",
    image: "/images/projects/cmdCalculator.png",
    tag: ['All','Npm'],
    gitUrl: "https://github.com/SHAJAR5110/Cmd-calculator",
    previewUrl: "/",
  },
  {
    id: 25,
    title: "Number Guessing Game",
    description: "use this command in your terminal to play, npm i cli-mini-number-guessing-game",
    image: "/images/projects/cmdNGG.png",
    tag: ['All','Npm'],
    gitUrl: "https://github.com/SHAJAR5110/Number-Guessing-Game",
    previewUrl: "/",
  },
  {
    id: 26,
    title: " ATM Machine",
    description: "use this command in your terminal, npm i united-atm-machine",
    image: "/images/projects/ATM.png",
    tag: ['All','Npm'],
    gitUrl: "https://github.com/SHAJAR5110/ATM-machine",
    previewUrl: "/",
  },
  {
    id: 27,
    title: " Words Counter",
    description: "The words counter is made with Typescript, Node js and inquirer. For use just type 'nmp i count-my-words' in your cmd.",
    image: "/images/projects/WordCounter.png",
    tag: ['All','Npm'],
    gitUrl: "https://github.com/SHAJAR5110/words-counter",
    previewUrl: "/",
  },
  {
    id: 28,
    title: " Todo Task",
    description: "Todo Web App",
    image: "/images/projects/TodoWeb.png",
    tag: ['All','Web'],
    gitUrl: "https://github.com/SHAJAR5110/To-do-Task",
    previewUrl: "/",
  },
  {
    id: 29,
    title: " Calculator",
    description: "Calculator Web App",
    image: "/images/projects/WebCalculator.jpeg",
    tag: ['All','Web'],
    gitUrl: "https://github.com/SHAJAR5110/To-do-Task",
    previewUrl: "/",
  },
  {
    id: 30,
    title: " Different Python Codes",
    description: "",
    image: "/images/projects/DpythonCodes.png",
    tag: ['All','Other'],
    gitUrl: "https://github.com/SHAJAR5110/python-small-projects",
    previewUrl: "/",
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
