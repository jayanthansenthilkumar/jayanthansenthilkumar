import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { PORTAL_CONFIG } from "@/config/links";

export const App: FC = () => {
  const { meta } = PORTAL_CONFIG;

  return (
    <div className="min-h-screen flex flex-col bg-[#090D16] text-[#F8FAFC] relative overflow-x-hidden selection:bg-sky-400 selection:text-slate-950 font-['Plus_Jakarta_Sans',sans-serif]">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta name="author" content="Jayanthan Senthilkumar" />
        <meta name="theme-color" content="#090D16" />
      </Helmet>

      {/* Global Background Ambience Grid & Ambient Top Glow */}
      <div className="fixed inset-0 tech-grid-pattern opacity-30 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-sky-500/10 via-indigo-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* ONLY HERO SECTION AND FOOTER IN THIS HOME PAGE */}
      <main className="flex-1 flex flex-col justify-center relative z-10">
        <Hero />
      </main>

      <Footer />
    </div>
  );
};

export default App;
