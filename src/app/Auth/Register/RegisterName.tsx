import { useNavigate } from 'react-router-dom';
import { Button, Stack, TextInput } from '@mantine/core';

export default function RegisterName() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <Stack gap="md">
          <div className="mb-1">
            <div className="text-h1">What’s your name?</div>
            <p>Let us know how to properly address you</p>
          </div>
          <TextInput size="md" label="First Name" />
          <TextInput size="md" label="Last Name" />
        </Stack>

        <div className="bottom-action">
          <Button size="lg" onClick={() => navigate('/register-information')}>
            Next
          </Button>
        </div>
      </div>
    </>
  );
}
