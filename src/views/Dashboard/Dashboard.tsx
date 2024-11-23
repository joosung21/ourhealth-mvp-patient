import { useEffect } from 'react';
import { c } from 'vite/dist/node/types.d-aGj9QkWt';
import { J } from 'vitest/dist/chunks/reporters.D7Jzd9GS';
import { Anchor, Group, Stack } from '@mantine/core';
import FootNav from '@/app/MobileLayout/FootNav';
import TealHeader from '@/app/MobileLayout/TealHeader';
import MoreIcon from '@/assets/more.svg';
import { useCallStore } from '@/stores/useCallStore';
import { useTranscriptStore, useUpcomingAppointmentStore } from '@/stores/useServiceStore';
import ActionItemDrawer from './ActionItemDrawer';
import CallEndedDrawer from './CallEndedDrawer';
import NoAppinment from './NoAppoinment';
import ReadyToCallDrawer from './ReadyToCallDrawer';

export default function HomeScreen() {
  const transcriptHistory = useTranscriptStore((state) => state.transcriptHistory);
  const upcomingAppointment = useUpcomingAppointmentStore((state) => state.upcomingAppointment);
  const clearUpcomingAppointment = useUpcomingAppointmentStore(
    (state) => state.clearUpcomingAppointment
  );
  const callStep = useCallStore((state) => state.callStep);
  const setCallStep = useCallStore((state) => state.setCallStep);

  window.scrollTo(0, 0);

  useEffect(() => {
    if (callStep === 6) {
      clearUpcomingAppointment();
      setCallStep(0);
    }
  }, [callStep]);

  const OpenDrawer = () => {
    setCallStep(1);
    setTimeout(() => setCallStep(2), 2000);
  };

  return (
    <>
      <TealHeader />

      <div className="container !pt-[200px] !pb-[120px]">
        {upcomingAppointment.length > 0 || transcriptHistory.length > 0 ? (
          <>
            <div className="text-sub-title mb-3 mt-6">Upcoming Appointment</div>
            <Stack gap="md">
              {upcomingAppointment.map((item, index) => (
                <div className="card primary" key={index} onClick={OpenDrawer}>
                  <Group justify="space-between" className="mb-1">
                    <div className="font-[600]">
                      {item.date}
                      <span className="ml-2">{item.time}</span>
                    </div>
                    <img src={MoreIcon} alt="More Options" />
                  </Group>
                  <div>Interpreter: {item.interpreter}</div>
                  <div className="text-dimed">Reference: {item.reference}</div>
                </div>
              ))}
              {upcomingAppointment.length === 0 && (
                <div className="text-dimed text-sm">No upcoming appointment</div>
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
            <Stack gap="md">
              {transcriptHistory.map((item, index) => (
                <div className="card" key={index}>
                  <Group justify="space-between" className="mb-1">
                    <div className="font-[600]">
                      {item.date}
                      <span className="ml-2">{item.time}</span>
                    </div>
                    <img src={MoreIcon} alt="More Options" />
                  </Group>
                  <div>Interpreter: {item.interpreter}</div>
                  <div className="text-dimed">Reference: {item.reference}</div>
                </div>
              ))}
            </Stack>
          </>
        ) : (
          <NoAppinment />
        )}
      </div>
      <FootNav />
      {[1, 2].includes(callStep) && <ReadyToCallDrawer />}
      {callStep === 4 && <CallEndedDrawer />}
      {callStep === 5 && <ActionItemDrawer />}
    </>
  );
}
