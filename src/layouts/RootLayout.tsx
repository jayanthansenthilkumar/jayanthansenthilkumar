import { Outlet } from "react-router-dom";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { AIAssistantWidget } from "@/components/layout/AIAssistantWidget";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F0EA] text-[#0A0A0A] relative selection:bg-[#CCFF00] selection:text-[#0A0A0A]">
      {/* Structural Architectural Grid Lines (Subtle Swiss Grid) */}
      <div className="fixed inset-0 pointer-events-none flex justify-center z-0 overflow-hidden">
        <div className="w-full max-w-7xl h-full flex border-x border-[#0A0A0A]/10">
          <div className="flex-1 border-r border-[#0A0A0A]/10 hidden md:block"></div>
          <div className="flex-1 border-r border-[#0A0A0A]/10 hidden md:block"></div>
          <div className="flex-1 hidden md:block"></div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        <ScrollToTop />
        <AIAssistantWidget />
      </div>
    </div>
  );
}
