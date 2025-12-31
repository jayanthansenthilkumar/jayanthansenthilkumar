import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpCircle } from "lucide-react";

export function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          className="fixed bottom-8 right-8 z-50 rounded-full shadow-lg hover:scale-110 transition-all duration-300 bg-primary text-primary-foreground"
          size="icon"
          onClick={scrollToTop}
          aria-label="Go to top"
        >
          <ArrowUpCircle className="h-6 w-6" />
        </Button>
      )}
    </>
  );
}
