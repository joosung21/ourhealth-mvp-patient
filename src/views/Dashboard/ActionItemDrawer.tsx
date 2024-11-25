import { useEffect } from 'react';
import { Button, Drawer, Group, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useCallStore } from '@/stores/useCallStore';

const MOCK_ACTIONS = [
  'Book appointment for X-ray',
  'Receive medication from pharmacy',
  'Next appointment is on May 30th, 2025 with Dr. Kevin Russell at ABC hospital',
  'Red medication is for night. Take 1 pill before sleep with water.',
];

export default function ActionItemDrawer() {
  const [opened, { open, close }] = useDisclosure(false);
  const callStep = useCallStore((state) => state.callStep);
  const setCallStep = useCallStore((state) => state.setCallStep);

  useEffect(() => {
    if (callStep === 5) {
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
          setCallStep(6);
          close();
        }}
        size={340}
        withCloseButton={false}
      >
        {/* 모바일 스와이프 핸들바 */}
        {/* <div className="bg-[#E5E5E5] w-[140px] h-[5.2px] rounded-full mx-auto mt-1 mb-4" /> */}
        <div className="h-4" />

        <div className="flex flex-col items-center gap-4">
          <div className="text-xl font-semibold mb-1">Action Items</div>
          <div className="w-full">
            <Stack gap="lg">
              {MOCK_ACTIONS.map((action, index) => (
                <Group key={index} gap="sm" className="" wrap="nowrap">
                  <div className="w-4 h-4 border rounded shrink-0" />
                  <div className="text-[#333] leading-[1.1]">{action}</div>
                </Group>
              ))}
            </Stack>
          </div>
        </div>

        <Button
          size="md"
          variant="white"
          color="black"
          classNames={{
            root: 'mt-6',
          }}
          fullWidth
          onClick={() => setCallStep(6)}
        >
          Close for now
        </Button>
      </Drawer>
    </>
  );
}
