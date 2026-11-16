export interface PortalLink {
  index: string;
  title: string;
  destination: string;
  url: string;
  description: string;
  badge: string;
  accent: "lime" | "cobalt";
}

export const PORTAL_CONFIG = {
  name: "JAYANTHAN SENTHILKUMAR",
  tagline: "Developer. Builder. Lifelong Learner.",
  metaTitle: "Jayanthan Senthilkumar // Central Portal",
  metaDescription: "Central personal portal for Jayanthan Senthilkumar — Developer. Builder. Lifelong Learner. Gateway to personal portfolio and blogs.",
  destinations: {
    portfolio: {
      index: "01",
      title: "MY PORTFOLIO",
      destination: "hilo.jayanthan.fyi",
      url: "https://hilo.jayanthan.fyi",
      description: "Interactive showcase of software architectures, systems engineering, and full-stack projects.",
      badge: "PRODUCTION & PROJECTS",
      accent: "lime" as const,
    },
    blogs: {
      index: "02",
      title: "MY BLOGS",
      destination: "blogs.jayanthan.fyi",
      url: "https://blogs.jayanthan.fyi",
      description: "Technical essays, engineering deep-dives, systems insights, and personal development notes.",
      badge: "WRITING & ARTICLES",
      accent: "cobalt" as const,
    },
  },
  social: [
    { name: "GITHUB", url: "https://github.com/jayanthansenthilkumar", label: "GitHub Profile" },
    { name: "LINKEDIN", url: "https://www.linkedin.com/in/jayanthan18", label: "LinkedIn Profile" },
    { name: "MEDIUM", url: "https://medium.com/@jayanthansenthilkumar", label: "Medium Publications" },
    { name: "EMAIL", url: "mailto:jayanthansenthilkumar18@gmail.com", label: "Email Address" },
  ],
} as const;

