import { Anchor, Group, Stack } from '@mantine/core';
import FootNav from '@/app/MobileLayout/FootNav';
import TealHeader from '@/app/MobileLayout/TealHeader';
import MoreIcon from '@/assets/more.svg';
import { useCallStore } from '@/stores/useCallStore';
import { useTranscriptStore, useUpcomingAppointmentStore } from '@/stores/useServiceStore';
import NoAppinment from './NoAppoinment';
import ReadyToCallDrawer from './ReadyToCallDrawer';

export default function HomeScreen() {
  const transcriptHistory = useTranscriptStore((state) => state.transcriptHistory);
  const upcomingAppointment = useUpcomingAppointmentStore((state) => state.upcomingAppointment);
  const callStep = useCallStore((state) => state.callStep);
  const setCallStep = useCallStore((state) => state.setCallStep);

  const OpenDrawer = () => {
    setCallStep(1);
    setTimeout(() => setCallStep(2), 1000);
  };

  return (
    <>
      <TealHeader />

      <div className="container !pt-[200px] !pb-[120px]">
        {upcomingAppointment || transcriptHistory.length > 0 ? (
          <>
            <div className="text-sub-title mb-3 mt-6">Upcoming Appointment</div>
            <Stack gap="md">
              {upcomingAppointment && (
                <div className="card primary" onClick={OpenDrawer}>
                  <Group justify="space-between" className="mb-1">
                    <div className="font-[600]">
                      2024.05.15
                      <span className="ml-2">11:00AM</span>
                    </div>
                    <img src={MoreIcon} alt="More Options" />
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
      <ReadyToCallDrawer callStep={callStep} onChangeCallStep={(step) => setCallStep(step)} />
    </>
  );
}
