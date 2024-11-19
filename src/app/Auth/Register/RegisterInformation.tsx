import { useNavigate } from 'react-router-dom';
import { Button, Stack, TextInput } from '@mantine/core';

export default function RegisterInformation() {
  const navigate = useNavigate();
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
          <TextInput size="md" label="Health Card Number" />
          <TextInput size="md" label="Date of Birth (MM-DD-YYYY)" placeholder="MM-DD-YYYY" />
        </Stack>

        <div className="bottom-action">
          <Button size="lg" onClick={() => navigate('/register-complete')}>
            Next
          </Button>
        </div>
      </div>
    </>
  );
}
