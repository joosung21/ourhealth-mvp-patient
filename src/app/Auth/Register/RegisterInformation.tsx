import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, Stack, TextInput } from '@mantine/core';

interface FormValues {
  healthCardNumber: string;
  birthday: string;
}

export default function RegisterInformation() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onBlur',
    defaultValues: {
      healthCardNumber: '',
      birthday: '',
    },
  });

  const rules = {
    healthCardNumber: {
      required: 'health card number is required',
      pattern: {
        value: /^\d{10}$/,
        message: 'Must be exactly 10 digits',
      },
    },
    birthday: {
      required: 'Date of Birth is required',
      validate: {
        validFormat: (value: string) => {
          // Check if the format is MM-DD-YYYY
          const regex = /^(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])-\d{4}$/;
          return regex.test(value) || 'Date of Birth must be in MM-DD-YYYY format';
        },
        validDate: (value: string) => {
          const [month, day, year] = value.split('-').map(Number);
          const date = new Date(year, month - 1, day);
          if (
            date.getFullYear() !== year ||
            date.getMonth() + 1 !== month ||
            date.getDate() !== day
          ) {
            return 'Invalid date';
          }
          return true;
        },
      },
    },
  };

  const onSubmit = (values: FormValues) => {
    console.log(values);
    navigate('/register-complete');
  };

  const formatBirthday = (value: string) => {
    // Remove all non-digit characters
    let cleaned = value.replace(/\D/g, '');

    // Apply formatting
    if (cleaned.length > 2 && cleaned.length <= 4) {
      cleaned = `${cleaned.slice(0, 2)}-${cleaned.slice(2)}`;
    } else if (cleaned.length > 4) {
      cleaned = `${cleaned.slice(0, 2)}-${cleaned.slice(2, 4)}-${cleaned.slice(4, 8)}`;
    }

    return cleaned;
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
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
              {...register('healthCardNumber', rules.healthCardNumber)}
              error={errors.healthCardNumber && errors.healthCardNumber.message}
            />
            <Controller
              control={control}
              name="birthday"
              rules={rules.birthday}
              render={({ field }) => (
                <TextInput
                  {...field}
                  size="md"
                  label="Date of Birth (MM-DD-YYYY)"
                  placeholder="MM-DD-YYYY"
                  inputMode="numeric"
                  pattern="[0-9\-]*"
                  enterKeyHint="done"
                  onChange={(e) => {
                    const formatted = formatBirthday(e.target.value);
                    setValue('birthday', formatted);
                  }}
                  error={errors.birthday && errors.birthday.message}
                />
              )}
            />
          </Stack>
        </form>
        <div className="bottom-action">
          <Button size="lg" onClick={handleSubmit(onSubmit)}>
            Next
          </Button>
        </div>
      </div>
    </>
  );
}
