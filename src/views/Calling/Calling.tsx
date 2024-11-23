import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { Group, Stack } from '@mantine/core';
import CallEndButton from '@/assets/call-end.svg';
import MicButton from '@/assets/mic.svg';
import SpeakerButton from '@/assets/speaker.svg';
import { useCallStore } from '@/stores/useCallStore';

type ConversationMessage = {
  role: 'doctor' | 'patient' | 'interpreter';
  text: string;
};

// Mock conversation data
const MOCK_CONVERSATION: ConversationMessage[] = [
  { role: 'doctor', text: '¿Ha experimentado estos síntomas antes?' },
  { role: 'patient', text: 'No, es la primera vez.' },
  { role: 'interpreter', text: 'No, this is the first time.' },

  // First additional set
  { role: 'doctor', text: '¿Desde cuándo ha estado sintiendo estos síntomas?' },
  { role: 'patient', text: 'He comenzado a sentirlos hace tres días.' },
  { role: 'interpreter', text: 'I have started feeling them three days ago.' },

  // Second additional set
  { role: 'doctor', text: '¿Ha tomado algún medicamento para aliviar los síntomas?' },
  { role: 'patient', text: 'Sí, he tomado paracetamol.' },
  { role: 'interpreter', text: 'Yes, I have taken paracetamol.' },

  // Third additional set
  { role: 'doctor', text: '¿Tiene alguna alergia conocida?' },
  { role: 'patient', text: 'No, no tengo ninguna alergia.' },
  { role: 'interpreter', text: 'No, I have no allergies.' },

  // Fourth additional set
  { role: 'doctor', text: 'Vamos a realizar algunos exámenes para determinar la causa.' },
  { role: 'patient', text: 'De acuerdo, gracias.' },
  { role: 'interpreter', text: 'Alright, thank you.' },
];

export default function Calling() {
  const navigate = useNavigate();
  const callStep = useCallStore((state) => state.callStep);
  const setCallStep = useCallStore((state) => state.setCallStep);

  // State to keep track of elapsed time in seconds
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  // State to manage displayed messages
  const [displayedMessages, setDisplayedMessages] = useState<ConversationMessage[]>([]);

  // State to track the current message index
  const [currentMessageIndex, setCurrentMessageIndex] = useState<number>(0);

  // Flag to indicate if typing is in progress
  const [isTyping, setIsTyping] = useState<boolean>(false);

  // State for dialing
  const [isDialing, setIsDialing] = useState<boolean>(true);

  // Ref for auto-scrolling
  const conversationEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Start the elapsed time timer when the component mounts
    const timer = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);

    // Start dialing and set a timeout to end dialing after 5 seconds
    const dialingTimer = setTimeout(() => {
      setIsDialing(false);
    }, 4000); // 5000 milliseconds = 5 seconds

    // Clean up timers when the component unmounts
    return () => {
      clearInterval(timer);
      clearTimeout(dialingTimer);
    };
  }, []);

  // Function to format elapsed time as MM:SS
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${secs}`;
  };

  // Function to handle typing completion
  const handleTypingComplete = () => {
    // Append the current message to displayedMessages
    setDisplayedMessages((prevMessages) => [
      ...prevMessages,
      MOCK_CONVERSATION[currentMessageIndex],
    ]);

    // Move to the next message immediately after typing completes
    setCurrentMessageIndex((prevIndex) => prevIndex + 1);
    setIsTyping(false);
  };

  useEffect(() => {
    // If dialing is ongoing, do not start typing
    if (isDialing) return;

    // If all messages have been displayed, do nothing
    if (currentMessageIndex >= MOCK_CONVERSATION.length) return;

    // If already typing, do nothing
    if (isTyping) return;

    // Start typing the next message
    setIsTyping(true);
  }, [currentMessageIndex, isTyping, isDialing]);

  // Auto-scroll to the latest message whenever displayedMessages updates
  useEffect(() => {
    conversationEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [displayedMessages]);

  return (
    <div className="container relative !p-0">
      {/* Background Image */}
      <div className="overflow-hidden">
        <div
          className="h-[100dvh] bg-cover bg-center"
          style={{
            background: 'url(/images/mock/person1.png) no-repeat center center',
            backgroundSize: 'contain',
            backgroundPosition: 'center top 15vh',
            scale: '1.2',
          }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute h-[100dvh] inset-0 bg-[#323232]/60 backdrop-blur-[40px] flex flex-col text-white">
        {/* Header with Timer */}
        <div className="h-[24dvh] p-6 flex items-end">
          <div>
            {/* Display the formatted elapsed time */}
            <div className="text-[20px] font-[600] opacity-60">{formatTime(elapsedTime)}</div>
            <div className="text-[32px] font-[600]">
              {isDialing ? 'Calling ...' : 'Interpreter service'}
            </div>
          </div>
        </div>

        {/* Conversation Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 text-[24px] font-[500] leading-[1.5]">
            <Stack gap="lg">
              {/* Render displayed messages */}
              {displayedMessages.map((message, index) => (
                <div key={index}>
                  {message.role === 'doctor' && (
                    <div style={{ color: '#faff00' }}>{message.text}</div>
                  )}
                  {message.role === 'patient' && <div>Patient: {message.text}</div>}
                  {message.role === 'interpreter' && <div>Interpreter: {message.text}</div>}
                </div>
              ))}

              {/* Render the current typing message */}
              {isTyping && currentMessageIndex < MOCK_CONVERSATION.length && (
                <div>
                  {(() => {
                    const currentMessage = MOCK_CONVERSATION[currentMessageIndex];
                    let rolePrefix = '';
                    let color = '';

                    if (currentMessage.role === 'doctor') {
                      rolePrefix = '';
                      color = '#faff00';
                    } else if (currentMessage.role === 'patient') {
                      rolePrefix = 'Patient: ';
                    } else if (currentMessage.role === 'interpreter') {
                      rolePrefix = 'Interpreter: ';
                    }

                    return (
                      <>
                        <div style={{ color: color || 'white' }}>
                          {rolePrefix}
                          <TypeAnimation
                            sequence={[
                              currentMessage.text,
                              1500, // Wait for 500 milliseconds after typing
                              () => handleTypingComplete(),
                            ]}
                            wrapper="span"
                            speed={75}
                            cursor={false}
                            repeat={0}
                          />
                        </div>
                      </>
                    );
                  })()}
                </div>
              )}

              {/* Dummy div for auto-scroll */}
              <div ref={conversationEndRef} className="mt-[60px]" />
            </Stack>
          </div>
        </div>

        {/* Controls */}
        <div className="h-[160px] flex items-center justify-center">
          <Group gap="xl">
            <div className="cursor-pointer">
              <img src={SpeakerButton} alt="Speaker" />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                setCallStep(4);
                navigate('/dashboard');
              }}
            >
              <img src={CallEndButton} alt="Call End" />
            </div>
            <div className="cursor-pointer">
              <img src={MicButton} alt="Mic" />
            </div>
          </Group>
        </div>
      </div>
    </div>
  );
}
