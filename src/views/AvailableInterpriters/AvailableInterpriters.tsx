import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { Button, Center, Group, Stack, Text } from '@mantine/core';
import ClockIcon from '@/assets/clock.svg';
import FeatureTitle from '@/components/FeatureTitle/FeatureTile';
import { INTERPRETERS } from '@/mocks/interpreters';

export default function AvailableInterpriters() {
  const navigate = useNavigate();
  const date = dayjs('2024-05-15 11:00').format('YYYY.MM.DD hh:mmA');

  return (
    <div className="container has-title scroll-overlay">
      <FeatureTitle title="Available Interpreters" />
      <Center className="mb-5">
        <div className="bg-primary rounded-full py-[6px] px-3 font-[500]">
          <Group gap="sm">
            <img src={ClockIcon} className="-ml-[2px]" />
            {date}
          </Group>
        </div>
      </Center>
      <Stack>
        {INTERPRETERS.map((interpreter, index) => (
          <div key={index} className="rounded-[6px] border px-5 py-4 cursor-pointer">
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
