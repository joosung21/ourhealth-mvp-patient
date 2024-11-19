import { useNavigate } from 'react-router-dom';
import { Button, Stack } from '@mantine/core';
import LanguagePicker from '@/components/LanguagePicker/LanguagePicker';

export default function RegisterLanguage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <Stack gap="md">
          <div className="mb-1">
            <div className="text-h1">What’s your preferred language?</div>
            <p>Select the language you’d like to use throughout OurHealth</p>
          </div>
          <div>
            <div className="label">Language</div>
            <LanguagePicker />
          </div>
        </Stack>
      </div>
      <div className="bottom-action">
        <Button size="lg" onClick={() => navigate('/register-name')}>
          Next
        </Button>
      </div>
    </>
  );
}
