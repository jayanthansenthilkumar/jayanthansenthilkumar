import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { PORTAL_CONFIG } from "@/config/links";

export const App: FC = () => {
  const { meta } = PORTAL_CONFIG;

  return (
    <div className="min-h-screen flex flex-col bg-[#F4E4CC] text-[#171717] bg-dots-subtle relative overflow-x-hidden">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta name="author" content="Jayanthan Senthilkumar" />
        <meta name="theme-color" content="#F4E4CC" />
      </Helmet>

      {/* 1. NAVIGATION BAR */}
      <Navbar />

      {/* 2. HERO SECTION — THE MAIN FOCUS */}
      <main className="flex-1 flex flex-col justify-center">
        <Hero />
      </main>

      {/* 3. FOOTER */}
      <Footer />
    </div>
  );
};

export default App;
