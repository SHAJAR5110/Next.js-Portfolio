"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
       <li>Certified Gen AI Developer (Pakistan Engineering Council)</li>
       <li>Agentic Bootcamp Participation</li>
       <li>DG ISPR Internship</li>
       <li>Two Internships in Web Development</li>
       <li>One Internship in Frontend Development</li>
       <li>Published Article on MCP Servers</li>
       <li>Python & React Certified</li>
       <li>DEN Coding Competition</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <div>
        <h3 className="text-white font-bold mb-3">Languages:</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Python for Digital FTEs, Agents & ML</li>
          <li>JavaScript & TypeScript</li>
          <li>React & Next.js Frontend</li>
          <li>Node.js / Express Backend</li>
        </ul>

        <h3 className="text-white font-bold mb-3">AI & Automation Tools:</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>OpenAI SDK & Claude for Agent Building</li>
          <li>Agentic AI & Autonomous Systems</li>
          <li>Prompt Engineering & RAG Implementation</li>
          <li>n8n, Make.com, GoHighLevel Automation</li>
          <li>Vapi & ElevenLabs for Voice Agents</li>
          <li>MCP (Model Context Protocol)</li>
          <li>Spec-Driven Development (SDD)</li>
          <li>Claude Code CLI</li>
        </ul>

        <h3 className="text-white font-bold mb-3">Deployment & Infrastructure:</h3>
        <ul className="list-disc pl-5">
          <li>Docker & Kubernetes (minikube)</li>
          <li>AWS Cloud Services</li>
          <li>Git Version Control</li>
          <li>MongoDB + Firebase Databases</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Undergraduate in Software Engineering, Karachi Campus</li>
        <li>CGPA: 3.3 (8 Semester)</li>
        <li>F.sc Bahria College</li>
        <li>Location: Karachi, Karsaz</li>
      </ul>
    ),
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="About me image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am an AI Engineer with core expertise in Agentic AI, autonomous systems, and intelligent automation. Specialized in building AI-powered workflows, voice agents, and Digital FTEs that reduce operational workload by up to 90%. Advanced proficiency in Python, OpenAI SDK, n8n, Make, MCP, and Spec-Driven Development. I also have strong side skills in full-stack development (MERN: React, Node.js, MongoDB) for building complete AI-powered applications. Experienced in international projects and proven track record of delivering scalable AI solutions.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
