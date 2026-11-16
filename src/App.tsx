import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { PORTAL_CONFIG } from "@/config/links";

export const App: FC = () => {
  const { meta } = PORTAL_CONFIG;

  return (
    <div className="h-screen h-dvh max-h-screen max-h-dvh w-screen w-full flex flex-col justify-between bg-[#FAF8F5] text-[#18181B] relative select-none font-['Manrope',sans-serif] overflow-hidden">
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
      <div className="fixed inset-0 calm-subtle-grid opacity-35 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-b from-[#ECE6DA]/50 to-transparent blur-3xl pointer-events-none" />

      {/* Bilateral Edge Vignettes for Ultrawide 21:9 and Super Ultrawide 32:9 Displays */}
      <div className="fixed inset-y-0 left-0 w-20 lg:w-40 bg-gradient-to-r from-[#FAF8F5] to-transparent pointer-events-none hidden xl:block z-20" />
      <div className="fixed inset-y-0 right-0 w-20 lg:w-40 bg-gradient-to-l from-[#FAF8F5] to-transparent pointer-events-none hidden xl:block z-20" />

      {/* SINGLE VIEWPORT: HERO SECTION (ZERO SCROLLING) */}
      <main className="flex-1 min-h-0 flex flex-col justify-between w-full relative z-10 overflow-hidden">
        <Hero />
      </main>

      {/* INTEGRATED SINGLE-VIEWPORT FOOTER */}
      <Footer />
    </div>
  );
};

export default App;
