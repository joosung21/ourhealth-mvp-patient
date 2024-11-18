import { useState } from 'react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Paper,
  PasswordInput,
  Popover,
  Progress,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
  return (
    <Text
      c={meets ? 'teal' : 'red'}
      style={{ display: 'flex', alignItems: 'center' }}
      mt={7}
      size="sm"
    >
      {meets ? <CheckIcon className="w-4" /> : <XMarkIcon className="w-4" />}
      <span style={{ marginLeft: 10 }}>{label}</span>
    </Text>
  );
}

const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];

function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

export default function Register() {
  const [visible, { toggle }] = useDisclosure(false);
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [value, setValue] = useState('');
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
  ));

  const strength = getStrength(value);
  const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';

  return (
    <Container size={440} mt={80}>
      <h1 className="text-[2rem] mb-4 text-center">Welcome to OurHealth</h1>
      <Paper radius="md" p="xl" withBorder>
        <Stack>
          <TextInput label="Email" placeholder="your@email.com" required />
          <TextInput label="Name" placeholder="John Doe" required />
          <TextInput label="Phone number" placeholder="123-456-7890" required />

          <Popover
            opened={popoverOpened}
            position="bottom"
            width="target"
            transitionProps={{ transition: 'pop' }}
          >
            <Popover.Target>
              <div
                onFocusCapture={() => setPopoverOpened(true)}
                onBlurCapture={() => setPopoverOpened(false)}
              >
                <PasswordInput
                  withAsterisk
                  label="Create password"
                  placeholder="Create password"
                  value={value}
                  onChange={(event) => setValue(event.currentTarget.value)}
                />
              </div>
            </Popover.Target>
            <Popover.Dropdown>
              <Progress color={color} value={strength} size={5} mb="xs" />
              <PasswordRequirement
                label="Includes at least 6 characters"
                meets={value.length > 5}
              />
              {checks}
            </Popover.Dropdown>
          </Popover>

          <PasswordInput withAsterisk label="Confirm password" placeholder="Confirm password" />

          <Checkbox label="I agree to the terms and conditions" required />
          <Button fullWidth type="submit" onClick={() => (window.location.href = '/todo')}>
            Register
          </Button>
          <Text ta="center">
            Already have an account?{' '}
            <Anchor<'a'> href="/login" fw={700}>
              Login
            </Anchor>
          </Text>
        </Stack>
      </Paper>
    </Container>
  );
}
