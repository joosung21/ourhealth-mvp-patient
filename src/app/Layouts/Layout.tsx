import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  PasswordInput,
  Select,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import COUNTRY_CODES from '@/constants/countrycode.json';

type CountryCode = {
  name: string;
  dial_code: string;
  code: string;
};

// Select에서 사용할 데이터로 변환
const COUNTRY_ITEMS = (COUNTRY_CODES as CountryCode[]).map((item) => ({
  value: item.code, // value는 국가 코드
  label: `${item.name} (${item.dial_code})`, // 드롭다운에 표시될 텍스트
  dial_code: item.dial_code, // 다이얼 코드
}));

const INIT_VALUES = {
  dialCode: 'CA',
  mobileNumber: '',
};

export default function Login() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: INIT_VALUES,
  });

  return (
    <>
      <div className="h-12" />
      <form onSubmit={form.onSubmit((values) => alert(JSON.stringify(values, null, 2)))}>
        <Stack gap="xs">
          <div className="text-h1 text-center p-[10px]">Welcome to OurHealth</div>
          <Select
            placeholder="Select your country"
            data={COUNTRY_ITEMS}
            value={form.values.dialCode}
            onChange={(value) => form.setFieldValue('dialCode', value || '')}
          />
        </Stack>
      </form>

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
    </>
  );
}
