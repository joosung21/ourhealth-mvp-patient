import { useEffect, useRef, useState } from 'react';
import { MicrophoneIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { ActionIcon, Button, Center, Modal, Stack, Text, TextInput } from '@mantine/core';
import { SoundBarAnimation } from './SoundBarAnimation';

interface ChatInputProps {
  // 부모에게 통역 끝남을 전달
  onInterpretEnd: () => void;
}

export default function ChatInput({ onInterpretEnd }: ChatInputProps) {
  const [message, setMessage] = useState('');
  const [voiceModalOpen, setVoiceModalOpen] = useState(false);
  const [chattingMode, setChattingMode] = useState<'voice' | 'input'>('voice');
  const [elapsedTime, setElapsedTime] = useState(0); // 경과 시간을 저장하는 상태
  const [isInterpreting, setIsInterpreting] = useState(false); // 통역 중인지 여부를 저장하는 상태
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // 타이머 ID를 저장할 참조

  const handleSend = () => {
    // 메시지 전송 로직 구현
    setIsInterpreting(true);
    setTimeout(() => {
      setIsInterpreting(false);
      onInterpretEnd();
      setMessage('');
    }, 3000);
  };

  // 초를 "MM:SS" 형식으로 변환하는 함수
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${secs}`;
  };

  // 모달 열림 상태에 따라 타이머 시작 및 정지
  useEffect(() => {
    if (voiceModalOpen) {
      // 타이머 시작
      intervalRef.current = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      // 타이머 정지 및 경과 시간 초기화
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setElapsedTime(0);
    }

    // 컴포넌트 언마운트 시 타이머 정리
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [voiceModalOpen]);

  return (
    <>
      {chattingMode === 'input' && !isInterpreting && (
        <div className="flex items-center p-4">
          <ActionIcon onClick={() => setVoiceModalOpen(true)} size="lg" variant="light">
            <MicrophoneIcon className="w-6 h-6" />
          </ActionIcon>
          <TextInput
            placeholder="메시지를 입력하세요..."
            size="md"
            value={message}
            onChange={(e) => setMessage(e.currentTarget.value)}
            className="flex-1 mx-2"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSend();
              }
            }}
          />
          <ActionIcon onClick={handleSend} size="lg" variant="filled">
            <PaperAirplaneIcon className="w-5 transform" />
          </ActionIcon>
        </div>
      )}

      {chattingMode === 'voice' && !isInterpreting && (
        <Center>
          <ActionIcon
            onClick={() => setVoiceModalOpen(true)}
            variant="filled"
            radius={999}
            w={68}
            h={68}
          >
            <MicrophoneIcon className="w-8" />
          </ActionIcon>
        </Center>
      )}

      {isInterpreting && (
        <Stack gap={0} mb={16}>
          <div className="scale-50">
            <SoundBarAnimation />
          </div>
          <Text ta="center" fw={600} c="gray" mb={20} fs="sm">
            통역사가 통역 중 입니다.
          </Text>
        </Stack>
      )}

      <Modal
        opened={voiceModalOpen}
        onClose={() => setVoiceModalOpen(false)}
        withCloseButton={false}
        size="sm"
        centered
      >
        <Stack gap="xl" my="xl" align="center">
          <Text ta="center">말하기가 끝나면 전송하기 버튼을 눌러주세요.</Text>
          <SoundBarAnimation />
          <Text ta="center" fw={600} c="gray">
            {formatTime(elapsedTime)}
          </Text>

          <Button
            onClick={() => {
              setVoiceModalOpen(false);
              setIsInterpreting(true);
              setTimeout(() => {
                setIsInterpreting(false);
                onInterpretEnd();
              }, 3000);
            }}
            variant="filled"
            className="rounded-full"
          >
            전송하기
          </Button>
        </Stack>
      </Modal>

      {!isInterpreting && (
        <Button
          onClick={() => setChattingMode(chattingMode === 'input' ? 'voice' : 'input')}
          variant="white"
          className="mt-4"
        >
          {chattingMode === 'input' ? '음성 입력' : '텍스트 입력'}
        </Button>
      )}
    </>
  );
}
