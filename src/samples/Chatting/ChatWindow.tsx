import { useEffect, useRef } from 'react';
import { ScrollArea } from '@mantine/core';
import { ChatMessage } from './ChatMessage';

interface ChatMessageType {
  message: string;
  avatar: string;
  isDoctor: boolean;
  timestamp: string;
}

interface ChatWindowProps {
  messages: ChatMessageType[];
}

export default function ChatWindow({ messages }: ChatWindowProps) {
  const viewport = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (viewport.current) {
      viewport.current.scrollTo({
        top: viewport.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  return (
    <ScrollArea
      className="p-4 h-[calc(100dvh-260px)] md:h-[calc(100dvh-420px)]"
      viewportRef={viewport}
    >
      {messages.map((msg, index) => (
        <ChatMessage
          key={index}
          message={msg.message}
          avatar={msg.avatar}
          isDoctor={msg.isDoctor}
          timestamp={msg.timestamp}
        />
      ))}
    </ScrollArea>
  );
}
