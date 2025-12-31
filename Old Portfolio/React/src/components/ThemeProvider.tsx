import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }) {
  // This ensures that the ThemeProvider component is only rendered on the client side
  const [mounted, setMounted] = useState(false);

  // When the component mounts, mark it as mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // If the component is not mounted yet, render nothing to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <NextThemesProvider defaultTheme="dark" enableSystem attribute="class">
      {children}
    </NextThemesProvider>
  );
}
