/**
 * =============================================================
 *  ABOUT DATABASE
 * =============================================================
 *  Powers the tabbed panel in the About section and the metric
 *  counters above it. Add, remove or reorder freely.
 * =============================================================
 */

/**
 * Counters shown in the stats strip.
 * `value` must be a number; `suffix` is appended after it.
 */
export const stats = [
  { id: "projects", value: 58, suffix: "+", label: "Projects Delivered" },
  { id: "languages", value: 8, suffix: "", label: "Languages & Runtimes" },
  { id: "certs", value: 7, suffix: "+", label: "Certifications" },
  { id: "workload", value: 90, suffix: "%", label: "Workload Automated" },
];

/**
 * Tabs in the About section.
 * Each tab has `groups`, and each group has a `title` and `items`.
 * A group with no `title` renders as a plain list.
 */
export const aboutTabs = [
  {
    id: "skills",
    label: "Skills",
    groups: [
      {
        title: "Languages & Frameworks",
        items: [
          "Python for agents, Digital FTEs and ML",
          "JavaScript & TypeScript",
          "React and Next.js on the front end",
          "Node.js and Express on the back end",
        ],
      },
      {
        title: "AI & Automation",
        items: [
          "OpenAI SDK and Claude for agent building",
          "Agentic AI and autonomous systems",
          "Prompt engineering and RAG pipelines",
          "n8n, Make.com and GoHighLevel",
          "Vapi and ElevenLabs for voice agents",
          "MCP (Model Context Protocol)",
          "Spec-Driven Development",
          "Claude Code CLI",
        ],
      },
      {
        title: "Infrastructure & Deployment",
        items: [
          "Docker and Kubernetes (minikube)",
          "AWS cloud services",
          "Git and trunk-based workflows",
          "MongoDB and Firebase",
        ],
      },
    ],
  },
  {
    id: "experience",
    label: "Experience",
    groups: [
      {
        items: [
          "AI Engineer delivering agentic systems for international clients",
          "Built a hospital voice assistant handling live calls end to end",
          "Shipped a WordPress platform for a US HVAC contractor",
          "Two internships in web development",
          "One internship in frontend development",
          "DG ISPR internship",
        ],
      },
    ],
  },
  {
    id: "education",
    label: "Education",
    groups: [
      {
        items: [
          "BS Software Engineering, Karachi Campus",
          "CGPA 3.3 across 8 semesters",
          "F.Sc, Bahria College Karsaz",
          "Karachi, Pakistan",
        ],
      },
    ],
  },
  {
    id: "certifications",
    label: "Certifications",
    groups: [
      {
        items: [
          "Certified Gen AI Developer, Pakistan Engineering Council",
          "Agentic AI Bootcamp",
          "Python and React certified",
          "Published article on MCP servers",
          "DEN Coding Competition",
        ],
      },
    ],
  },
];

export default aboutTabs;
