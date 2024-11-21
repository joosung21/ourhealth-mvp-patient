import { useNavigate } from 'react-router-dom';
import { Flex } from '@mantine/core';
import Clock from '@/assets/clock-black.svg';
import SearchingImage from '@/assets/searching.svg';

export default function NoAppinment() {
  const navigate = useNavigate();

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      style={{ minHeight: '60vh' }}
      gap="md"
      wrap="nowrap"
    >
      <img
        src={SearchingImage}
        style={{ width: '65%', maxWidth: '300px', height: 'auto' }}
        alt="No Appointment"
      />
      <div>No upcoming appointment</div>
      <div className="button-secondary" onClick={() => navigate('/book-time')}>
        <img src={Clock} alt="Clock" className="inline-block mr-2" />
        Book Appointment
      </div>
    </Flex>
  );
}
