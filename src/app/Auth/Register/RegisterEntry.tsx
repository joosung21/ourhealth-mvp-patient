import { CheckIcon } from '@heroicons/react/24/outline';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, Divider, Group, Select, SelectProps, Stack, TextInput } from '@mantine/core';
import AppleIcon from '@/assets/icon-apple.svg';
import EmailIcon from '@/assets/icon-email.svg';
import GoogleIcon from '@/assets/icon-google.svg';
import InstallButton from '@/components/InstallButton/InstallButton';
import COUNTRY_CODES from '@/constants/countrycode.json';

type CountryCode = {
  name: string;
  dial_code: string;
  code: string;
};

// 국가 선택 옵션 생성
const COUNTRY_ITEMS = (COUNTRY_CODES as CountryCode[]).map((item) => ({
  value: item.code,
  label: item.code,
}));

// 초기 폼 값
const INIT_VALUES = {
  dialCode: 'CA',
  mobileNumber: '',
};

// Select 옵션 렌더링 함수
const renderSelectOption: SelectProps['renderOption'] = ({ option, checked }) => {
  const item = COUNTRY_CODES.find((item) => item.code === option.value);
  if (!item) return option.value;

  return (
    <Group flex="1" gap="xs">
      {item.name} ({item.dial_code}){checked && <CheckIcon className="w-4 ml-auto" />}
    </Group>
  );
};

// 폼 값 타입 정의
interface FormValues {
  dialCode: string;
  mobileNumber: string;
}

export default function RegisterEntry() {
  const navigate = useNavigate();

  const rules = {
    mobileNumber: {
      required: 'Mobile number is required',
      validate: {
        isTenDigits: (value: string) => {
          const digits = value.replace(/\D/g, '');
          return digits.length === 10 || 'Enter 10 digits';
        },
      },
    },
  };

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: INIT_VALUES,
    // mode: 'onBlur',
  });

  // Track the current value of the 'dialCode' field
  const dialCode = useWatch({
    control,
    name: 'dialCode',
    defaultValue: 'CA',
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
    navigate('/register-language');
  };

  const formatMobileNumber = (value: string) => {
    let cleaned = value.replace(/\D/g, '');

    cleaned = cleaned.slice(0, 10);

    if (cleaned.length > 6) {
      cleaned = `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    } else if (cleaned.length > 3) {
      cleaned = `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
    }

    return cleaned;
  };

  const getDialCode = (code: string) => {
    const dialCodeItem = COUNTRY_CODES.find((item) => item.code === code);
    return dialCodeItem ? (
      <div className="tracking-[-1px]">{dialCodeItem.dial_code}</div>
    ) : (
      <div></div>
    );
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap="md">
          <div className="text-h1 text-center p-[10px]">Welcome to OurHealth</div>
          <div className="flex gap-2">
            <Controller
              control={control}
              name="dialCode"
              render={({ field }) => (
                <Select
                  {...field}
                  size="md"
                  placeholder="Select your country"
                  classNames={{
                    input: 'w-[87px]',
                    dropdown: '!w-[calc(100vw-10px)] max-w-[370px]',
                  }}
                  data={COUNTRY_ITEMS}
                  maxDropdownHeight={300}
                  renderOption={renderSelectOption}
                  comboboxProps={{ width: 'max-content', position: 'bottom-start' }}
                  onChange={(value) => field.onChange(value || '')}
                />
              )}
            />

            <Controller
              control={control}
              name="mobileNumber"
              rules={rules.mobileNumber}
              render={({ field }) => (
                <TextInput
                  {...field}
                  size="md"
                  placeholder="Mobile number"
                  type="tel"
                  className="grow"
                  leftSection={getDialCode(dialCode)}
                  inputMode="numeric"
                  pattern="[0-9\-]*"
                  error={errors.mobileNumber && errors.mobileNumber.message}
                  onChange={(e) => {
                    const formatted = formatMobileNumber(e.target.value);
                    field.onChange(formatted);
                  }}
                />
              )}
            />
          </div>

          <Button size="lg" type="submit" fullWidth>
            Continue
          </Button>

          <Divider label="or" />

          <Button
            variant="default"
            size="lg"
            leftSection={<img src={AppleIcon} alt="Apple Icon" />}
            onClick={() => navigate('/register-language')}
          >
            Continue with Apple
          </Button>
          <Button
            variant="default"
            size="lg"
            leftSection={<img src={GoogleIcon} alt="Google Icon" />}
            onClick={() => navigate('/register-language')}
          >
            Continue with Google
          </Button>
          <Button
            variant="default"
            size="lg"
            leftSection={<img src={EmailIcon} alt="Email Icon" />}
            onClick={() => navigate('/register-language')}
          >
            Continue with Email
          </Button>
        </Stack>
      </form>

      <InstallButton />
    </div>
  );
}
