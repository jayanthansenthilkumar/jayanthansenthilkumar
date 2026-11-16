import { Helmet } from "react-helmet-async";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { PORTAL_CONFIG } from "@/config/links";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F0EA] text-[#0A0A0A] relative selection:bg-[#CCFF00] selection:text-[#0A0A0A]">
      <Helmet>
        <title>{PORTAL_CONFIG.metaTitle}</title>
        <meta name="description" content={PORTAL_CONFIG.metaDescription} />
        <meta property="og:title" content={PORTAL_CONFIG.metaTitle} />
        <meta property="og:description" content={PORTAL_CONFIG.metaDescription} />
        <meta property="og:type" content="website" />
        <meta name="author" content="Jayanthan Senthilkumar" />
      </Helmet>

      {/* Structural Architectural Grid Lines (Subtle Swiss Grid) */}
      <div className="fixed inset-0 pointer-events-none flex justify-center z-0 overflow-hidden">
        <div className="w-full max-w-7xl h-full flex border-x border-[#0A0A0A]/10">
          <div className="flex-1 border-r border-[#0A0A0A]/10 hidden md:block"></div>
          <div className="flex-1 border-r border-[#0A0A0A]/10 hidden md:block"></div>
          <div className="flex-1 hidden md:block"></div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen justify-between">
        <main className="flex-1 flex flex-col justify-center">
          <Hero />
        </main>
        <Footer />
      </div>
    </div>
  );
}
