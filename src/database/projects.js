/**
 * =============================================================
 *  PROJECTS DATABASE
 * =============================================================
 *  Single source of truth for the "Projects" section.
 *  To add a project: copy the TEMPLATE below, paste it near the
 *  top of the `projects` array, and fill it in.
 *
 *  ORDER: cards appear on the page in exactly the order they are
 *  written here, top to bottom. To move a project on the page,
 *  move its block up or down in this file. Nothing re-sorts it.
 *
 *  --- TEMPLATE -----------------------------------------------
 *  {
 *    id:          "my-project",                  // unique, lowercase, no spaces
 *    name:        "My Project",                  // card title
 *    description: "One or two sentences.",       // card body text
 *    image:       "/images/projects/my-pic.png", // see IMAGES below
 *    tags:        ["ai", "web"],                 // ids from `categories`
 *    stack:       ["Next.js", "OpenAI"],         // small chips on the card
 *    github:      "https://github.com/...",      // optional
 *    live:        "https://...",                 // optional
 *    featured:    false,                         // true = shows a "Featured" badge
 *    year:        2025,                          // optional
 *  }
 *  ------------------------------------------------------------
 *
 *  --- IMAGES -------------------------------------------------
 *  1. Drop the file into:  public/images/projects/
 *  2. Reference it as:     "/images/projects/<filename>"
 *     (never write the "/public" part in the path)
 *  3. Or omit `image` entirely: a category-matched code graphic
 *     is used automatically, so a card never renders blank.
 *
 *  Recommended: 1200x750 (16:10), .png / .jpg / .webp, under 400KB.
 * =============================================================
 */

/**
 * Filter buttons shown above the project grid.
 * The `id` is what you put inside a project's `tags` array.
 */
export const categories = [
  { id: "all", label: "All Work" },
  { id: "ai", label: "AI & Agents" },
  { id: "web", label: "Web Apps" },
  { id: "mern", label: "Full Stack" },
  { id: "python", label: "Python" },
  { id: "hackathon", label: "Hackathons" },
  { id: "backend", label: "Backend & APIs" },
  { id: "npm", label: "NPM Packages" },
  { id: "other", label: "Other" },
];

/** Automatic artwork, chosen from a project's first tag when `image` is missing. */
export const fallbackImages = {
  ai: "/code-ai.svg",
  hackathon: "/code-hackathon.svg",
  python: "/code-python.svg",
  mern: "/code-mern.svg",
  backend: "/code-backend.svg",
  npm: "/code-npm.svg",
  web: "/code-web.svg",
  other: "/code-other.svg",
};

