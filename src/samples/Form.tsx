import { useState } from 'react';
import { PaperClipIcon } from '@heroicons/react/24/outline';
import {
  Autocomplete,
  Button,
  Checkbox,
  Chip,
  Container,
  Fieldset,
  FileButton,
  FileInput,
  Grid,
  Group,
  LoadingOverlay,
  MultiSelect,
  NumberInput,
  Paper,
  Radio,
  Select,
  Slider,
  Stack,
  Switch,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import DropzoneBox from '@/components/DropzoneBox/DropzoneBox';

const selectData = [
  'USA',
  'Canada',
  'UK',
  'Germany',
  'France',
  'Italy',
  'Korea',
  'China',
  'India',
  'Iran',
  'Philippines',
];

const INIT_VALUES = {
  email: '',
  termsOfService: false,
  gender: '',
  age: 0,
  radio: 'Radio1',
  chips: [],
  message: '',
  country: '',
};

export default function Form() {
  const [file, setFile] = useState<File | null>(null);
  const [visible, { toggle }] = useDisclosure(false);
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: INIT_VALUES,

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <Container>
      <h1>Form</h1>
      <div className="page-description">Form elements with validation</div>
      <Paper shadow="xs" radius="md" p="xl" className="relative">
        <LoadingOverlay visible={visible} />

        <form onSubmit={form.onSubmit((values) => alert(JSON.stringify(values, null, 2)))}>
          <Grid gutter="lg">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Fieldset legend="Input">
                <Stack gap="md">
                  <TextInput
                    withAsterisk
                    label="Email"
                    placeholder="your@email.com"
                    description="This is TextInput"
                    key={form.key('email')}
                    {...form.getInputProps('email')}
                  />
                  <NumberInput
                    label="Age"
                    placeholder="Your age"
                    description="This is NumberInput"
                    key={form.key('age')}
                    min={0}
                    {...form.getInputProps('age')}
                  />
                  <Textarea
                    label="Message"
                    placeholder="Your message"
                    description="This is Textarea"
                    key={form.key('message')}
                    rows={4}
                    {...form.getInputProps('message')}
                  />
                </Stack>
              </Fieldset>

              <Fieldset legend="Pick" mt="md">
                <Stack gap="xl">
                  <Checkbox
                    mt="md"
                    label="I agree to sell my privacy"
                    key={form.key('termsOfService')}
                    description="This is Checkbox"
                    {...form.getInputProps('termsOfService', { type: 'checkbox' })}
                  />
                  <Switch
                    defaultChecked
                    label="I agree to sell my privacy"
                    description="This is Switch"
                  />
                  <Radio.Group
                    name="radio"
                    label="Select one"
                    description="This is Radio"
                    withAsterisk
                    {...form.getInputProps('radio')}
                  >
                    <Group mt="xs">
                      <Radio value="Radio1" label="Radio1" />
                      <Radio value="Radio2" label="Radio2" />
                      <Radio value="Radio3" label="Radio3" />
                      <Radio value="Radio4" label="Radio4" />
                    </Group>
                  </Radio.Group>
                  <div>
                    <div className="label">Select chips</div>
                    <Chip.Group multiple {...form.getInputProps('chips')}>
                      <Group>
                        <Chip value="Apple">Apple</Chip>
                        <Chip value="Banana">Banana</Chip>
                        <Chip value="Orange">Orange</Chip>
                      </Group>
                    </Chip.Group>
                  </div>

                  <div>
                    <div className="label">Select Percentage</div>
                    <Slider
                      mb="lg"
                      step={10}
                      marks={[
                        { value: 20, label: '20%' },
                        { value: 50, label: '50%' },
                        { value: 80, label: '80%' },
                      ]}
                    />
                  </div>
                </Stack>
              </Fieldset>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Fieldset legend="Select">
                <Stack gap="md">
                  <Select
                    label="Gender"
                    placeholder="Please select"
                    description="This is Select"
                    data={['Male', 'Female', 'Other']}
                    key={form.key('gender')}
                    {...form.getInputProps('gender')}
                  />
                  <MultiSelect
                    label="Multiple Select"
                    placeholder="Please select"
                    description="This is MultiSelect"
                    data={selectData}
                    key={form.key('Countries')}
                    {...form.getInputProps('Countries')}
                    clearable
                  />
                  <Autocomplete
                    label="Autocomplete"
                    placeholder="Please select"
                    description="This is Autocomplete"
                    data={selectData}
                    key={form.key('country')}
                    {...form.getInputProps('country')}
                  />
                </Stack>
              </Fieldset>

              <Fieldset legend="FileUpload" mt="md">
                <Stack gap="md">
                  <FileInput
                    accept="image/png,image/jpeg,application/pdf"
                    label="Input style Upload files"
                    placeholder="Upload files"
                    leftSection={<PaperClipIcon className="w-5" />}
                    clearable
                  />
                  <div>
                    <div className="label">Button style Upload files</div>
                    <FileButton onChange={setFile} accept="image/png,image/jpeg">
                      {(props) => <Button {...props}>Upload image</Button>}
                    </FileButton>
                    {file && (
                      <Text size="sm" mt="sm">
                        Picked file: {file.name}
                      </Text>
                    )}
                  </div>
                  <div>
                    <div className="label">Dropzone style Upload files</div>
                    <DropzoneBox />
                  </div>
                </Stack>
              </Fieldset>
            </Grid.Col>
          </Grid>

          <Group justify="flex-end" mt="md">
            <Button type="submit" mt="lg">
              Submit
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
}
