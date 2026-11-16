import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { PORTAL_CONFIG } from "@/config/links";

export const App: FC = () => {
  const { meta } = PORTAL_CONFIG;

  return (
    <div>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
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
