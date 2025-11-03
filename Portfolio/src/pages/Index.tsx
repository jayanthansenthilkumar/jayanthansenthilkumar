
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Activities from "@/components/Activities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimationObserver from "@/components/AnimationObserver";
import ChatAssistant from "@/components/ChatAssistant";
import { TooltipProvider } from "@/components/ui/tooltip";

const Index = () => {
  return (
    <TooltipProvider>
      <div className="min-h-screen overflow-x-hidden">
        {/* Animation Observer for scroll animations */}
        <AnimationObserver />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content Sections */}
        <main>
          <section id="home" className="pt-0">
            <Hero />
          </section>
          
          <section id="about">
            <About />
          </section>
          
          <section id="education">
            <Education />
          </section>
          
          <section id="experience">
            <Experience />
          </section>
          
          <section id="projects">
            <Projects />
          </section>
          
          <section id="activities">
            <Activities />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Chat Assistant */}
        <ChatAssistant />
      </div>
    </TooltipProvider>
  );
};

export default Index;
