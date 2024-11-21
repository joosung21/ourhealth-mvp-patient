import { useNavigate } from 'react-router-dom';
import { Button } from '@mantine/core';
import OnboardImage from '@/assets/illustration/Globe.svg';

export default function RegisterInformation() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container flex">
        <div className="flex flex-col items-center justify-center pb-[200px]">
          <img src={OnboardImage} alt="Onboarding Complete" className="w-[80%] max-h-[260px]" />
          <div className="mt-1 text-center">
            <div className="text-h1">Welcome Onboard!</div>
            <p>We’re here to provide you with the best care and support.</p>
          </div>
        </div>

        <div className="bottom-action">
          <Button size="lg" onClick={() => navigate('/dashboard')}>
            Start
          </Button>
        </div>
      </div>
    </>
  );
}
