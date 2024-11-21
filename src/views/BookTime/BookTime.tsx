import dayjs from 'dayjs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Text } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import ArrowRight from '@/assets/arrow-right-teal.svg';
import FeatureTitle from '@/components/FeatureTitle/FeatureTile';
import { Time } from './BookTimeType';
import TimePicker from './TimePicker';

export default function BookTimePage() {
  const [date, setDate] = useState<Date | null>(dayjs().add(1, 'day').toDate());
  const [time, setTime] = useState<Time>({ hour: 11, minute: 0, ampm: 'AM' });
  const navigate = useNavigate();

  return (
    <div className="container has-foot">
      <div className="v-split">
        <div className="v-split-top">
          <FeatureTitle title="Book a time" />
          <Text ta="center" c="black" fw={500}>
            When do you need the call service?
          </Text>
        </div>
        <div className="v-split-main">
          <div className="bg-[#E6EEED] rounded flex py-6 justify-center mt-4">
            <DatePicker
              value={date}
              size="md"
              minDate={dayjs().toDate()}
              maxDate={dayjs().add(2, 'month').toDate()}
              nextIcon={<img src={ArrowRight} className="scale-103" alt="Next" />}
              previousIcon={
                <img src={ArrowRight} className="scale-103 rotate-180" alt="Previous" />
              }
              onChange={setDate}
              className="teal-calendar mb-1"
            />
          </div>
          <div className="border rounded p-6 mt-6">
            <TimePicker time={time} onChange={setTime} />
          </div>

          <div className="text-center mt-8">
            <span className="text-dimed-more mr-2">Booking for:</span>
            <span className="font-[500]">{dayjs(date).format('YYYY.MM.DD')}</span>
            <span className="ml-2 font-[500]">
              {time.hour.toString().padStart(2, '0')}:{time.minute.toString().padStart(2, '0')}
              {time.ampm}
            </span>
          </div>
          <div className="text-dimed-more text-center mt-2">16 Interpreters Available</div>

          <div className="bottom-action">
            <Button size="lg" onClick={() => navigate('/available-interpriters')}>
              Confirm & Select Interpreter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
