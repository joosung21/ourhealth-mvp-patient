import { useNavigate, useParams } from 'react-router-dom';
import { Button, Center, Group, Stack } from '@mantine/core';
import GoIcon from '@/assets/go.svg';
import StarOn from '@/assets/star-on.svg';
import FeatureTitle from '@/components/FeatureTitle/FeatureTile';
import { INTERPRETERS } from '@/mocks/interpreters';

export default function AboutInterpriter() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const interpreter = INTERPRETERS.find((item) => item.id === Number(id));

  if (!interpreter) {
    return null;
  }

  return (
    <div className="container has-title">
      <FeatureTitle title="About" />
      <Stack>
        <div className="rounded-[6px] border px-5 py-4">
          <Group>
            <img src={interpreter.img} alt={interpreter.name} className="w-11 h-11 rounded-full" />
            <div>
              <div className="font-[600] text-xl">{interpreter.name}</div>
              <div className="text-dimed-more">Available until 11:35AM</div>
            </div>
          </Group>
        </div>

        <div>
          <div className="section-title">About Me</div>
          <p className="text-[18px]">
            Certified healthcare interpreter fluent in Spanish and English, ensuring accurate
            communication between patients and providers.
          </p>
        </div>

        <div>
          <div className="section-title">Language</div>
          <Group gap="xs">
            <div className="chip-primary">Spanish</div>
            <div className="chip-primary">English</div>
          </Group>
        </div>

        <div>
          <div className="section-title">License</div>
          <div className="border rounded-[6px] px-5 py-4 cursor-pointer hover:bg-gray-100 transition">
            <Group justify="space-between">
              <div className="font-[500]">
                <div>Certified Medical Interpreter</div>
                <div className="text-dimed-more text-sm">Licensed on 2020 · CTTIC</div>
              </div>
              <img src={GoIcon} alt="Go Icon" />
            </Group>
          </div>
        </div>

        <div>
          <div className="section-title">Review</div>
          <p className="text-[18px]">
            “Exceptional interpreter! Fluency in Spanish and English and holding professional
            certification ensured clear, accurate communication, greatly enhancing my clinic
            experience.”
          </p>
          <Group align="center" gap="xs" className="mt-2">
            <div className="text-xs font-[500] text-dimed-more">May 20, 2024</div>
            <Group gap={2} className="-mt-[3px]">
              <img src={StarOn} />
              <img src={StarOn} />
              <img src={StarOn} />
              <img src={StarOn} />
              <img src={StarOn} />
            </Group>
          </Group>
        </div>
      </Stack>

      <div className="bottom-action bottom-action-fixed">
        <Button size="lg" onClick={() => navigate('/booking-confirmed')}>
          Book Appointment
        </Button>
      </div>
    </div>
  );
}
