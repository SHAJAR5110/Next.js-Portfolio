# Portfolio Structure & Components Documentation

## 📋 Project Overview
- **Framework**: Next.js 13.5+ with React 18
- **Styling**: Tailwind CSS with custom theme (Purple & Pink)
- **Animations**: Framer Motion
- **Deployment**: Vercel
- **Features**: Email contact form, project filtering, smooth animations

---

## 🎨 Component Architecture

### **Main Page Structure** (`src/app/page.js`)
The home page uses a modular component structure:
```
Home
├── Navbar
├── HeroSection
├── AchievementsSection
├── AboutSection
├── ProjectsSection
├── EmailSection
└── Footer
```

---

## 📦 Components Breakdown

### **1. Navbar** (`src/app/components/Navbar.jsx`)
- **Purpose**: Fixed navigation bar with responsive mobile menu
- **Features**:
  - Logo display (logo.svg)
  - Navigation links: About, Projects, Contact (via NavLink)
  - Mobile hamburger menu (Bars3Icon, XMarkIcon from heroicons)
  - Menu overlay for mobile (MenuOverlay component)
- **State**: `navbarOpen` - toggles mobile menu visibility
- **Dependencies**: NavLink, MenuOverlay, heroicons

### **2. HeroSection** (`src/app/components/HeroSection.jsx`)
- **Purpose**: Main landing section with introduction
- **Features**:
  - Animated entrance (Framer Motion)
  - Gradient text for name: "Hello, I'm Shajar Abbas"
  - TypeAnimation: Rotating job titles
    - "MERN Stack Developer"
    - "Agentic Ai Developer"
    - "Programmer"
  - "Hire Me" button (links to #contact)
  - "Download CV" button (links to Google Drive)
  - Profile image in circular container
  - Grid layout (8 cols text, 4 cols image on desktop)
- **Technologies**: React Type Animation, Framer Motion, Next.js Image

### **3. AchievementsSection** (`src/app/components/AchievementsSection.jsx`)
- **Purpose**: Showcase statistics with animated counters
- **Features**:
  - Animated number counter for metrics
  - 3 metrics displayed:
    - Projects: 50+
    - Programming Languages: ~10
    - Certifications: 10+
  - React Animated Numbers library
  - Responsive layout (flex row on desktop, column on mobile)
- **Dependencies**: react-animated-numbers (dynamically imported, SSR disabled)

### **4. AboutSection** (`src/app/components/AboutSection.jsx`)
- **Purpose**: Profile information with tabbed content
- **Features**:
  - About me image + text layout
  - Tabbed interface with 3 tabs:
    - **Skills**: MERN, Node.js, MongoDB, Firebase, Python, OpenAI SDK, etc.
    - **Education**: Software Engineering (undergrad), F.sc
    - **Certifications**: Certified Gen AI Developer (PEC), internships, etc.
  - Smooth tab transitions (useTransition hook)
  - Two-column layout (image left, content right)
- **State**: `tab` - current active tab, `isPending` - loading state

### **5. ProjectsSection** (`src/app/components/ProjectsSection.jsx`)
- **Purpose**: Showcase all projects with filtering
- **Features**:
  - Project data array (30 projects)
  - Filter tags: All, Web, Npm
  - Grid layout: 3 columns on desktop
  - Framer Motion animations (staggered entry effect)
  - Projects include:
    - **Client projects**: HVAC Website, Agentic AI (Robo Growth)
    - **Full stack**: E-commerce, FashioNest
    - **AI/ML**: Dr. AI (RAG chatbot), Resume Analyzer, Eco Aware
    - **UI clones**: Spotify, Internee.pk
    - **Streamlit apps**: Data Sweeper, Secure Encryption, Unit Converter
    - **NPM packages**: Calculator, Number Guessing Game, ATM Machine
- **State**: `tag` - current filter
- **Dependencies**: ProjectCard, ProjectTag

### **6. ProjectCard** (`src/app/components/ProjectCard.jsx`)
- **Purpose**: Individual project card component
- **Features**:
  - Project image with hover overlay
  - GitHub icon (CodeBracketIcon) - links to git repo
  - Eye icon (EyeIcon) - links to live preview
  - Icons appear on hover with smooth transition
  - Title and description display
  - Fixed height: 52px (mobile), 72px (desktop)
- **Props**: `imgUrl`, `title`, `description`, `gitUrl`, `previewUrl`

### **7. ProjectTag** (`src/app/components/ProjectTag.jsx`)
- **Purpose**: Filter button for projects
- **Features**:
  - Active/inactive styling
  - Border color changes (primary-500 when active)
  - Text color changes (white when active, gray when inactive)
  - Click handler to filter projects
- **Props**: `name`, `onClick`, `isSelected`

### **8. EmailSection** (`src/app/components/EmailSection.jsx`)
- **Purpose**: Contact form and social links
- **Features**:
  - Email contact form with fields:
    - Email input
    - Subject input
    - Message textarea
  - Form submission to `/api/send` endpoint
  - Success message on submission
  - Social links: GitHub, LinkedIn
  - Radial gradient background animation
  - Two-column layout
- **State**: `emailSubmitted` - tracks form submission
- **Icons**: GitHub & LinkedIn SVG icons

### **9. Footer** (`src/app/components/Footer.jsx`)
- **Purpose**: Bottom section with branding
- **Features**:
  - Logo display (logo2.svg)
  - Copyright text: "All rights reserved"
  - Fixed border styling
  - Simple responsive layout

---

## 🔧 UI Components (Reusable)

### **NavLink** (`src/app/components/NavLink.jsx`)
- Simple wrapper around Next.js Link
- Used in Navbar for navigation items
- Styles: Gray text, white on hover

### **MenuOverlay** (`src/app/components/MenuOverlay.jsx`)
- Mobile menu display
- Maps over navLinks array
- Used in Navbar for mobile-only view

### **TabButton** (`src/app/components/TabButton.jsx`)
- Reusable tab button with animated underline
- Framer Motion animation for underline width
- Used in AboutSection for Skills/Education/Certifications tabs

---

## 🎨 Styling & Theme

### **Color Scheme**
- **Primary**: Purple (gradient from #c182d8 to #4a00e0)
- **Secondary**: Pink
- **Background**: Dark (#121212, #181818)
- **Text**: White for primary, #ADB7BE for secondary
- **Borders**: #33353F

### **Layout**
- Container-based responsive grid
- Tailwind CSS utilities
- Mobile-first approach

---

## 📡 API Integration

### **Email API** (`/api/send`)
- **Method**: POST
- **Payload**: `{ email, subject, message }`
- **Response**: JSON with status
- **Used by**: EmailSection component

---

## 🖼️ Assets

Located in `/public`:
- `MyImage.png` - Profile photo
- `logo.svg` - Navbar logo
- `logo2.svg` - Footer logo
- `github-icon.svg` - GitHub link
- `linkedin-icon.svg` - LinkedIn link
- `/images/about-image.png` - About section
- `/images/projects/` - 30 project images

---

## 📊 Project Statistics
- **Total Projects**: 30
- **Categories**: Web (22), Npm (5), Other (3)
- **Technologies**: React, Next.js, Python, Streamlit, Tailwind, Firebase, MongoDB

---

## 🔌 Dependencies

### **Core**
- next@13.5.11
- react@18.2.0
- tailwindcss@3.3.3

### **Animation**
- framer-motion@10.16.1
- react-animated-numbers@0.16.0
- react-type-animation@3.1.0

### **UI**
- @heroicons/react@2.0.18

### **Email**
- nodemailer@7.0.6
- @react-email/components@0.5.2
- resend@1.1.0

### **Utilities**
- dotenv@16.4.7
- node-fetch@3.3.2

---

## 🚀 Key Features Summary

✅ Modern, animated portfolio
✅ 30+ projects showcased
✅ Responsive design (mobile, tablet, desktop)
✅ Contact form integration
✅ Social media links
✅ Project filtering
✅ Smooth page transitions
✅ Dark theme with purple/pink accent

