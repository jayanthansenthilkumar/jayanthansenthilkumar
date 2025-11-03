
import { Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";
import { Message } from "@/types/chat";

interface MessageBubbleProps {
  message: Message;
  isSpeaking: boolean;
  onSpeak: (text: string) => void;
  onStopSpeaking: () => void;
}

const MessageBubble = ({ message, isSpeaking, onSpeak, onStopSpeaking }: MessageBubbleProps) => {
  return (
    <div
      className={cn(
        "flex",
        message.isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[80%] rounded-2xl p-3 text-sm",
          message.isUser
            ? "bg-portfolio-teal text-white"
            : "bg-portfolio-subtle text-portfolio-navy"
        )}
      >
        {message.text}
        {!message.isUser && (
          <button
            onClick={() => isSpeaking ? onStopSpeaking() : onSpeak(message.text)}
            className="ml-2 text-portfolio-navy/60 hover:text-portfolio-navy"
          >
            {isSpeaking ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
