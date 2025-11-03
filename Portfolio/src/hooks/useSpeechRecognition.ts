
import { useState } from 'react';

export const useSpeechRecognition = (onTranscript: (text: string) => void) => {
  const [isListening, setIsListening] = useState(false);
  
  // Speech recognition with proper type checking
  const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = SpeechRecognitionAPI ? new SpeechRecognitionAPI() : null;
  
  if (recognition) {
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      onTranscript(transcript);
      setIsListening(false);
    };
    recognition.onerror = () => {
      setIsListening(false);
    };
    recognition.onend = () => {
      setIsListening(false);
    };
  }

  const startListening = () => {
    if (recognition) {
      recognition.start();
      setIsListening(true);
    }
  };
  
  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
  };

  return { isListening, startListening, stopListening };
};
