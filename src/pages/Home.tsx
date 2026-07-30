import { Helmet } from "react-helmet-async";
import { HeroSection } from "@/components/home/HeroSection";
import { TechnologyStack } from "@/components/home/TechnologyStack";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Prithika Kannan | Full-Stack Software Engineer & ML Developer</title>
        <meta name="description" content="Welcome to the portfolio of Prithika Kannan. Discover my technical skills in Python, React, Flask, and Machine Learning, and explore my full-stack engineering projects." />
        <meta name="keywords" content="Prithika Kannan Portfolio, Software Engineer Madurai, Full-Stack Developer, Python Developer, ML Engineer" />
      </Helmet>
      
      <HeroSection />
      <TechnologyStack />
      
      {/* Spacer before footer */}
      <div className="py-12"></div>
    </div>
  );
}
