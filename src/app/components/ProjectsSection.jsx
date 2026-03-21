"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  // ============ HACKATHONS ============
  {
    id: 1,
    title: "Digital FTE Silver Tier Hackathon",
    description: "Hackathon project - Digital FTE Silver Tier competition solution.",
    image: "/github-project.svg",
    tag: ["All", "Hackathon"],
    gitUrl: "https://github.com/SHAJAR5110/Digital-FTE-silver-tier-",
    previewUrl: "https://github.com/SHAJAR5110/Digital-FTE-silver-tier-",
  },
  {
    id: 2,
    title: "Digital FTE Gold Tier Hackathon",
    description: "Hackathon project - Digital FTE Gold tier competition.",
    image: "/github-project.svg",
    tag: ["All", "Hackathon"],
    gitUrl: "https://github.com/SHAJAR5110/Digital-FTE-Gold-tier",
    previewUrl: "https://github.com/SHAJAR5110/Digital-FTE-Gold-tier",
  },
  {
    id: 3,
    title: "Digital FTE Bronze Tier Hackathon",
    description: "Hackathon project - Digital FTE Bronze tier competition.",
    image: "/github-project.svg",
    tag: ["All", "Hackathon"],
    gitUrl: "https://github.com/SHAJAR5110/Digital-FTE-bronze-tier",
    previewUrl: "https://github.com/SHAJAR5110/Digital-FTE-bronze-tier",
  },
  {
    id: 4,
    title: "Hackathon II Phase 4",
    description: "Phase 4 of Hackathon II competition project.",
    image: "/github-project.svg",
    tag: ["All", "Hackathon"],
    gitUrl: "https://github.com/SHAJAR5110/hackathon-II-phase-4",
    previewUrl: "https://github.com/SHAJAR5110/hackathon-II-phase-4",
  },
  {
    id: 5,
    title: "Hackathon II Phase 3",
    description: "Phase 3 of Hackathon II competition project.",
    image: "/github-project.svg",
    tag: ["All", "Hackathon"],
    gitUrl: "https://github.com/SHAJAR5110/hackathon-II-phase-3",
    previewUrl: "https://github.com/SHAJAR5110/hackathon-II-phase-3",
  },
  {
    id: 6,
    title: "Hackathon II Phase 2",
    description: "Phase 2 of Hackathon II competition project.",
    image: "/github-project.svg",
    tag: ["All", "Hackathon"],
    gitUrl: "https://github.com/SHAJAR5110/Hackathon-II-phase2",
    previewUrl: "https://github.com/SHAJAR5110/Hackathon-II-phase2",
  },
  {
    id: 7,
    title: "Hackathon II Phase 1",
    description: "Phase 1 of Hackathon II competition project.",
    image: "/github-project.svg",
    tag: ["All", "Hackathon"],
    gitUrl: "https://github.com/SHAJAR5110/Hackathon-II-phase1",
    previewUrl: "https://github.com/SHAJAR5110/Hackathon-II-phase1",
  },

  // ============ AGENTIC AI & FYP ============
  {
    id: 8,
    title: "VidAgent Nexus - Final Year Project",
    description: "Final year project (FYP): Hiring AI agents platform that helps users create and manage outreach using short videos and email in a dashboard.",
    image: "/github-project.svg",
    tag: ["All", "Web", "AI"],
    gitUrl: "https://github.com/SHAJAR5110/vidagent-nexus",
    previewUrl: "https://github.com/SHAJAR5110/vidagent-nexus",
  },
  {
    id: 9,
    title: "Agentic AI - Advanced Autonomous Agents",
    description: "Comprehensive project exploring autonomous AI agents with OpenAI SDK. Learn to build intelligent systems that can reason, plan, use tools, and adapt with memory.",
    image: "/github-project.svg",
    tag: ["All", "AI"],
    gitUrl: "https://github.com/SHAJAR5110/Agentic-Ai-",
    previewUrl: "https://github.com/SHAJAR5110/Agentic-Ai-",
  },
  {
    id: 10,
    title: "Open Agent Skills Tool",
    description: "Open agent skills tool - npx skills. A command-line tool for agent management.",
    image: "/github-project.svg",
    tag: ["All", "Npm"],
    gitUrl: "https://github.com/SHAJAR5110/skills",
    previewUrl: "https://github.com/SHAJAR5110/skills",
  },

  // ============ CLIENT PROJECTS ============
  {
    id: 11,
    title: "HVAC Website - Client Project",
    description: "HVAC website using WordPress for USA client.",
    image: "/images/projects/adams.png",
    tag: ["All", "Web"],
    gitUrl: "https://adamssvcs.com/",
    previewUrl: "https://adamssvcs.com/",
  },
  {
    id: 12,
    title: "Agentic AI - Robo Growth Partners",
    description: "Agentic AI website for USA client company Robo Growth Partners.",
    image: "/github-project.svg",
    tag: ["All", "Web", "AI"],
    gitUrl: "https://github.com/SHAJAR5110/demo",
    previewUrl: "https://demo-henna-two.vercel.app/",
  },
  {
    id: 13,
    title: "Hospital AI Voice Assistant",
    description: "AI-powered voice assistant using GoHighLevel, n8n, and Vapi. Handles real-time customer calls with voice processing using Gemini and automated CRM actions.",
    image: "/images/projects/ClientProject.png",
    tag: ["All", "AI"],
    gitUrl: "https://www.linkedin.com/posts/shajar-abbas-45a855268_automation-n8n-vapi-activity-7322056537479241728",
    previewUrl: "https://www.linkedin.com/posts/shajar-abbas-45a855268_automation-n8n-vapi-activity-7322056537479241728",
  },

  // ============ MERN & FULL STACK ============
  {
    id: 14,
    title: "MERN Stack Full Course & Projects",
    description: "Complete hands-on MERN Stack course covering MongoDB, Express, React, Node.js. Real-world projects and full-featured applications.",
    image: "/github-project.svg",
    tag: ["All", "Web", "MERN"],
    gitUrl: "https://github.com/SHAJAR5110/MERN-stack-Development-full-course.",
    previewUrl: "https://github.com/SHAJAR5110/MERN-stack-Development-full-course.",
  },
  {
    id: 15,
    title: "JWT Authentication & Authorization MERN",
    description: "Ultimate guide on JWT Authentication & Authorization in MERN stack with comprehensive secure implementation.",
    image: "/github-project.svg",
    tag: ["All", "Web", "MERN"],
    gitUrl: "https://github.com/SHAJAR5110/Authentication-Authorization-using-MERN",
    previewUrl: "https://github.com/SHAJAR5110/Authentication-Authorization-using-MERN",
  },
  {
    id: 16,
    title: "FixNow - Service Marketplace",
    description: "Service marketplace connecting clients with professionals. Plumbers, electricians, and service providers in one platform.",
    image: "/images/projects/fixnow.jpeg",
    tag: ["All", "Web", "MERN"],
    gitUrl: "https://github.com/SHAJAR5110/FixNow-Next-js",
    previewUrl: "https://github.com/SHAJAR5110/FixNow-Next-js",
  },
  {
    id: 17,
    title: "FashioNest E-commerce",
    description: "E-commerce website for clothing with React.js, Next.js, Tailwind CSS. Clerk authentication, cart, and checkout system.",
    image: "/images/projects/FashioNest.png",
    tag: ["All", "Web", "MERN"],
    gitUrl: "https://github.com/SHAJAR5110/FashioNest-Ecommerce",
    previewUrl: "https://fashio-nest-ecommerce.vercel.app/",
  },
  {
    id: 18,
    title: "E-Commerce Website (Next.js)",
    description: "Full-featured e-commerce website built with React.js, Next.js, and Tailwind CSS.",
    image: "/images/projects/ecommerce.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/Next.js-Ecommerce",
    previewUrl: "https://next-js-ecommerce-snowy.vercel.app/",
  },
  {
    id: 19,
    title: "E-Commerce Website (React + Firebase)",
    description: "E-commerce using React.js and Tailwind CSS with Firebase authentication and database.",
    image: "/images/projects/FashioNestecommerce.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/e-commerce",
    previewUrl: "https://github.com/SHAJAR5110/e-commerce",
  },

  // ============ AI & CHATBOT PROJECTS ============
  {
    id: 20,
    title: "Dr. AI - Medical Chatbot (RAG)",
    description: "Pakistan Engineering Council Hackathon Project. Intelligent medical chatbot with RAG technology. Retrieves accurate information from PDF files using LangChain.",
    image: "/images/projects/DrAi.png",
    tag: ["All", "Python", "AI"],
    gitUrl: "https://github.com/SHAJAR5110/Dr.-Ai",
    previewUrl: "https://98czftepcm5knsgki8gtso.streamlit.app/",
  },
  {
    id: 21,
    title: "Resume Analyzer",
    description: "Web application using OpenAI API to analyze resumes and provide feedback. Helps job seekers improve their resumes with suggestions.",
    image: "/images/projects/resumeAnalyzer.png",
    tag: ["All", "AI", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/resume-analyzer",
    previewUrl: "https://www.linkedin.com/posts/shajar-abbas-45a855268_reactjs-flask-generativeai-activity-7330067490103877632-a17V",
  },
  {
    id: 22,
    title: "Eco Aware - Sustainability App",
    description: "Web application using OpenAI API for eco-friendly products and practices. Helps users make informed sustainable choices.",
    image: "/images/projects/ecoaware.png",
    tag: ["All", "AI", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/EcoAware",
    previewUrl: "https://eco-aware-six.vercel.app/",
  },
  {
    id: 23,
    title: "React Chatbot - Groq API",
    description: "Conversational chatbot interface using Groq API. Built with React.js and Tailwind CSS for seamless user experience.",
    image: "/images/projects/myAI.png",
    tag: ["All", "AI", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/chatbot-in-react",
    previewUrl: "https://www.linkedin.com/posts/shajar-abbas-45a855268_reactjs-aichatbot-groq-activity-7330063537194631168-2OTy",
  },

  // ============ REACT & FRONTEND PROJECTS ============
  {
    id: 24,
    title: "Spotify Clone",
    description: "Spotify clone replicating the design and interface of the popular music streaming platform. Built with HTML and CSS.",
    image: "/images/projects/spotify.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/Spotify-Clone",
    previewUrl: "https://spotify-clone-seven-blush.vercel.app/",
  },
  {
    id: 25,
    title: "Quote Generator",
    description: "Web application using Public API to generate random quotes. Built with React.js and Tailwind CSS.",
    image: "/images/projects/quote.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/Quote-generator-in-react",
    previewUrl: "https://www.linkedin.com/posts/shajar-abbas-45a855268_reactjs-webdevelopment-opensource-activity-7330055897068605441-yinc",
  },
  {
    id: 26,
    title: "Google Notes Clone",
    description: "Notes application allowing users to create and manage notes. Built with React.js and Tailwind CSS.",
    image: "/images/projects/notes.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/Google-notes-in-react",
    previewUrl: "https://google-notes-in-react.vercel.app/",
  },
  {
    id: 27,
    title: "Internee.pk Clone",
    description: "Responsive clone of internee.pk website built with React.js and Tailwind CSS. Demonstrates modern frontend development practices.",
    image: "/images/projects/internee.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/Clone-Internee.pk",
    previewUrl: "https://clone-internee-pk.vercel.app/",
  },
  {
    id: 28,
    title: "Game Page Frontend",
    description: "Front-end of Game Page built with Next.js and Tailwind CSS. Modern gaming interface design.",
    image: "/images/projects/GamePage.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/GamePage-Frontend",
    previewUrl: "https://game-page-frontend.vercel.app/",
  },
  {
    id: 29,
    title: "Mini Project",
    description: "Mini learning project with complete implementation.",
    image: "/images/projects/MiniProject.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/Mini-project",
    previewUrl: "https://mini-project-navy-three.vercel.app/",
  },
  {
    id: 30,
    title: "Todo Task Web App",
    description: "Todo Web App with full task management functionality.",
    image: "/images/projects/TodoWeb.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/To-do-Task",
    previewUrl: "https://github.com/SHAJAR5110/To-do-Task",
  },
  {
    id: 31,
    title: "Calculator Web App",
    description: "Beautiful calculator web application with full mathematical functionality.",
    image: "/images/projects/WebCalculator.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/To-do-Task",
    previewUrl: "https://github.com/SHAJAR5110/To-do-Task",
  },

  // ============ UTILITIES & TOOLS ============
  {
    id: 32,
    title: "Modern News App",
    description: "Modern, responsive news site with real-time API integration. Dynamic search, beautiful card layout, glassmorphism design.",
    image: "/github-project.svg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/NEWS-APP",
    previewUrl: "https://github.com/SHAJAR5110/NEWS-APP",
  },
  {
    id: 33,
    title: "CRUD Task Management App",
    description: "Complete Task Management CRUD Application demonstrating all core operations (Create, Read, Update, Delete).",
    image: "/github-project.svg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/CRUD-app",
    previewUrl: "https://github.com/SHAJAR5110/CRUD-app",
  },
  {
    id: 34,
    title: "Modern Design Calculator",
    description: "Beautiful calculator with four basic operations, real-time updates, error handling, and prevents multiple decimal points.",
    image: "/github-project.svg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/Modern-Design-Calculator",
    previewUrl: "https://github.com/SHAJAR5110/Modern-Design-Calculator",
  },
  {
    id: 35,
    title: "Weather Dashboard",
    description: "Weather Dashboard API built with HTML and CSS. Real-time weather data integration.",
    image: "/github-project.svg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/Weather-dashboard-HTML",
    previewUrl: "https://github.com/SHAJAR5110/Weather-dashboard-HTML",
  },
  {
    id: 36,
    title: "Dynamic To-Do App",
    description: "Dynamic To-Do List application built with HTML and CSS with full task management functionality.",
    image: "/github-project.svg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/Dynamic-To-do-App-HTML",
    previewUrl: "https://github.com/SHAJAR5110/Dynamic-To-do-App-HTML",
  },
  {
    id: 37,
    title: "Portfolio HTML CSS",
    description: "Comprehensive animated portfolio website built using HTML and CSS.",
    image: "/github-project.svg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/portfolio-html",
    previewUrl: "https://github.com/SHAJAR5110/portfolio-html",
  },
  {
    id: 38,
    title: "Crafty Automations",
    description: "Contact form built with Next.js and Nodemailer. Sends confirmation emails to users and admins.",
    image: "/github-project.svg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/craftyAutomations",
    previewUrl: "https://github.com/SHAJAR5110/craftyAutomations",
  },

  // ============ PYTHON & STREAMLIT APPS ============
  {
    id: 39,
    title: "Secure Data Encryption System",
    description: "Streamlit-based secure data storage and retrieval. Users store/decrypt data with unique passkey with multi-attempt protection.",
    image: "/images/projects/secure.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/SHAJAR5110/Secure-Data-Encryption-System-Using-Streamlit",
    previewUrl: "https://secure-data-encryption-system-using-app-2bcee5yf7ef8dsaabnq5lf.streamlit.app/",
  },
  {
    id: 40,
    title: "Data Sweeper - CSV/Excel Cleaner",
    description: "Streamlit-powered app to upload, clean, visualize, and convert messy CSV and Excel files in just a few clicks.",
    image: "/images/projects/dataSweeper.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/SHAJAR5110/DataSweeper-in-python",
    previewUrl: "https://datasweeper-in-python-luufexvmupylfidwguujpn.streamlit.app/",
  },
  {
    id: 41,
    title: "Google Unit Converter",
    description: "Simple and easy-to-use unit conversion tool. Supports length, weight, volume, temperature, and more.",
    image: "/images/projects/googleunitconverter.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/SHAJAR5110/google-unit-conversion",
    previewUrl: "https://app-unit-conversion-cpbdnb26qkpwcuaykfss7z.streamlit.app/",
  },
  {
    id: 42,
    title: "Password Strength Meter",
    description: "Streamlit-based password strength checker. Check password strength and generate strong passwords.",
    image: "/github-project.svg",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/SHAJAR5110/password-strength-meter",
    previewUrl: "https://github.com/SHAJAR5110/password-strength-meter",
  },
  {
    id: 43,
    title: "Python OOPs Concepts",
    description: "Comprehensive repository with Python implementations of Object-Oriented Programming (OOP) concepts.",
    image: "/github-project.svg",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/SHAJAR5110/OOPs-in-python",
    previewUrl: "https://github.com/SHAJAR5110/OOPs-in-python",
  },
  {
    id: 44,
    title: "Python Projects for Beginners",
    description: "Multiple Python projects for absolute beginners with simple practice code.",
    image: "/images/projects/DpythonCodes.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/SHAJAR5110/Python-Projects",
    previewUrl: "https://github.com/SHAJAR5110/Python-Projects",
  },
  {
    id: 45,
    title: "Python Basics for Beginners",
    description: "Simple practice code for Python beginners learning fundamentals.",
    image: "/github-project.svg",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/SHAJAR5110/pythonBasics-Project-for-Beginners",
    previewUrl: "https://github.com/SHAJAR5110/pythonBasics-Project-for-Beginners",
  },
  {
    id: 46,
    title: "Number Guessing Game (Python)",
    description: "CLI-based number guessing game written in Python.",
    image: "/images/projects/NumbreGuessing.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/SHAJAR5110/numberGuessingGame-in-python",
    previewUrl: "https://github.com/SHAJAR5110/numberGuessingGame-in-python",
  },

  // ============ ASP.NET & BACKEND ============
  {
    id: 47,
    title: "ASP.NET Core MVC Project Tracker",
    description: "Project Tracker web app using ASP.NET Core MVC. Deploy to Azure App Services with in-memory data storage.",
    image: "/github-project.svg",
    tag: ["All", "Web", "Backend"],
    gitUrl: "https://github.com/SHAJAR5110/ASP.NET-Core-MVC-Project-Tracker",
    previewUrl: "https://github.com/SHAJAR5110/ASP.NET-Core-MVC-Project-Tracker",
  },
  {
    id: 48,
    title: "ASP.NET Inventory Management",
    description: "Product Inventory Management web app using ASP.NET Core MVC. Display products and manage inventory.",
    image: "/github-project.svg",
    tag: ["All", "Web", "Backend"],
    gitUrl: "https://github.com/SHAJAR5110/ASP.NET-Inventory-Management",
    previewUrl: "https://github.com/SHAJAR5110/ASP.NET-Inventory-Management",
  },
  {
    id: 49,
    title: "ASP.NET Core Weather API",
    description: "RESTful Weather API built with ASP.NET Core. Provides real-time weather data endpoints.",
    image: "/github-project.svg",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/SHAJAR5110/ASP.NET-Core-Web-API-Weather-api",
    previewUrl: "https://github.com/SHAJAR5110/ASP.NET-Core-Web-API-Weather-api",
  },
  {
    id: 50,
    title: "ASP.NET Car Inventory API",
    description: "Car Inventory Management API built with ASP.NET Core Web API. Full CRUD operations for vehicle management.",
    image: "/github-project.svg",
    tag: ["All", "Backend"],
    gitUrl: "https://github.com/SHAJAR5110/ASP.NET-Core-Web-API-carInventory",
    previewUrl: "https://github.com/SHAJAR5110/ASP.NET-Core-Web-API-carInventory",
  },

  // ============ NPM PACKAGES ============
  {
    id: 51,
    title: "CMD Simple Calculator",
    description: "Terminal-based calculator. Use: npm i cmd-simple-calculator",
    image: "/images/projects/cmdCalculator.png",
    tag: ["All", "Npm"],
    gitUrl: "https://github.com/SHAJAR5110/Cmd-calculator",
    previewUrl: "https://github.com/SHAJAR5110/Cmd-calculator",
  },
  {
    id: 52,
    title: "CLI Number Guessing Game",
    description: "Terminal-based number guessing game. Use: npm i cli-mini-number-guessing-game",
    image: "/images/projects/cmdNGG.png",
    tag: ["All", "Npm"],
    gitUrl: "https://github.com/SHAJAR5110/Number-Guessing-Game",
    previewUrl: "https://github.com/SHAJAR5110/Number-Guessing-Game",
  },
  {
    id: 53,
    title: "United ATM Machine",
    description: "ATM machine CLI application. Use: npm i united-atm-machine",
    image: "/images/projects/ATM.png",
    tag: ["All", "Npm"],
    gitUrl: "https://github.com/SHAJAR5110/ATM-machine",
    previewUrl: "https://github.com/SHAJAR5110/ATM-machine",
  },
  {
    id: 54,
    title: "Words Counter",
    description: "Words counter made with TypeScript, Node.js, and inquirer. Use: npm i count-my-words",
    image: "/images/projects/WordCounter.png",
    tag: ["All", "Npm"],
    gitUrl: "https://github.com/SHAJAR5110/words-counter",
    previewUrl: "https://github.com/SHAJAR5110/words-counter",
  },

  // ============ GAMES & OTHER PROJECTS ============
  {
    id: 55,
    title: "Top-down Car Game (C#)",
    description: "Simple top-down car game built with C# using Windows Form Application.",
    image: "/images/projects/topdown.png",
    tag: ["All", "Other"],
    gitUrl: "https://github.com/SHAJAR5110/GUI-Top-down-car-game",
    previewUrl: "https://github.com/SHAJAR5110/GUI-Top-down-car-game",
  },
  {
    id: 56,
    title: "Library Management System",
    description: "Console-based Library Management System. Add, remove, search, and display books.",
    image: "/github-project.svg",
    tag: ["All", "Other"],
    gitUrl: "https://github.com/SHAJAR5110/LibraryManagement",
    previewUrl: "https://github.com/SHAJAR5110/LibraryManagement",
  },
  {
    id: 57,
    title: "Next.js Portfolio",
    description: "This portfolio website built using Next.js and Tailwind CSS. Fully responsive with seamless user experience.",
    image: "/github-project.svg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHAJAR5110/Next.js-Portfolio",
    previewUrl: "https://github.com/SHAJAR5110/Next.js-Portfolio",
  },
  {
    id: 58,
    title: "45 TypeScript Questions",
    description: "Complete solutions to 45 TypeScript assignment questions.",
    image: "/github-project.svg",
    tag: ["All", "Other"],
    gitUrl: "https://github.com/SHAJAR5110/45_Questions",
    previewUrl: "https://github.com/SHAJAR5110/45_Questions",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Function to get appropriate image based on project tags and image name
  const getProjectImage = (originalImage, projectTags) => {
    // If already has a custom image, keep it
    if (originalImage && !originalImage.includes("github-project.svg")) {
      return originalImage;
    }

    // Otherwise, determine image based on tags (code snippet SVGs)
    if (projectTags.includes("Hackathon")) return "/code-hackathon.svg";
    if (projectTags.includes("AI")) return "/code-ai.svg";
    if (projectTags.includes("Python")) return "/code-python.svg";
    if (projectTags.includes("MERN")) return "/code-mern.svg";
    if (projectTags.includes("Backend")) return "/code-backend.svg";
    if (projectTags.includes("Npm")) return "/code-npm.svg";
    if (projectTags.includes("Web")) return "/code-web.svg";
    return "/code-other.svg";
  };

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  ).map((project) => ({
    ...project,
    image: getProjectImage(project.image, project.tag)
  }));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 flex-wrap">
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
          name="AI"
          isSelected={tag === "AI"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Python"
          isSelected={tag === "Python"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="MERN"
          isSelected={tag === "MERN"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Hackathon"
          isSelected={tag === "Hackathon"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
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
