import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Stack } from '@mantine/core';
import LanguagePicker from '@/components/LanguagePicker/LanguagePicker';
import { useLanguageStore } from '@/stores/useLanguageStore';

export default function RegisterLanguage() {
  const navigate = useNavigate();
  const { changeLanguage } = useLanguageStore();

  // 페이지에 들어오면 'en'으로 초기화
  useEffect(() => {
    changeLanguage('en');
  }, []);

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
        <div className="bottom-action">
          <Button size="lg" onClick={() => navigate('/register-name')}>
            Next
          </Button>
        </div>
      </div>
    </>
  );
}
