import { CheckIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { Button, Divider, Group, Select, SelectProps, Stack, TextInput } from '@mantine/core';
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

export default function RegisterEntry() {
  const navigate = useNavigate();
  const form = useForm({
    // mode: 'onChange',
    initialValues: INIT_VALUES,
  });

  return (
    <>
      <div className="container">
        <form onSubmit={form.onSubmit((values) => alert(JSON.stringify(values, null, 2)))}>
          <Stack gap="md">
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
                onChange={(value) => form.setFieldValue('dialCode', value || '')}
              />
              <TextInput
                size="md"
                className="grow"
                placeholder="Mobile number"
                leftSection={`${COUNTRY_CODES.find((item) => item.code === form.values.dialCode)?.dial_code}`}
                {...form.getInputProps('mobileNumber')}
              />
            </div>

            <Button size="lg" onClick={() => navigate('/register-language')}>
              Continue
            </Button>

            <Divider label="or" />

            <Button
              variant="default"
              size="lg"
              leftSection={<img src="/icons/icon-apple.svg" />}
              onClick={() => navigate('/register-language')}
            >
              Continue with Apple
            </Button>
            <Button
              variant="default"
              size="lg"
              leftSection={<img src="/icons/icon-google.svg" />}
              onClick={() => navigate('/register-language')}
            >
              Continue with Google
            </Button>
            <Button
              variant="default"
              size="lg"
              leftSection={<img src="/icons/icon-email.svg" />}
              onClick={() => navigate('/register-language')}
            >
              Continue with Email
            </Button>
          </Stack>
        </form>
      </div>
    </>
  );
}
