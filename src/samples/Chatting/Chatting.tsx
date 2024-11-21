import { useState } from 'react';
import { Container, Paper, Text } from '@mantine/core';
import ChatInput from './ChatInput';
import ChatWindow from './ChatWindow';

const INIT_MESSAGES = [
  {
    message: '안녕하세요, 무엇을 도와드릴까요?',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
    isDoctor: true,
    timestamp: '10 minutes ago',
  },
  {
    message: '최근에 두통이 심해졌어요.',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
    isDoctor: false,
    timestamp: '5 minutes ago',
  },
  {
    message: '두통이 언제부터 있었나요?',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
    isDoctor: true,
    timestamp: '3 minutes ago',
  },
  {
    message: '이틀 전부터 두통이 있어요.',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
    isDoctor: false,
    timestamp: '2 minutes ago',
  },
  {
    message: '두통이 어떤 상황에서 심해지나요?',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
    isDoctor: true,
    timestamp: '1 minute ago',
  },
  {
    message: '스트레스를 받거나 밝은 곳에서 오래 있으면 더 심해져요.',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
    isDoctor: false,
    timestamp: 'just now',
  },
  {
    message: '혹시 열이 있거나 기침이 있나요?',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
    isDoctor: true,
    timestamp: 'just now',
  },
];

type Message = {
  message: string;
  avatar: string;
  isDoctor: boolean;
  timestamp: string;
};

export default function Chatting() {
  const [messages, setMessages] = useState<Message[]>(INIT_MESSAGES);

  return (
    <Container className="max-sm:p-0 max-sm:-mt-4">
      <h1 className="max-sm:hidden">Chatting UI</h1>
      <Paper
        shadow="xs"
        radius="md"
        className="p-4 md:p-10 max-sm:h-[calc(100dvh-60px)] max-sm:-mb-[100px]"
      >
        <Text size="sm" className="mb-4">
          Dr. Jacob Warnhalter
        </Text>
        <ChatWindow messages={messages} />
        <ChatInput
          onInterpretEnd={() => {
            setMessages((prevMessages) => [
              ...prevMessages,
              {
                message: '아니요, 아직까지는 그런 증상이 없어요.',
                avatar:
                  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
                isDoctor: false,
                timestamp: 'just now',
              },
            ]);

            setTimeout(() => {
              setMessages((prevMessages) => [
                ...prevMessages,
                {
                  message: '알겠습니다. 혹시 가족중에 같은 증상을 겪는 사람이 있나요?',
                  avatar:
                    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
                  isDoctor: true,
                  timestamp: 'just now',
                },
              ]);
            }, 2000);
          }}
        />
      </Paper>
    </Container>
  );
}