export const projects = [
  // ================= FEATURED =================
  {
    id: "supreme-sealer",
    name: "Supreme Sealer - Client Site",
    description:
      "Services and marketing site delivered for a US sealcoating contractor, built in TypeScript with a conversion-focused layout.",
    image: "/images/projects/supreme-seller.png",
    tags: ["web"],
    stack: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/SHAJAR5110/Supreme-Sealer-website-client-",
    live: "https://supreme-sealer-website-client.vercel.app",
    featured: true,
    year: 2026,
  },
  {
    id: "agc-california",
    name: "AGC California",
    description:
      "Client site for a California contractor, built as a fast static bundle and deployed on Vercel.",
    image:"/images/projects/agc.png",
    tags: ["web"],
    stack: ["HTML", "CSS"],
    github: "https://github.com/SHAJAR5110/agc-calfornia",
    live: "https://agc-calfornia.vercel.app",
    year: 2026,
  },
  {
    id: "vidagent-nexus",
    name: "VidAgent Nexus",
    description:
      "Final year project. A hiring-agent platform where teams build and run outreach campaigns using short-form video and email, orchestrated from a single dashboard.",
    image: "/images/projects/fyp.png",
    tags: ["ai", "web"],
    stack: ["Next.js", "OpenAI SDK", "Node.js"],
    github: "https://github.com/SHAJAR5110/vidagent-nexus",
    featured: true,
    year: 2025,
  },
  {
    id: "hospital-voice-agent",
    name: "Hospital AI Voice Assistant",
    description:
      "Production voice agent handling live patient calls. Speech pipeline on Vapi and Gemini, with CRM actions automated through GoHighLevel and n8n.",
    image: "/images/projects/ClientProject.png",
    tags: ["ai"],
    stack: ["Vapi", "n8n", "GoHighLevel", "Gemini"],
    live: "https://www.linkedin.com/posts/shajar-abbas-45a855268_automation-n8n-vapi-activity-7322056537479241728",
    featured: true,
    year: 2025,
  },
  {
    id: "dr-ai",
    name: "Dr. AI - Medical RAG Chatbot",
    description:
      "Pakistan Engineering Council hackathon build. A retrieval-augmented chatbot that grounds every medical answer in source PDFs using LangChain.",
    image: "/images/projects/DrAi.png",
    tags: ["ai", "python"],
    stack: ["LangChain", "Streamlit", "Python"],
    github: "https://github.com/SHAJAR5110/Dr.-Ai",
    live: "https://98czftepcm5knsgki8gtso.streamlit.app/",
    featured: true,
    year: 2025,
  },
  {
    id: "agentic-ai",
    name: "Agentic AI - Autonomous Agents",
    description:
      "A deep build on autonomous agents with the OpenAI SDK: reasoning loops, planning, tool use and memory that persists across sessions.",
    tags: ["ai"],
    stack: ["OpenAI SDK", "Python"],
    github: "https://github.com/SHAJAR5110/Agentic-Ai-",
    featured: true,
    year: 2025,
  },
  {
    id: "adams-hvac",
    name: "Adams HVAC - Client Site",
    description:
      "Marketing site built and shipped for a US-based HVAC contractor, covering service pages, lead capture and local SEO.",
    image: "/images/projects/adams.png",
    tags: ["web"],
    stack: ["WordPress", "SEO"],
    live: "https://adamssvcs.com/",
    featured: true,
    year: 2024,
  },
  {
    id: "fashionest",
    name: "FashioNest E-commerce",
    description:
      "Full storefront with Clerk authentication, persistent cart and checkout, built on Next.js and Tailwind with a clean product catalogue.",
    image: "/images/projects/FashioNest.png",
    tags: ["mern", "web"],
    stack: ["Next.js", "Clerk", "Tailwind"],
    github: "https://github.com/SHAJAR5110/FashioNest-Ecommerce",
    live: "https://fashio-nest-ecommerce.vercel.app/",
    featured: true,
    year: 2024,
  },

  // ================= AI & AUTOMATION =================
  {
    id: "langchain-agents",
    name: "LangChain & LangGraph Agents",
    description:
      "A collection of agent builds across LangChain and LangGraph, covering tool routing, state graphs and multi-step reasoning.",
    tags: ["ai", "python"],
    stack: ["LangChain", "LangGraph", "Python"],
    github: "https://github.com/SHAJAR5110/Langchain-Agents-Projects",
    year: 2026,
  },
  {
    id: "cleanml-vision",
    name: "CleanML Vision",
    description:
      "Local-first cleaner for CSV and image datasets. One click turns messy data into ML-ready output plus a reproducible notebook - no API keys, and nothing leaves your machine.",
    image: "/images/projects/cleanML.png",
    tags: ["ai", "python"],
    stack: ["Python", "Jupyter"],
    github: "https://github.com/SHAJAR5110/CleanML-Vision",
    year: 2026,
  },
  {
    id: "chat-porter",
    name: "Chat Porter",
    description:
      "One-click context portability between AI platforms. Export a conversation from ChatGPT, Claude, Gemini or Groq and paste it anywhere.",
    image:"/images/projects/chatporter.png",
    tags: ["ai", "web"],
    stack: ["JavaScript"],
    github: "https://github.com/SHAJAR5110/Chat-Porter",
    year: 2026,
  },
  {
    id: "machine-learning-projects",
    name: "Machine Learning Projects",
    description:
      "Supervised, unsupervised, reinforcement and deep learning projects collected in one repository, each with its own notebook.",
    tags: ["ai", "python"],
    stack: ["Python"],
    github: "https://github.com/SHAJAR5110/machine-learning-projects",
    year: 2026,
  },
  {
    id: "physical-ai-robotics-book",
    name: "Physical AI & Humanoid Robotics",
    description:
      "An online book on physical AI and humanoid robotics, published as a browsable site with Python examples throughout.",
    image:"/images/projects/humanoid.png",
    tags: ["ai", "python"],
    stack: ["Python", "Next.js"],
    github: "https://github.com/SHAJAR5110/Physical-AI-Humanoid-Robotics-Book",
    live: "https://physical-ai-humanoid-robotics-book-psi.vercel.app/",
    year: 2025,
  },
  {
    id: "robo-growth-partners",
    name: "Robo Growth Partners",
    description:
      "Agentic AI marketing site delivered for a US client, presenting their automation services with a conversion-focused layout.",
    tags: ["web", "ai"],
    stack: ["Next.js", "Tailwind"],
    github: "https://github.com/SHAJAR5110/demo",
    live: "https://demo-henna-two.vercel.app/",
    year: 2024,
  },
  {
    id: "resume-analyzer",
    name: "Resume Analyzer",
    description:
      "Upload a resume and get structured, actionable feedback back. OpenAI runs the analysis, Flask handles the API, React renders the report.",
    image: "/images/projects/resumeAnalyzer.png",
    tags: ["ai", "web"],
    stack: ["React", "Flask", "OpenAI"],
    github: "https://github.com/SHAJAR5110/resume-analyzer",
    live: "https://www.linkedin.com/posts/shajar-abbas-45a855268_reactjs-flask-generativeai-activity-7330067490103877632-a17V",
    year: 2025,
  },
  {
    id: "eco-aware",
    name: "Eco Aware",
    description:
      "Sustainability assistant that recommends eco-friendly products and habits, using the OpenAI API to reason about real trade-offs.",
    image: "/images/projects/ecoaware.png",
    tags: ["ai", "web"],
    stack: ["Next.js", "OpenAI"],
    github: "https://github.com/SHAJAR5110/EcoAware",
    live: "https://eco-aware-six.vercel.app/",
    year: 2025,
  },
  {
    id: "groq-chatbot",
    name: "Groq Chat Interface",
    description:
      "Streaming conversational UI on top of the Groq API, delivering sub-second responses through a React and Tailwind front end.",
    image: "/images/projects/myAI.png",
    tags: ["ai", "web"],
    stack: ["React", "Groq API", "Tailwind"],
    github: "https://github.com/SHAJAR5110/chatbot-in-react",
    live: "https://www.linkedin.com/posts/shajar-abbas-45a855268_reactjs-aichatbot-groq-activity-7330063537194631168-2OTy",
    year: 2025,
  },

  // ================= HACKATHONS =================
  {
    id: "digital-fte-gold",
    name: "Digital FTE - Gold Tier",
    description:
      "Top-tier submission for the Digital FTE hackathon: an autonomous worker agent covering a full operational role end to end.",
    tags: ["hackathon", "ai"],
    stack: ["Python", "OpenAI SDK"],
    github: "https://github.com/SHAJAR5110/Digital-FTE-Gold-tier",
    year: 2025,
  },
  {
    id: "digital-fte-silver",
    name: "Digital FTE - Silver Tier",
    description:
      "Silver-tier Digital FTE build, extending the agent with tool access and multi-step task handling.",
    tags: ["hackathon", "ai"],
    stack: ["Python", "OpenAI SDK"],
    github: "https://github.com/SHAJAR5110/Digital-FTE-silver-tier-",
    year: 2025,
  },
  {
    id: "digital-fte-bronze",
    name: "Digital FTE - Bronze Tier",
    description:
      "Entry-tier Digital FTE agent, the baseline autonomous worker that the higher tiers build on.",
    tags: ["hackathon", "ai"],
    stack: ["Python", "OpenAI SDK"],
    github: "https://github.com/SHAJAR5110/Digital-FTE-bronze-tier",
    year: 2025,
  },
  {
    id: "hackathon-ii-phase-4",
    name: "Hackathon II - Phase 4",
    description:
      "Final phase of the Hackathon II series, consolidating every earlier phase into one deliverable.",
    tags: ["hackathon"],
    github: "https://github.com/SHAJAR5110/hackathon-II-phase-4",
    year: 2024,
  },
  {
    id: "hackathon-ii-phase-3",
    name: "Hackathon II - Phase 3",
    description: "Third phase of the Hackathon II competition series.",
    tags: ["hackathon"],
    github: "https://github.com/SHAJAR5110/hackathon-II-phase-3",
    year: 2024,
  },
  {
    id: "hackathon-ii-phase-2",
    name: "Hackathon II - Phase 2",
    description: "Second phase of the Hackathon II competition series.",
    tags: ["hackathon"],
    github: "https://github.com/SHAJAR5110/Hackathon-II-phase2",
    year: 2024,
  },
  {
    id: "hackathon-ii-phase-1",
    name: "Hackathon II - Phase 1",
    description: "Opening phase of the Hackathon II competition series.",
    tags: ["hackathon"],
    github: "https://github.com/SHAJAR5110/Hackathon-II-phase1",
    year: 2024,
  },

  // ================= FULL STACK / MERN =================
  {
    id: "mern-full-course",
    name: "MERN Stack - Full Course & Projects",
    description:
      "Hands-on MERN curriculum covering MongoDB, Express, React and Node, with real applications built at every stage.",
    tags: ["mern", "web"],
    stack: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/SHAJAR5110/MERN-stack-Development-full-course.",
    year: 2024,
  },
  {
    id: "mern-jwt-auth",
    name: "JWT Auth for MERN",
    description:
      "Complete authentication and authorisation layer for MERN apps: access and refresh tokens, protected routes and role checks.",
    tags: ["mern", "backend"],
    stack: ["JWT", "Express", "MongoDB"],
    github: "https://github.com/SHAJAR5110/Authentication-Authorization-using-MERN",
    year: 2024,
  },
  {
    id: "fixnow",
    name: "FixNow - Service Marketplace",
    description:
      "Two-sided marketplace connecting customers with plumbers, electricians and other tradespeople, with booking built in.",
    image: "/images/projects/fixnow.jpeg",
    tags: ["mern", "web"],
    stack: ["Next.js", "MongoDB", "Tailwind"],
    github: "https://github.com/SHAJAR5110/FixNow-Next-js",
    year: 2024,
  },
  {
    id: "nextjs-ecommerce",
    name: "Next.js E-commerce",
    description:
      "Full-featured storefront with product listings, cart state and a responsive checkout flow.",
    image: "/images/projects/ecommerce.png",
    tags: ["web"],
    stack: ["Next.js", "Tailwind"],
    github: "https://github.com/SHAJAR5110/Next.js-Ecommerce",
    live: "https://next-js-ecommerce-snowy.vercel.app/",
    year: 2024,
  },
  {
    id: "react-firebase-ecommerce",
    name: "React + Firebase Store",
    description:
      "E-commerce build backed by Firebase for authentication and realtime data, with a React and Tailwind front end.",
    image: "/images/projects/FashioNestecommerce.png",
    tags: ["web"],
    stack: ["React", "Firebase", "Tailwind"],
    github: "https://github.com/SHAJAR5110/e-commerce",
    year: 2024,
  },

  // ================= WEB & FRONTEND =================
  {
    id: "devshell-automation",
    name: "devShell Automation",
    description:
      "Site for an automation studio, presenting the offer, example workflows and enquiry capture.",
    image:"/images/projects/devshell.png",
    tags: ["web", "ai"],
    stack: ["HTML", "Tailwind"],
    github: "https://github.com/SHAJAR5110/devShell-Automation",
    live: "https://devshell-automation.vercel.app",
    year: 2026,
  },
  
  {
    id: "sanity-blog",
    name: "Blog Platform with Sanity CMS",
    description:
      "Responsive blogging platform on Next.js with Sanity CMS behind it, using dynamic routing and server-side rendering.",
    tags: ["web", "mern"],
    stack: ["Next.js", "Sanity", "Tailwind"],
    github: "https://github.com/SHAJAR5110/Blog-web-using-Next.js",
    year: 2025,
  },
  {
    id: "dynamic-resume-builder",
    name: "Dynamic Resume Builder",
    description:
      "Resume builder in TypeScript, HTML and CSS. The generated resume stays fully editable without a page refresh.",
    tags: ["web"],
    stack: ["TypeScript", "HTML", "CSS"],
    github: "https://github.com/SHAJAR5110/Dynamic-Resume-Builder",
    live: "https://dynamic-resume-builder-blush.vercel.app",
    year: 2024,
  },
  {
    id: "static-resume",
    name: "Static Resume",
    description:
      "Responsive static resume built with HTML, CSS and JavaScript.",
    tags: ["web"],
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/SHAJAR5110/static-resume",
    year: 2024,
  },
  {
    id: "pet-adoption-site",
    name: "Pet Adoption Landing Page",
    description:
      "Single-page pet adoption site built to demonstrate clean responsive behaviour at every breakpoint.",
    tags: ["web"],
    stack: ["HTML", "CSS"],
    github: "https://github.com/SHAJAR5110/Single-page-pet-adopting-site",
    live: "https://single-page-pet-adopting-site.vercel.app",
    year: 2024,
  },
  {
    id: "css-grid-layout",
    name: "CSS Grid Website Layout",
    description:
      "Full page layout in CSS Grid - header, footer, main region, sidebar navigation and an ad rail.",
    tags: ["web"],
    stack: ["HTML", "CSS Grid"],
    github: "https://github.com/SHAJAR5110/Website-layout",
    live: "https://website-layout-mocha.vercel.app",
    year: 2024,
  },
  {
    id: "css-loaders",
    name: "CSS Loading Animations",
    description:
      "A set of loading animations built purely from HTML and CSS keyframes.",
    tags: ["web"],
    stack: ["HTML", "CSS"],
    github: "https://github.com/SHAJAR5110/Loader-using-Html-Css",
    live: "https://loader-using-html-css.vercel.app",
    year: 2024,
  },
  {
    id: "css-traffic-light",
    name: "CSS Traffic Light",
    description:
      "Working traffic light driven entirely by CSS animation timing.",
    tags: ["web"],
    stack: ["HTML", "CSS"],
    github: "https://github.com/SHAJAR5110/Traffic-light",
    live: "https://traffic-light-eight-blond.vercel.app",
    year: 2024,
  },
  {
    id: "spotify-clone",
    name: "Spotify Clone",
    description:
      "Pixel-focused recreation of the Spotify interface, built from scratch in HTML and CSS to practise layout precision.",
    image: "/images/projects/spotify.png",
    tags: ["web"],
    stack: ["HTML", "CSS"],
    github: "https://github.com/SHAJAR5110/Spotify-Clone",
    live: "https://spotify-clone-seven-blush.vercel.app/",
    year: 2023,
  },
  {
    id: "quote-generator",
    name: "Quote Generator",
    description:
      "Small React app that pulls random quotes from a public API, with a clean card layout and share action.",
    image: "/images/projects/quote.png",
    tags: ["web"],
    stack: ["React", "Tailwind"],
    github: "https://github.com/SHAJAR5110/Quote-generator-in-react",
    live: "https://www.linkedin.com/posts/shajar-abbas-45a855268_reactjs-webdevelopment-opensource-activity-7330055897068605441-yinc",
    year: 2024,
  },
  {
    id: "google-notes-clone",
    name: "Google Keep Clone",
    description:
      "Note-taking app with create, edit, colour-tag and delete, mirroring the Google Keep interaction model.",
    image: "/images/projects/notes.png",
    tags: ["web"],
    stack: ["React", "Tailwind"],
    github: "https://github.com/SHAJAR5110/Google-notes-in-react",
    live: "https://google-notes-in-react.vercel.app/",
    year: 2024,
  },
  {
    id: "internee-clone",
    name: "Internee.pk Clone",
    description:
      "Fully responsive rebuild of the internee.pk site, matching the original layout across every breakpoint.",
    image: "/images/projects/internee.png",
    tags: ["web"],
    stack: ["React", "Tailwind"],
    github: "https://github.com/SHAJAR5110/Clone-Internee.pk",
    live: "https://clone-internee-pk.vercel.app/",
    year: 2024,
  },
  {
    id: "game-page",
    name: "Game Page UI",
    description:
      "Gaming storefront front end with a dark, high-contrast layout built in Next.js and Tailwind.",
    image: "/images/projects/GamePage.png",
    tags: ["web"],
    stack: ["Next.js", "Tailwind"],
    github: "https://github.com/SHAJAR5110/GamePage-Frontend",
    live: "https://game-page-frontend.vercel.app/",
    year: 2024,
  },
  {
    id: "news-app",
    name: "Modern News App",
    description:
      "Responsive news reader with live API data, dynamic search and a glassmorphic card grid.",
    tags: ["web"],
    stack: ["React", "News API"],
    github: "https://github.com/SHAJAR5110/NEWS-APP",
    year: 2024,
  },
  {
    id: "crud-tasks",
    name: "CRUD Task Manager",
    description:
      "Task manager covering the full create, read, update and delete cycle with persistent storage.",
    tags: ["web"],
    stack: ["React", "Node.js"],
    github: "https://github.com/SHAJAR5110/CRUD-app",
    year: 2024,
  },
  {
    id: "todo-web",
    name: "Todo Task Web App",
    description:
      "Task tracker with filtering, completion states and persistence between sessions.",
    image: "/images/projects/TodoWeb.png",
    tags: ["web"],
    stack: ["React"],
    github: "https://github.com/SHAJAR5110/To-do-Task",
    year: 2023,
  },
  {
    id: "web-calculator",
    name: "Calculator Web App",
    description:
      "Calculator with a considered keypad layout, keyboard support and guarded input handling.",
    image: "/images/projects/WebCalculator.jpeg",
    tags: ["web"],
    stack: ["JavaScript", "CSS"],
    github: "https://github.com/SHAJAR5110/Calculator",
    live: "https://calculator-gamma-nine-88.vercel.app",
    year: 2024,
  },
  {
    id: "modern-calculator",
    name: "Modern Design Calculator",
    description:
      "Four-operation calculator with real-time display updates, error handling and duplicate-decimal protection.",
    tags: ["web"],
    stack: ["JavaScript", "CSS"],
    github: "https://github.com/SHAJAR5110/Modern-Design-Calculator",
    year: 2023,
  },
  {
    id: "weather-dashboard",
    name: "Weather Dashboard",
    description:
      "Weather dashboard pulling live conditions and forecasts from a public API.",
    tags: ["web"],
    stack: ["HTML", "CSS", "API"],
    github: "https://github.com/SHAJAR5110/Weather-dashboard-HTML",
    year: 2023,
  },
  {
    id: "dynamic-todo",
    name: "Dynamic To-Do App",
    description: "Vanilla JavaScript to-do list with dynamic DOM rendering and local persistence.",
    tags: ["web"],
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/SHAJAR5110/Dynamic-To-do-App-HTML",
    year: 2023,
  },
  {
    id: "mini-project",
    name: "Mini Project",
    description: "Compact learning build covering a full feature slice from UI to deployment.",
    image: "/images/projects/MiniProject.png",
    tags: ["web"],
    stack: ["Next.js"],
    github: "https://github.com/SHAJAR5110/Mini-project",
    live: "https://mini-project-navy-three.vercel.app/",
    year: 2023,
  },
  {
    id: "portfolio-html",
    name: "Animated HTML Portfolio",
    description: "Earlier portfolio built purely in HTML and CSS, with scroll-triggered animation throughout.",
    tags: ["web"],
    stack: ["HTML", "CSS"],
    github: "https://github.com/SHAJAR5110/portfolio-html",
    year: 2023,
  },
  {
    id: "crafty-automations",
    name: "Crafty Automations",
    description:
      "Next.js contact pipeline with Nodemailer, sending confirmation mail to both the visitor and the site owner.",
    tags: ["web", "backend"],
    stack: ["Next.js", "Nodemailer"],
    github: "https://github.com/SHAJAR5110/craftyAutomations",
    year: 2025,
  },
  {
    id: "nextjs-portfolio",
    name: "This Portfolio",
    description:
      "The site you are looking at. Next.js App Router, Tailwind and Framer Motion, driven entirely by a local content database.",
    tags: ["web"],
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    github: "https://github.com/SHAJAR5110/Next.js-Portfolio",
    year: 2025,
  },

  // ================= PYTHON =================
  {
    id: "coffee-shop-tests",
    name: "Coffee Shop with Unit Tests",
    description:
      "Python coffee shop system handling menus, order totals and price updates, backed by a full unit test suite.",
    tags: ["python"],
    stack: ["Python", "unittest"],
    github: "https://github.com/SHAJAR5110/unitTesting-of-CoffeeShop",
    year: 2024,
  },
  {
    id: "python-small-projects",
    name: "Python Small Projects",
    description:
      "Small, self-contained Python projects aimed at learners working through the fundamentals.",
    tags: ["python"],
    stack: ["Python"],
    github: "https://github.com/SHAJAR5110/python-small-projects",
    year: 2024,
  },
  {
    id: "secure-data-encryption",
    name: "Secure Data Encryption System",
    description:
      "Streamlit vault where data is encrypted against a user passkey, with lockout protection after repeated failed attempts.",
    image: "/images/projects/secure.png",
    tags: ["python"],
    stack: ["Streamlit", "Cryptography"],
    github: "https://github.com/SHAJAR5110/Secure-Data-Encryption-System-Using-Streamlit",
    live: "https://secure-data-encryption-system-using-app-2bcee5yf7ef8dsaabnq5lf.streamlit.app/",
    year: 2025,
  },
  {
    id: "data-sweeper",
    name: "Data Sweeper",
    description:
      "Upload messy CSV or Excel files, then clean, visualise and convert them in a few clicks. Built with Streamlit and pandas.",
    image: "/images/projects/dataSweeper.png",
    tags: ["python"],
    stack: ["Streamlit", "pandas"],
    github: "https://github.com/SHAJAR5110/DataSweeper-in-python",
    live: "https://datasweeper-in-python-luufexvmupylfidwguujpn.streamlit.app/",
    year: 2025,
  },
  {
    id: "unit-converter",
    name: "Google Unit Converter",
    description:
      "Unit conversion tool covering length, weight, volume, temperature and more, with instant results as you type.",
    image: "/images/projects/googleunitconverter.png",
    tags: ["python"],
    stack: ["Streamlit", "Python"],
    github: "https://github.com/SHAJAR5110/google-unit-conversion",
    live: "https://app-unit-conversion-cpbdnb26qkpwcuaykfss7z.streamlit.app/",
    year: 2025,
  },
  {
    id: "password-strength-meter",
    name: "Password Strength Meter",
    description:
      "Scores password strength against common weakness rules and generates strong alternatives on request.",
    tags: ["python"],
    stack: ["Streamlit", "Python"],
    github: "https://github.com/SHAJAR5110/password-strength-meter",
    year: 2025,
  },
  {
    id: "python-oop",
    name: "Python OOP Concepts",
    description:
      "Reference repository working through every core OOP concept in Python with runnable examples.",
    tags: ["python"],
    stack: ["Python"],
    github: "https://github.com/SHAJAR5110/OOPs-in-python",
    year: 2024,
  },
  {
    id: "python-projects",
    name: "Python Projects Collection",
    description:
      "A set of beginner-to-intermediate Python builds, each one self-contained and documented.",
    image: "/images/projects/DpythonCodes.png",
    tags: ["python"],
    stack: ["Python"],
    github: "https://github.com/SHAJAR5110/Python-Projects",
    year: 2024,
  },
  {
    id: "python-basics",
    name: "Python Basics for Beginners",
    description: "Practice repository covering Python fundamentals with short, focused exercises.",
    tags: ["python"],
    stack: ["Python"],
    github: "https://github.com/SHAJAR5110/pythonBasics-Project-for-Beginners",
    year: 2023,
  },
  {
    id: "number-guessing-python",
    name: "Number Guessing Game",
    description: "Command-line guessing game with range narrowing and attempt tracking.",
    image: "/images/projects/NumbreGuessing.png",
    tags: ["python"],
    stack: ["Python"],
    github: "https://github.com/SHAJAR5110/numberGuessingGame-in-python",
    year: 2023,
  },

  // ================= BACKEND & APIs =================
  {
    id: "aspnet-project-tracker",
    name: "ASP.NET Project Tracker",
    description:
      "Project tracking web app on ASP.NET Core MVC, deployable to Azure App Service.",
    tags: ["backend", "web"],
    stack: ["ASP.NET Core", "C#", "Azure"],
    github: "https://github.com/SHAJAR5110/ASP.NET-Core-MVC-Project-Tracker",
    year: 2024,
  },
  {
    id: "aspnet-inventory",
    name: "ASP.NET Inventory Management",
    description:
      "Product inventory system on ASP.NET Core MVC, covering stock levels and product management.",
    tags: ["backend", "web"],
    stack: ["ASP.NET Core", "C#"],
    github: "https://github.com/SHAJAR5110/ASP.NET-Inventory-Management",
    year: 2024,
  },
  {
    id: "aspnet-weather-api",
    name: "ASP.NET Weather API",
    description: "RESTful weather service exposing live conditions through clean, documented endpoints.",
    tags: ["backend"],
    stack: ["ASP.NET Core", "REST"],
    github: "https://github.com/SHAJAR5110/ASP.NET-Core-Web-API-Weather-api",
    year: 2024,
  },
  {
    id: "aspnet-car-inventory",
    name: "ASP.NET Car Inventory API",
    description: "Vehicle inventory API with full CRUD operations built on ASP.NET Core Web API.",
    tags: ["backend"],
    stack: ["ASP.NET Core", "REST"],
    github: "https://github.com/SHAJAR5110/ASP.NET-Core-Web-API-carInventory",
    year: 2024,
  },

  // ================= NPM PACKAGES =================
  {
    id: "currency-converter",
    name: "simple-cmd-currency-converter",
    description:
      "Published npm package that converts currencies from the command line. Install with npm i simple-cmd-currency-converter.",
    tags: ["npm"],
    stack: ["Node.js", "JavaScript"],
    github: "https://github.com/SHAJAR5110/Currency-converter",
    year: 2024,
  },
  {
    id: "open-agent-skills",
    name: "Open Agent Skills",
    description:
      "CLI for discovering and installing agent skills. Run it straight from the terminal with npx skills.",
    tags: ["npm", "ai"],
    stack: ["Node.js", "TypeScript"],
    github: "https://github.com/SHAJAR5110/skills",
    year: 2025,
  },
  {
    id: "cmd-calculator",
    name: "cmd-simple-calculator",
    description:
      "Published npm package: a terminal calculator. Install with npm i cmd-simple-calculator.",
    image: "/images/projects/cmdCalculator.png",
    tags: ["npm"],
    stack: ["Node.js", "TypeScript"],
    github: "https://github.com/SHAJAR5110/Cmd-calculator",
    year: 2023,
  },
  {
    id: "cli-number-guessing",
    name: "cli-mini-number-guessing-game",
    description:
      "Published npm package: a terminal guessing game. Install with npm i cli-mini-number-guessing-game.",
    image: "/images/projects/cmdNGG.png",
    tags: ["npm"],
    stack: ["Node.js", "Inquirer"],
    github: "https://github.com/SHAJAR5110/Number-Guessing-Game",
    year: 2023,
  },
  {
    id: "united-atm-machine",
    name: "united-atm-machine",
    description:
      "Published npm package simulating ATM flows in the terminal. Install with npm i united-atm-machine.",
    image: "/images/projects/ATM.png",
    tags: ["npm"],
    stack: ["Node.js", "TypeScript"],
    github: "https://github.com/SHAJAR5110/ATM-machine",
    year: 2023,
  },
  {
    id: "count-my-words",
    name: "count-my-words",
    description:
      "Published npm package for counting words from the command line. Install with npm i count-my-words.",
    image: "/images/projects/WordCounter.png",
    tags: ["npm"],
    stack: ["TypeScript", "Inquirer"],
    github: "https://github.com/SHAJAR5110/words-counter",
    year: 2023,
  },

  // ================= OTHER =================
  {
    id: "os-process-simulator",
    name: "OS Process Scheduler Simulator",
    description:
      "Operating systems project simulating FCFS, shortest-job-first, priority and round-robin scheduling, written in C with bash tooling.",
    tags: ["other"],
    stack: ["C", "Bash"],
    github: "https://github.com/SHAJAR5110/OS-Process-Simulator",
    year: 2024,
  },
  {
    id: "cli-todo-task",
    name: "CLI Todo Task",
    description:
      "Command-line todo manager built with TypeScript, Node and Inquirer.",
    tags: ["other"],
    stack: ["TypeScript", "Node.js", "Inquirer"],
    github: "https://github.com/SHAJAR5110/Todo-Task",
    year: 2024,
  },
  {
    id: "otp-generator",
    name: "OTP Generator",
    description:
      "OTP generation utility in TypeScript and Node, with a configurable digit length.",
    tags: ["other"],
    stack: ["TypeScript", "Node.js"],
    github: "https://github.com/SHAJAR5110/Otp-Generator",
    year: 2024,
  },
  {
    id: "ppt-to-video",
    name: "PPT to Video",
    description:
      "Pipeline that turns a slide deck into a narrated video, with the rendered output published for review.",
    tags: ["other"],
    github: "https://github.com/SHAJAR5110/PPT-to-video",
    year: 2025,
  },
  {
    id: "topdown-car-game",
    name: "Top-down Car Game",
    description: "Top-down driving game built in C# with Windows Forms, including collision handling and scoring.",
    image: "/images/projects/topdown.png",
    tags: ["other"],
    stack: ["C#", "WinForms"],
    github: "https://github.com/SHAJAR5110/GUI-Top-down-car-game",
    year: 2023,
  },
  {
    id: "library-management",
    name: "Library Management System",
    description: "Console application for managing a library catalogue: add, remove, search and list books.",
    tags: ["other"],
    stack: ["C#"],
    github: "https://github.com/SHAJAR5110/LibraryManagement",
    year: 2023,
  },
  {
    id: "typescript-45-questions",
    name: "45 TypeScript Questions",
    description: "Worked solutions to 45 TypeScript assignment questions, each with explanation.",
    tags: ["other"],
    stack: ["TypeScript"],
    github: "https://github.com/SHAJAR5110/45_Questions",
    year: 2023,
  },
];

/* ============================================================
 * Helpers - you normally do not need to touch anything below.
 * ============================================================ */

/** Resolve a project's artwork, falling back to a category graphic. */
export function getProjectImage(project) {
  if (project.image) return project.image;
  const primaryTag = project.tags?.[0];
  return fallbackImages[primaryTag] || fallbackImages.other;
}

/** Projects marked `featured: true`, in database order. */
export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

/** How many projects sit in each category, for the filter chips. */
export function getCategoryCounts() {
  return categories.reduce((counts, category) => {
    counts[category.id] =
      category.id === "all"
        ? projects.length
        : projects.filter((project) => project.tags?.includes(category.id)).length;
    return counts;
  }, {});
}

export default projects;
