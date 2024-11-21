import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, Stack, TextInput } from '@mantine/core';

interface FormValues {
  firstName: string;
  lastName: string;
}

export default function RegisterName() {
  const navigate = useNavigate();

  // react-hook-form 초기화
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onBlur', // 검증 시점을 'onBlur'로 설정
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });

  // 폼 제출 핸들러
  const onSubmit = (values: FormValues) => {
    console.log(values);
    navigate('/register-information');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap="md">
          <div className="mb-1">
            <div className="text-h1">What’s your name?</div>
            <p>Let us know how to properly address you</p>
          </div>

          {/* First Name 필드 */}
          <Controller
            control={control}
            name="firstName"
            rules={{
              required: 'First Name is required',
              maxLength: {
                value: 20,
                message: 'First Name must be at most 20 characters',
              },
            }}
            render={({ field }) => (
              <TextInput
                {...field}
                size="md"
                label="First Name"
                placeholder="First Name"
                error={errors.firstName && errors.firstName.message}
              />
            )}
          />

          {/* Last Name 필드 */}
          <Controller
            control={control}
            name="lastName"
            rules={{
              required: 'Last Name is required',
              maxLength: {
                value: 20,
                message: 'Last Name must be at most 20 characters',
              },
            }}
            render={({ field }) => (
              <TextInput
                {...field}
                size="md"
                label="Last Name"
                placeholder="Last Name"
                error={errors.lastName && errors.lastName.message}
              />
            )}
          />
        </Stack>
      </form>
      <div className="bottom-action mt-auto">
        <Button size="lg" onClick={handleSubmit(onSubmit)}>
          Next
        </Button>
      </div>
    </div>
  );
}
