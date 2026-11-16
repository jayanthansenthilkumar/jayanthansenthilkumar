import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { PORTAL_CONFIG } from "@/config/links";

export const App: FC = () => {
  const { meta } = PORTAL_CONFIG;

  return (
    <div className="h-screen h-dvh max-h-screen max-h-dvh w-screen w-full flex flex-col justify-between bg-[#090D16] text-[#F8FAFC] relative overflow-hidden select-none font-['Plus_Jakarta_Sans',sans-serif]">
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
      <div className="fixed inset-0 tech-grid-pattern opacity-25 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gradient-to-b from-sky-500/15 via-indigo-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* SINGLE NON-SCROLLABLE HERO VIEWPORT */}
      <main className="flex-1 min-h-0 flex flex-col justify-between w-full overflow-hidden relative z-10">
        <Hero />
      </main>

      {/* INTEGRATED SINGLE-SCREEN FOOTER STRIP */}
      <Footer />
    </div>
  );
};

export default App;
