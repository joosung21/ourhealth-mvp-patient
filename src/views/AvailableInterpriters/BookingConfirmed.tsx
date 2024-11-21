import { useNavigate, useParams } from 'react-router-dom';
import { Button, Center, Group, Stack } from '@mantine/core';
import Booked from '@/assets/booked.svg';

export default function BookingConfirmed() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <Stack justify="center" align="center" gap={4} className="h-[calc(100dvh-160px)]">
        <img src={Booked} width="217" alt="Booked" />
        <div className="text-xl font-[600]">Booking Confirmed!</div>
        <div className="font-[500]">Call scheduled.</div>
        <div className="font-[500] text-dimed-more">Reference: #NYH202411230CA</div>
      </Stack>
      <div className="bottom-action bottom-action-fixed">
        <Button size="lg" onClick={() => navigate('/dashboard')}>
          Back to home
        </Button>
      </div>
    </div>
  );
}
