import { useEffect, useState, FC } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export const ScrollToTop: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 left-6 p-3 bg-[#FFFFFF] border-2 border-[#0A0A0A] text-[#0A0A0A] shadow-[4px_4px_0px_#0A0A0A] hover:bg-[#CCFF00] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#0A0A0A] transition-all duration-150 z-40 flex items-center justify-center cursor-pointer",
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
