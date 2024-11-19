import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  Image,
  Paper,
  PasswordInput,
  Text,
  TextInput,
} from '@mantine/core';
import logo from '@/assets/logo.svg';
import { GoogleButton } from './GoogleButton';
import classes from './Login.module.css';

export default function Login() {
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Image src={logo} alt="OurHealth logo" w={240} mt="lg" mb="xl" />

        <GoogleButton radius="xl">Sign-in with Google</GoogleButton>
        <Divider label="Or continue with email" labelPosition="center" my="lg" />

        <TextInput label="Email address" placeholder="hello@gmail.com" size="md" />
        <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" />
        <Anchor href="/forgot-password" pt={2} fw={500} fz="xs">
          Forgot your password?
        </Anchor>
        <Checkbox label="Keep me logged in" mt="md" size="md" />

        <Button fullWidth mt="xl" size="md" onClick={() => (window.location.href = '/todo')}>
          Login
        </Button>

        <Text ta="center" mt="md">
          Don&apos;t have an account?{' '}
          <Anchor<'a'> href="/register" fw={700}>
            Register
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}
