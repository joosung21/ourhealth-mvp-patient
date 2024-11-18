import React from 'react';
import { Avatar, Text, useMantineTheme } from '@mantine/core';

interface ChatMessageProps {
  message: string;
  avatar: string;
  isDoctor: boolean;
  timestamp: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  avatar,
  isDoctor,
  timestamp,
}) => {
  const theme = useMantineTheme();

  return (
    <div className={`flex ${isDoctor ? 'justify-start' : 'justify-end'} mb-4`}>
      {isDoctor && <Avatar src={avatar} radius="xl" className="mr-2" />}
      <div>
        <div
          className="max-w-xs md:max-w-md px-4 py-2 rounded-lg"
          style={{
            backgroundColor: isDoctor ? theme.colors.darkTeal[5] : theme.colors.gray[1],
            color: isDoctor ? theme.white : theme.black,
          }}
        >
          <Text>{message}</Text>
        </div>
        <div className={`text-${isDoctor ? 'left' : 'right'} mt-1 text-xs px-2 text-gray-500`}>
          {timestamp}
        </div>
      </div>
      {!isDoctor && <Avatar src={avatar} radius="xl" className="ml-2" />}
    </div>
  );
};
