import MotionProvider from "./components/MotionProvider";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import HeroSection from "./components/HeroSection";
import StatsStrip from "./components/StatsStrip";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <MotionProvider>
      <ScrollProgress />
      <Navbar />

      {/* 100dvh as an arbitrary value: Tailwind 3.3 has no min-h-dvh utility. */}
      <main id="main" className="flex min-h-[100dvh] flex-col">
        <HeroSection />
        <StatsStrip />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </MotionProvider>
  );
}
