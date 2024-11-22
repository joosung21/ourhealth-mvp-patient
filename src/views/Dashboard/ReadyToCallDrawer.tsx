import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Drawer, Group, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import CallIcon from '@/assets/call.svg';
import MockQR from '@/assets/mock-qr.png';
import { useCallStore } from '@/stores/useCallStore';

export default function ReadyToCallDrawer() {
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);
  const callStep = useCallStore((state) => state.callStep);
  const setCallStep = useCallStore((state) => state.setCallStep);

  useEffect(() => {
    if (callStep === 1) {
      open();
    }
  }, [callStep]);

  return (
    <>
      <Drawer
        opened={opened}
        position="bottom"
        classNames={{
          inner: 'md:max-w-[400px] left-[50%] transform translate-x-[-50%]',
          overlay: 'md:max-w-[400px] md:mx-auto',
          content: 'rounded-t-3xl',
        }}
        onClose={() => {
          setCallStep(0);
          close();
        }}
        size={callStep === 1 ? 460 : 300}
        withCloseButton={false}
      >
        {/* 모바일 스와이프 핸들바 */}
        {/* <div className="bg-[#E5E5E5] w-[140px] h-[5.2px] rounded-full mx-auto mt-1 mb-4" /> */}
        <div className="h-4"></div>

        <div className="flex flex-col items-center">
          {callStep === 1 && (
            <>
              <div className="text-xl font-semibold mb-1">Scan the code</div>
              <div className="text-sm text-[#686868]">Validate your appointment with hospital</div>
              <img src={MockQR} alt="QR Code" width={203} className="mt-4" />
            </>
          )}
          {callStep === 2 && (
            <>
              <div className="text-xl font-semibold mb-1">Ready to call</div>
            </>
          )}
        </div>

        <div className="card primary mt-4 !cursor-default">
          <Group justify="space-between" className="mb-1">
            <div className="font-[600]">
              2024.05.15
              <span className="ml-2">11:00AM</span>
            </div>
          </Group>
          <div>Interpreter: Eleanor Pena</div>
          <div className="text-dimed">Reference: #NYH2024030402CA</div>
        </div>

        {callStep === 2 && (
          <Button
            size="xl"
            classNames={{
              root: 'mt-6',
              label: 'font-semibold text-[16px]',
            }}
            fullWidth
            leftSection={<img src={CallIcon} alt="Call" />}
            onClick={() => navigate('/calling')}
          >
            Start the Call
          </Button>
        )}
      </Drawer>
    </>
  );
}
