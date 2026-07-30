export interface Project {
  id: string;
  tech: string;
  title: string;
  metric: string;
  metricLabel: string;
  description: string;
  link: string;
  problem: string;
  solution: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    id: "plango-ai-trip",
    tech: "Flask, ML, SQLite, JS",
    title: "PLANGO - AI Trip Planner",
    metric: "40%",
    metricLabel: "Accuracy Inc.",
    description: "Built a scalable AI-based trip optimizer with real-time traffic data, improving route accuracy by 40% and reducing latency by 60%. Engineered predictive models boosting user satisfaction by 35%.",
    link: "https://github.com/prithikakannan",
    problem: "Users struggled to create optimal travel itineraries due to a lack of real-time traffic integration and intelligent routing, resulting in inefficient travel plans and increased travel times.",
    solution: "I engineered a scalable AI-based trip optimizer that leverages predictive models and real-time traffic data. By analyzing historical and live data, the application generates highly accurate routes, reducing routing latency by 60% and ultimately boosting overall user satisfaction.",
    techStack: ["Python", "Flask", "Machine Learning", "SQLite", "JavaScript", "HTML/CSS"]
  },
  {
    id: "geo-tagging-system",
    tech: "PHP, MySQL, Maps API",
    title: "Geo Tagging Issue Reported System",
    metric: "50%",
    metricLabel: "Time Reduction",
    description: "Developed a platform enabling users to submit location-based complaints with real-time map integration, reducing issue reporting time by 50%. Implemented role-based dashboards.",
    link: "https://github.com/prithikakannan",
    problem: "Citizens faced significant friction when reporting local infrastructure issues. The lack of precise location data and a centralized dashboard led to delayed responses and inefficient complaint resolution by administrators.",
    solution: "I developed a comprehensive geo-tagged platform integrating the Google Maps API. This allowed users to easily submit location-based complaints. I also implemented optimized database structures and role-based dashboards for administrators, which improved the complaint resolution efficiency by 40%.",
    techStack: ["PHP", "MySQL", "JavaScript", "Google Maps API", "HTML", "CSS"]
  },
  {
    id: "rock-paper-scissors",
    tech: "Python",
    title: "Rock Paper Scissors Game",
    metric: "35%",
    metricLabel: "Maintainability",
    description: "Built an interactive command-line game using Python with randomized logic. Designed modular game logic and input validation, improving code maintainability by 35%.",
    link: "https://github.com/prithikakannan",
    problem: "Many command-line implementations of classic games suffer from procedural, hard-to-maintain code and poor input validation, leading to buggy user experiences.",
    solution: "I built an interactive, terminal-based Rock Paper Scissors game focused on clean, modular game logic. By abstracting the core rules, randomizing the AI responses effectively, and implementing robust input validation, I delivered a highly maintainable and accurate game.",
    techStack: ["Python", "Command Line Interface", "Modular Architecture"]
  }
];
