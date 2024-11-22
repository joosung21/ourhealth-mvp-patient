import { useEffect } from 'react';
import { Button, Drawer, Group, Rating, Stack, Textarea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import StarOn from '@/assets/star-on.svg';
import StarOff from '@/assets/star.svg';
import { INTERPRETERS } from '@/mocks/interpreters';
import { useCallStore } from '@/stores/useCallStore';

export default function CallEndedDrawer() {
  const [opened, { open, close }] = useDisclosure(false);
  const callStep = useCallStore((state) => state.callStep);
  const setCallStep = useCallStore((state) => state.setCallStep);
  const interpreter = INTERPRETERS[0];

  useEffect(() => {
    if (callStep === 4) {
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
          setCallStep(5);
          close();
        }}
        size={660}
        withCloseButton={false}
      >
        {/* 모바일 스와이프 핸들바 */}
        {/* <div className="bg-[#E5E5E5] w-[140px] h-[5.2px] rounded-full mx-auto mt-1 mb-4" /> */}
        <div className="h-4"></div>

        <div className="flex flex-col items-center gap-4">
          <div className="text-xl font-semibold mb-1">Call Ended</div>
          <img src={interpreter.img} className="w-[144px] rounded-full" />
          <div className="text-sm text-[#686868]">{interpreter.name} · Phone Service</div>
          <Group gap={2} className="-mt-[3px] h-10">
            <Rating
              size={32}
              emptySymbol={<img src={StarOff} width={32} />}
              fullSymbol={<img src={StarOn} width={32} />}
            />
          </Group>

          <div className="w-full">
            <div className="label">How was the service?</div>
            <Textarea
              placeholder="How was the service?"
              radius="md"
              size="md"
              data-autofocus
              classNames={{
                input: 'h-[200px]',
              }}
            />
          </div>
        </div>

        <Button
          size="lg"
          classNames={{
            root: 'mt-6',
          }}
          fullWidth
          onClick={() => setCallStep(5)}
        >
          Rate
        </Button>
      </Drawer>
    </>
  );
}
