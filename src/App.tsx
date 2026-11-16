import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { PORTAL_CONFIG } from "@/config/links";

export const App: FC = () => {
  const { meta } = PORTAL_CONFIG;

  return (
    <div className="h-screen h-dvh max-h-screen max-h-dvh w-screen w-full flex flex-col justify-between bg-[#F4E4CC] text-[#171717] bg-dots-subtle overflow-hidden">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta name="author" content="Jayanthan Senthilkumar" />
        <meta name="theme-color" content="#F4E4CC" />
      </Helmet>

      {/* Main Single-Screen Hero Viewport */}
      <main className="flex-1 min-h-0 flex flex-col justify-between w-full">
        <Hero />
      </main>

      {/* Integrated Single-Screen Footer */}
      <Footer />
    </div>
  );
};

export default App;
