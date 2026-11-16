import { Helmet } from "react-helmet-async";
import { HoneycombBackground } from "@/components/HoneycombBackground";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { PORTAL_CONFIG } from "@/config/links";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#080A09] text-[#F4F4ED] relative selection:bg-[#C6FF00] selection:text-[#080A09] overflow-x-hidden">
      <Helmet>
        <title>{PORTAL_CONFIG.metaTitle}</title>
        <meta name="description" content={PORTAL_CONFIG.metaDescription} />
        <meta property="og:title" content={PORTAL_CONFIG.metaTitle} />
        <meta property="og:description" content={PORTAL_CONFIG.metaDescription} />
        <meta property="og:type" content="website" />
        <meta name="author" content="Jayanthan Senthilkumar" />
        <meta name="theme-color" content="#C6FF00" />
      </Helmet>

      {/* Honeycomb Geometric Background Architecture */}
      <HoneycombBackground />

      {/* Main Viewport Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen justify-between">
        <main className="flex-1 flex flex-col justify-center">
          <Hero />
        </main>
        <Footer />
      </div>
    </div>
  );
}
