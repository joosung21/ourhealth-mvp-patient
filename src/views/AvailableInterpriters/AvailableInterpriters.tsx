import dayjs from 'dayjs';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Center, Flex, Group, Stack, Text } from '@mantine/core';
import ClockIcon from '@/assets/clock.svg';
import FeatureTitle from '@/components/FeatureTitle/FeatureTile';
import { INTERPRETERS } from '@/mocks/interpreters';

export default function AvailableInterpriters() {
  const navigate = useNavigate();
  const date = dayjs().hour(13).minute(0).format('YYYY.MM.DD hh:mmA');
  const [showScrollOverlay, setShowScrollOverlay] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      // 스크롤이 거의 하단에 도달했는지 확인 (약간의 여유를 둡니다)
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        setShowScrollOverlay(false);
      } else {
        setShowScrollOverlay(true);
      }
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`container has-title ${showScrollOverlay ? 'scroll-overlay' : ''}`}
      ref={containerRef}
      style={{ position: 'relative', overflowY: 'auto', maxHeight: '100vh' }}
    >
      <FeatureTitle title="Available Interpreters" />
      <Center className="mb-5">
        <div
          className="bg-primary rounded-full py-[6px] px-3 font-[500]"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Group gap="xs">
            <img src={ClockIcon} className="-ml-[2px]" alt="Clock Icon" />
            {date}
          </Group>
        </div>
      </Center>
      <Stack>
        {INTERPRETERS.map((interpreter, index) => (
          <div
            key={index}
            className="rounded-[6px] border px-5 py-4 cursor-pointer hover:bg-gray-100 transition"
          >
            <Group>
              <img
                src={interpreter.img}
                alt={interpreter.name}
                className="w-11 h-11 rounded-full"
              />
              <div>
                <div className="font-[700]">{interpreter.name}</div>
                <div className="text-dimed-more">Available until 11:35AM</div>
              </div>
            </Group>
          </div>
        ))}
      </Stack>
    </div>
  );
}
