export interface DestinationItem {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly subtitle: string;
  readonly cta: string;
  readonly url: string;
  readonly accentColor: string;
  readonly tag: string;
}

export interface SocialLink {
  readonly name: string;
  readonly url: string;
  readonly label: string;
  readonly handle: string;
}

export const PORTAL_CONFIG = {
  branding: {
    siteName: "JAYANTHAN.FYI",
    monogram: "JS",
    domain: "jayanthan.fyi",
  },
  hero: {
    introLabel: "HELLO, WORLD! I'M",
    firstName: "JAYANTHAN",
    lastName: "SENTHILKUMAR.",
    fullName: "JAYANTHAN SENTHILKUMAR.",
    supportingHeadline: "SOFTWARE ENGINEER. CREATOR. INNOVATOR.",
    introduction:
      "Passionate about engineering meaningful digital experiences, exploring emerging technologies and transforming ambitious ideas into reality.",
    identityBadge: "SOFTWARE ENGINEER | TECHNOLOGY ENTHUSIAST",
    statusBadge: "AVAILABLE FOR COLLABORATION",
    locationBadge: "CHENNAI, INDIA / REMOTE",
  },
  destinations: {
    portfolio: {
      id: "portfolio",
      number: "01",
      title: "MY PORTFOLIO",
      subtitle:
        "Discover my professional journey, technical expertise, achievements and work.",
      cta: "EXPLORE PORTFOLIO ↗",
      url: "https://hilo.jayanthan.fyi",
      accentColor: "#FF713D", // Signal Orange
      tag: "WORK & PRODUCTION CODE",
    },
    blogs: {
      id: "blogs",
      number: "02",
      title: "MY BLOGS",
      subtitle:
        "Explore my technical articles, thoughts, development insights and experiments.",
      cta: "READ MY BLOGS ↗",
      url: "https://blogs.jayanthan.fyi",
      accentColor: "#46D9BC", // Mint Green
      tag: "WRITING & RESEARCH NOTES",
    },
  },
  social: [
    {
      name: "GitHub",
      url: "https://github.com/jayanthansenthilkumar",
      label: "GitHub Profile",
      handle: "@jayanthansenthilkumar",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jayanthan18",
      label: "LinkedIn Profile",
      handle: "/in/jayanthan18",
    },
    {
      name: "Email",
      url: "mailto:jayanthansenthilkumar18@gmail.com",
      label: "Send Email",
      handle: "jayanthansenthilkumar18@gmail.com",
    },
  ],
  footer: {
    motto: "Building ideas. Creating impact.",
    copyrightNotice: "All rights reserved. Designed with Neo-Brutalist precision.",
  },
  meta: {
    title: "Jayanthan Senthilkumar // Central Personal Portal",
    description:
      "Central personal portal for Jayanthan Senthilkumar — Software Engineer, Creator, Innovator. Gateway to Personal Portfolio and Technical Blogs.",
  },
} as const;
