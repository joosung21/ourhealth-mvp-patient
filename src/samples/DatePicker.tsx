import 'dayjs/locale/ko';
import 'dayjs/locale/zh-cn';

import { useState } from 'react';
import { Container, Grid, Paper, Stack } from '@mantine/core';
import {
  DatePickerInput,
  DatesProvider,
  DateTimePicker,
  MonthPickerInput,
  TimeInput,
  YearPickerInput,
} from '@mantine/dates';

export default function DatePicker() {
  const [value, setValue] = useState<Date | null>(null);
  const [dates, setDates] = useState<Date[]>([]);
  const [range, setRange] = useState<[Date | null, Date | null]>([null, null]);

  return (
    <Container>
      <h1>DatePicker</h1>
      <div className="page-description">
        Date and time pickers with different modes and settings
      </div>
      <Paper shadow="xs" radius="md" p="xl">
        <Grid gutter="lg">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="md">
              <DatePickerInput
                label="Pick date"
                placeholder="Pick date"
                value={value}
                onChange={setValue}
              />

              <MonthPickerInput label="Pick month" placeholder="Pick month" />

              <YearPickerInput label="Pick year" placeholder="Pick year" />

              <DatesProvider
                settings={{ locale: 'ko', firstDayOfWeek: 0, weekendDays: [0], timezone: 'UTC' }}
              >
                <DatePickerInput label="Locate Korea" placeholder="Pick date" />
              </DatesProvider>

              <DatesProvider
                settings={{ locale: 'zh-cn', firstDayOfWeek: 0, weekendDays: [0], timezone: 'UTC' }}
              >
                <DatePickerInput label="Locate China" placeholder="Pick date" />
              </DatesProvider>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="md">
              <DatePickerInput
                type="range"
                label="Pick range"
                placeholder="Pick dates range"
                value={range}
                onChange={setRange}
              />

              <DatePickerInput
                type="multiple"
                label="Pick multiple dates"
                placeholder="Pick dates"
                value={dates}
                onChange={setDates}
              />

              <DateTimePicker label="Pick date and time" placeholder="Pick date and time" />

              <TimeInput label="Time Input" />
            </Stack>
          </Grid.Col>
        </Grid>
      </Paper>
    </Container>
  );
}
