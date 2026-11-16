import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeTicker } from "@/components/sections/MarqueeTicker";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";

const HomePage: FC = () => {
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Jayanthan Senthilkumar // AI &amp; ML Engineer | Architecture &amp; Systems</title>
        <meta
          name="description"
          content="Personal portfolio and central portal of Jayanthan Senthilkumar. AI & ML Engineer specializing in MLOps, LLMOps, and scalable full-stack architectures."
        />
        <meta property="og:title" content="Jayanthan Senthilkumar // AI & ML Engineer" />
        <meta
          property="og:description"
          content="Engineering Intelligence. Architecting Scalability. Personal engineering dossier and central portal."
        />
      </Helmet>

      {/* 01. Hero Composition */}
      <HeroSection />

      {/* 02. Electric Lime Marquee Ticker */}
      <MarqueeTicker
        variant="lime"
        items={[
          "AI & ML ENGINEER",
          "MLOPS PIPELINES",
          "LLMOPS INFRASTRUCTURE",
          "HIGH-PERFORMANCE ASGI",
          "ENTERPRISE RAG ARCHITECTURES",
          "REACT 19 & TYPESCRIPT",
          "DOCKER CONTAINERIZATION",
          "OPEN FOR ROLES: AUS / USA / IND",
        ]}
      />

      {/* 03. The Engineering Brief (About) */}
      <AboutSection />

      {/* 04. Career Timeline (Experience) */}
      <ExperienceSection />

      {/* 05. Production Projects Gallery */}
      <ProjectsSection />

      {/* 06. Inverted Black Marquee Ticker */}
      <MarqueeTicker
        variant="black"
        reverse
        items={[
          "ENGINEERING INTELLIGENCE",
          "ARCHITECTING SCALABILITY",
          "CONCURRENT ASGI RUNTIMES",
          "CONTAINERIZED MICROSERVICES",
          "AUTOMATED EVALUATION HARNESSES",
          "SUB-100MS VECTOR RETRIEVAL",
          "TELEMETRY-DRIVEN PLATFORMS",
        ]}
      />

      {/* 07. Technical Architecture & Stack (Skills) */}
      <SkillsSection />

      {/* 08. Academic & Credentials (Education) */}
      <EducationSection />

      {/* 09. Direct Gateway & Inquiries (Contact) */}
      <ContactSection />
    </div>
  );
};

export default HomePage;
