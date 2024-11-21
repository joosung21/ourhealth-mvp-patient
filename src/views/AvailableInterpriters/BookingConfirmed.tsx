import { useNavigate } from 'react-router-dom';
import { a } from 'vitest/dist/chunks/suite.B2jumIFP';
import { Button, Stack } from '@mantine/core';
import Booked from '@/assets/booked.svg';
import { TRANSCRIPT_HISTORY, UPCOMING_APPOINTMENT } from '@/mocks/appoinmets';
import { useTranscriptStore, useUpcomingAppointmentStore } from '@/stores/useServiceStore';

export default function BookingConfirmed() {
  const navigate = useNavigate();
  const addTranscriptHistory = useTranscriptStore((state) => state.setTranscriptHistory);
  const addUpcomingAppointment = useUpcomingAppointmentStore(
    (state) => state.setUpcomingAppointment
  );

  const goToHome = () => {
    addTranscriptHistory(TRANSCRIPT_HISTORY);
    addUpcomingAppointment(UPCOMING_APPOINTMENT);
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <Stack justify="center" align="center" gap={4} className="h-[calc(100dvh-160px)]">
        <img src={Booked} width="217" alt="Booked" />
        <div className="text-xl font-[600]">Booking Confirmed!</div>
        <div className="font-[500]">Call scheduled.</div>
        <div className="font-[500] text-dimed-more">Reference: #NYH202411230CA</div>
      </Stack>
      <div className="bottom-action bottom-action-fixed">
        <Button size="lg" onClick={goToHome}>
          Back to home
        </Button>
      </div>
    </div>
  );
}