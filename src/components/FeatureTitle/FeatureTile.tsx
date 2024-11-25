import { useNavigate } from 'react-router-dom';
import { Group } from '@mantine/core';
import ArrowLeft from '@/assets/arrow-left.svg';

interface FeatureTitleProps {
  title: string;
}

export default function FeatureTitle({ title }: FeatureTitleProps) {
  const navigate = useNavigate();
  return (
    <div className="feature-title">
      <Group justify="space-between">
        <button type="button" className="p-1" onClick={() => navigate(-1)} aria-label="Go Back">
          <img src={ArrowLeft} alt="" className="inline-block" />
        </button>
        <div className="font-semibold text-xl">{title}</div>
        <div className="w-8" />
      </Group>
    </div>
  );
}
