import { Outlet } from "react-router-dom";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
// import { AIAssistantWidget } from "@/components/layout/AIAssistantWidget";





export default function RootLayout() {
  return (
    <>
      {/* Global Structural Grid */}
      <div className="fixed inset-0 pointer-events-none flex justify-center z-0 overflow-hidden">
        <div className="w-full max-w-7xl h-full flex border-x border-gray-200/60">
          <div className="flex-1 border-r border-gray-200/60 hidden md:block"></div>
          <div className="flex-1 border-r border-gray-200/60 hidden md:block"></div>
          <div className="flex-1 hidden md:block"></div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-14">
          <Outlet />
        </main>
        <Footer />
        <ScrollToTop />
        {/* <AIAssistantWidget /> */}
      </div>
    </>
  );
}
