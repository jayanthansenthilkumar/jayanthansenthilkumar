import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { PORTAL_CONFIG } from "@/config/links";

export const App: FC = () => {
  const { meta } = PORTAL_CONFIG;

  return (
    <div className="min-h-screen min-h-svh w-full flex flex-col justify-between bg-[#FAF8F5] text-[#18181B] relative font-['Manrope',sans-serif] overflow-x-hidden pt-[max(0.25rem,env(safe-area-inset-top))]">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta name="author" content="Jayanthan Senthilkumar" />
        <meta name="theme-color" content="#FAF8F5" />
      </Helmet>

      {/* Subtle Architectural Micro-Texture & Top Ambient Warm Lighting */}
      <div className="fixed inset-0 calm-subtle-grid opacity-35 pointer-events-none -z-10" aria-hidden="true" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[min(600px,90vw)] h-[180px] bg-gradient-to-b from-[#ECE6DA]/50 to-transparent blur-3xl pointer-events-none -z-10" aria-hidden="true" />

      {/* MAIN VIEWPORT COMPOSITION */}
      <main className="flex-1 flex flex-col justify-between w-full relative z-10 min-h-0">
        <Hero />
      </main>

      {/* INTEGRATED FOOTER */}
      <Footer />
    </div>
  );
};

export default App;
