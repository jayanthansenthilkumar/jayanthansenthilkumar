
import { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mic, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  input: string;
  isLoading: boolean;
  isListening: boolean;
  onChange: (value: string) => void;
  onSend: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onStartListening: () => void;
  onStopListening: () => void;
}

const ChatInput = forwardRef<HTMLTextAreaElement, ChatInputProps>(
  ({ input, isLoading, isListening, onChange, onSend, onKeyDown, onStartListening, onStopListening }, ref) => {
    return (
      <div className="p-4 border-t border-gray-100">
        <div className="flex gap-2">
          <Textarea
            ref={ref}
            value={input}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Type your message..."
            className="min-h-12 resize-none border-gray-200 focus:border-portfolio-teal"
            disabled={isLoading}
          />
          <div className="flex flex-col gap-2">
            <Button
              onClick={onSend}
              disabled={!input.trim() || isLoading}
              className="h-12 bg-portfolio-teal hover:bg-portfolio-navy"
            >
              <Send size={18} />
            </Button>
            <Button
              onClick={isListening ? onStopListening : onStartListening}
              disabled={isLoading}
              className={cn(
                "h-12",
                isListening
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-portfolio-purple hover:bg-portfolio-navy"
              )}
            >
              <Mic size={18} />
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

ChatInput.displayName = "ChatInput";

export default ChatInput;
