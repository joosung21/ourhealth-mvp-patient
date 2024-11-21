import { useNavigate } from 'react-router-dom';
import { Anchor, Button, Group, Stack } from '@mantine/core';
import FootNav from '@/app/MobileLayout/FootNav';
import TealHeader from '@/app/MobileLayout/TealHeader';
import SearchingImage from '@/assets/illustration/searching.svg';
import MoreIcon from '@/assets/more.svg';
import { useTranscriptStore, useUpcomingAppointmentStore } from '@/stores/useServiceStore';

export default function HomeScreen() {
  const transcriptHistory = useTranscriptStore.getState().transcriptHistory;
  const upcomingAppointment = useUpcomingAppointmentStore.getState().upcomingAppointment;
  const navigate = useNavigate();

  return (
    <div className="container">
      <TealHeader />

      <div className="has-header has-foot px-4">
        {upcomingAppointment || transcriptHistory.length > 0 ? (
          <>
            <div className="text-sub-title mb-3">Upcoming Appointment</div>
            <Stack>
              {upcomingAppointment && (
                <div className="card primary">
                  <Group justify="space-between" className="mb-1">
                    <div className="font-[600]">
                      2024.05.15
                      <span className="ml-2">11:00AM</span>
                    </div>
                    <img src={MoreIcon} alt="Arrow Right" />
                  </Group>
                  <div>Interpreter: Floyd Miles</div>
                  <div className="text-dimed">Reference: #NYH2024030402CA</div>
                </div>
              )}
            </Stack>

            <div className="mt-8">
              <div className="text-sub-title mb-3">
                <Group justify="space-between">
                  Transcript History
                  <Anchor underline="always" size="sm">
                    Show All
                  </Anchor>
                </Group>
              </div>
            </div>
            <Stack>
              {transcriptHistory.map((item, index) => (
                <div className="card" key={index}>
                  <Group justify="space-between" className="mb-1">
                    <div className="font-[600]">
                      {item.date}
                      <span className="ml-2">{item.time}</span>
                    </div>
                    <img src={MoreIcon} alt="Arrow Right" />
                  </Group>
                  <div>Interpreter: {item.interpreter}</div>
                  <div className="text-dimed">Reference: {item.reference}</div>
                </div>
              ))}
            </Stack>
          </>
        ) : (
          <>
            <Stack align="center" justify="center" className="h-[calc(100vh-400px)]">
              <img src={SearchingImage} width="70%" alt="No Appointment" />
              <div>No upcoming appointment</div>
              <Button
                size="lg"
                color="secondary"
                radius="xl"
                mt="lg"
                className="shrink-0"
                onClick={() => navigate('/book-time')}
              >
                Book Appointment
              </Button>
            </Stack>
          </>
        )}
      </div>

      <FootNav />
    </div>
  );
}
