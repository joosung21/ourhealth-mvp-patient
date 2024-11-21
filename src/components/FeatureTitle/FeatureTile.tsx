import { useNavigate } from 'react-router-dom';
import { Group } from '@mantine/core';
import ArrowLeft from '@/assets/arrow-left.svg';

interface FeatureTitleProps {
  title: string;
}

export default function FeatureTitle({ title }: FeatureTitleProps) {
  const navigate = useNavigate();
  return (
    <Group justify="space-between" className="mb-3 -mx-2">
      <img
        src={ArrowLeft}
        alt="Go Back"
        className="cursor-pointer inline-block p-1"
        onClick={() => navigate(-1)}
      />
      <div className="font-semibold text-xl">{title}</div>
      <div className="w-8"></div>
    </Group>
  );
}
