import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { PORTAL_CONFIG } from "@/config/links";

export const App: FC = () => {
  return (
    <div>
      <Helmet>
        <title>{PORTAL_CONFIG.metaTitle}</title>
        <meta name="description" content={PORTAL_CONFIG.metaDescription} />
        <meta property="og:title" content={PORTAL_CONFIG.metaTitle} />
        <meta property="og:description" content={PORTAL_CONFIG.metaDescription} />
        <meta property="og:type" content="website" />
        <meta name="author" content="Jayanthan Senthilkumar" />
      </Helmet>

      <main>
        <Hero />
      </main>

      <Footer />
    </div>
  );
};

export default App;
