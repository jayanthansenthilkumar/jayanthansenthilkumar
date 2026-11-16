import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { PORTAL_CONFIG } from "@/config/links";

export const App: FC = () => {
  const { meta } = PORTAL_CONFIG;

  return (
    <div className="h-screen h-dvh max-h-screen max-h-dvh w-screen w-full flex flex-col justify-between bg-[#090D16] text-[#F8FAFC] relative select-none font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta name="author" content="Jayanthan Senthilkumar" />
        <meta name="theme-color" content="#090D16" />
      </Helmet>

      {/* Global Background Ambience Grid & Top Ambient Radial Backlight */}
      <div className="fixed inset-0 tech-grid-pattern opacity-25 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[260px] bg-gradient-to-b from-sky-500/15 via-indigo-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* Edge Vignette Feathers for 21:9 Ultrawide and 32:9 49" Super Ultrawide Displays */}
      <div className="fixed inset-y-0 left-0 w-24 lg:w-48 bg-gradient-to-r from-[#090D16] to-transparent pointer-events-none hidden xl:block z-20" />
      <div className="fixed inset-y-0 right-0 w-24 lg:w-48 bg-gradient-to-l from-[#090D16] to-transparent pointer-events-none hidden xl:block z-20" />

      {/* SINGLE NON-SCROLLABLE HERO VIEWPORT */}
      <main className="flex-1 min-h-0 flex flex-col justify-between w-full relative z-10 overflow-hidden">
        <Hero />
      </main>

      {/* INTEGRATED SINGLE-SCREEN FOOTER STRIP */}
      <Footer />
    </div>
  );
};

export default App;
