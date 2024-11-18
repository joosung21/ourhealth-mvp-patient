import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import {
  Anchor,
  Box,
  Button,
  Center,
  Container,
  Group,
  Paper,
  Text,
  TextInput,
  Title,
} from '@mantine/core';

export default function ForgotPassword() {
  return (
    <Container size={460} my={30}>
      <Title className="font-bold text-[26px]" ta="center">
        Forgot your password?
      </Title>
      <Text c="dimmed" fz="sm" ta="center">
        Enter your email to get a reset link
      </Text>

      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <TextInput label="Your email" placeholder="me@mantine.dev" required />
        <Group justify="space-between" mt="lg" className="max-sm:flex-col-reverse">
          <Anchor c="dimmed" size="sm" href="/login">
            <Center inline>
              <ArrowLeftIcon className="w-4" />
              <Box ml={5}>Back to the login page</Box>
            </Center>
          </Anchor>
          <Button className="max-sm:w-full">Reset password</Button>
        </Group>
      </Paper>
    </Container>
  );
}
