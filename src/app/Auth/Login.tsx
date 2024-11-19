import { CheckIcon } from '@heroicons/react/24/outline';
import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  Group,
  PasswordInput,
  Select,
  SelectProps,
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

const COUNTRY_ITEMS = (COUNTRY_CODES as CountryCode[]).map((item) => ({
  value: item.code,
  label: item.code,
}));

const INIT_VALUES = {
  dialCode: 'CA',
  mobileNumber: '',
};

const renderSelectOption: SelectProps['renderOption'] = ({ option, checked }) => {
  const item = COUNTRY_CODES.find((item) => item.code === option.value);
  if (!item) return option.value;

  return (
    <Group flex="1" gap="xs">
      {item.name} ({item.dial_code}){checked && <CheckIcon className="w-4 ml-auto" />}
    </Group>
  );
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
          <div className="flex gap-2">
            <Select
              size="md"
              value={form.values.dialCode}
              placeholder="Select your country"
              classNames={{ input: 'w-[87px]', dropdown: '!w-[240px]' }}
              data={COUNTRY_ITEMS}
              renderOption={renderSelectOption}
              comboboxProps={{ width: 'max-content' }}
            />
            <TextInput
              size="md"
              className="grow"
              placeholder="Mobile number"
              leftSection={`${COUNTRY_CODES.find((item) => item.code === form.values.dialCode)?.dial_code}`}
              {...form.getInputProps('mobileNumber')}
            />
          </div>
        </Stack>
      </form>

      <Divider label="Or" my="lg" />

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
