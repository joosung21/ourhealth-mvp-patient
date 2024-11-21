import { useNavigate } from 'react-router-dom';
import { Button, Stack, TextInput } from '@mantine/core';

export default function RegisterInformation() {
  const navigate = useNavigate();

  const birthFormatting = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length === 2) {
      e.target.value = value + '-';
    }
    if (value.length === 5) {
      e.target.value = value + '-';
    }
  };

  return (
    <>
      <div className="container">
        <Stack gap="md">
          <div className="mb-1">
            <div className="text-h1">Your Information</div>
            <p>
              We understand this is private information. We’ll only share it with your healthcare
              providers.
            </p>
          </div>
          <TextInput
            size="md"
            label="Health Card Number"
            placeholder="10 digits"
            inputMode="numeric"
            pattern="[0-9]*"
          />
          <TextInput
            size="md"
            label="Date of Birth (MM-DD-YYYY)"
            placeholder="MM-DD-YYYY"
            inputMode="numeric"
            pattern="[0-9]*"
            onChange={birthFormatting}
          />
        </Stack>

        <div className="bottom-action">
          <Button size="lg" fullWidth onClick={() => navigate('/register-complete')}>
            Next
          </Button>
        </div>
      </div>
    </>
  );
}
