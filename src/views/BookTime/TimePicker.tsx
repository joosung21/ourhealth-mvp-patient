import { Button, Group, Stack } from '@mantine/core';
import ArrowDown from '@/assets/arrow-down.svg';
import ArrowUp from '@/assets/arrow-up.svg';
import TimeSplit from '@/assets/time-split.svg';
import { Time } from './BookTimeType';

interface TimePickerProps {
  time: Time;
  onChange: (time: Time) => void;
}

export default function TimePicker({ time, onChange }: TimePickerProps) {
  return (
    <div className="flex justify-center">
      <Group gap="sm">
        <Stack align="center" gap="sm">
          <Button
            variant="transparent"
            onClick={() => onChange({ ...time, hour: time.hour === 12 ? 1 : time.hour + 1 })}
          >
            <img src={ArrowUp} alt="Up" />
          </Button>
          <div>{time.hour}</div>
          <Button
            variant="transparent"
            onClick={() => onChange({ ...time, hour: time.hour === 1 ? 12 : time.hour - 1 })}
          >
            <img src={ArrowDown} alt="Down" />
          </Button>
        </Stack>

        <img src={TimeSplit} alt="Colon" />

        <Stack align="center" gap="sm">
          <Button
            variant="transparent"
            onClick={() => onChange({ ...time, minute: time.minute === 50 ? 0 : time.minute + 10 })}
          >
            <img src={ArrowUp} alt="Up" />
          </Button>
          <div>{time.minute.toString().padStart(2, '0')}</div>
          <Button
            variant="transparent"
            onClick={() => onChange({ ...time, minute: time.minute === 0 ? 50 : time.minute - 10 })}
          >
            <img src={ArrowDown} alt="Down" />
          </Button>
        </Stack>

        <Stack gap="sm">
          <Button
            size="md"
            className="w-[56px] px-0 rounded"
            variant={time.ampm === 'AM' ? '' : 'default'}
            onClick={() => onChange({ ...time, ampm: 'AM' })}
          >
            AM
          </Button>
          <Button
            size="md"
            className="w-[56px] px-0 rounded"
            variant={time.ampm === 'PM' ? '' : 'default'}
            onClick={() => onChange({ ...time, ampm: 'PM' })}
          >
            PM
          </Button>
        </Stack>
      </Group>
    </div>
  );
}
