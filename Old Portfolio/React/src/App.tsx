import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ScrollToTop } from "./components/ScrollToTop";
import { ThemeProvider } from "./components/ThemeProvider";
import { GoToTop } from "./components/GoToTop";
import AnimatedRoutes from "./components/AnimatedRoutes";
import PageTransitionEffect from "./components/PageTransitionEffect";
import Loader from "./components/Loader";
import InitialLoader from "./components/InitialLoader";
import { LoadingProvider } from "./contexts/LoadingContext";

// Page transitions are handled in AnimatedRoutes component

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <LoadingProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            {/* Initial loader to handle app startup */}
            <InitialLoader />
            
            {/* Added ScrollToTop at strategic position to coordinate with transitions */}
            <ScrollToTop />
            <PageTransitionEffect />
            <Loader />
            <div className="page-container fixed-height z-0">
              <AnimatedRoutes />
            </div>
            <GoToTop />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </LoadingProvider>
  </ThemeProvider>
);

export default App;
