
export type Message = {
  id: string;
  text: string;
  isUser: boolean;
};

export const INITIAL_MESSAGES = [
  {
    id: "welcome-message",
    text: "Hi there! I'm the AI assistant for this portfolio. How can I help you today?",
    isUser: false,
  },
];
