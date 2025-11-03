
const portfolioResponses = {
  "skills": "I specialize in front-end and back-end development, with expertise in React, Node.js, TypeScript, and database design. I also have experience with AI/ML integration.",
  "experience": "I have experience in full-stack development, creating responsive web applications, and integrating AI/ML models into web applications.",
  "education": "I'm currently pursuing a B.Tech in Artificial Intelligence and Machine Learning at M.Kumarasamy College of Engineering.",
  "contact": "You can contact me through the contact form on this website or connect with me on social media platforms linked in the footer.",
  "projects": "My portfolio includes various web applications built with modern frameworks like React, responsive design projects, and AI-integrated solutions.",
  "default": "Thank you for your interest in my portfolio. If you have specific questions about my skills, projects, or experience, feel free to ask!"
};

export const getAIResponse = (userMessage: string): string => {
  const lowerCaseMessage = userMessage.toLowerCase();
  
  if (lowerCaseMessage.includes("skill") || lowerCaseMessage.includes("technology")) {
    return portfolioResponses.skills;
  } else if (lowerCaseMessage.includes("experience") || lowerCaseMessage.includes("work")) {
    return portfolioResponses.experience;
  } else if (lowerCaseMessage.includes("education") || lowerCaseMessage.includes("study")) {
    return portfolioResponses.education;
  } else if (lowerCaseMessage.includes("contact") || lowerCaseMessage.includes("reach")) {
    return portfolioResponses.contact;
  } else if (lowerCaseMessage.includes("project") || lowerCaseMessage.includes("portfolio")) {
    return portfolioResponses.projects;
  } else {
    return portfolioResponses.default;
  }
};
