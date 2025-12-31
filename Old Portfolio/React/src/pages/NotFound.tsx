import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5 dark:from-background dark:to-primary/5 flex flex-col items-center justify-center px-6 py-24">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <span className="text-9xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            404
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Page not found
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground inline-flex items-center">
          <Link to="/">
            <ArrowLeft size={18} className="mr-2" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
