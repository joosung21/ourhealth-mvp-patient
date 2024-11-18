import { Box, Button, Card, Container, Divider, Group, Paper } from '@mantine/core';
import { TAILWIND_COLORS } from './mocks/tainwindColors.js';

const mantineColors = [
  'darkTeal',
  'secondary',
  'gray',
  'red',
  'pink',
  'grape',
  'violet',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'green',
  'lime',
  'yellow',
  'orange',
];

function isDark(color: string) {
  return Number(color.split('-').pop()) >= 500;
}

export default function Color() {
  return (
    <Container size="xl">
      <h1>Color</h1>
      <div className="page-description">Color scheme</div>
      <Paper shadow="xs" radius="md" p="xl">
        <h2>Mantine Component Color Scheme</h2>
        {mantineColors.map((color) => (
          <Group key={color} style={{ marginBottom: 10 }}>
            <Button color={color}>
              {color}
              {color === 'blue' && <span className="ml-1">(Primary)</span>}
              {color === 'red' && <span className="ml-1">(Error)</span>}
              {color === 'teal' && <span className="ml-1">(Success)</span>}
            </Button>
            <Button color={`${color}.1`}>{color}.1</Button>
            <Button color={`${color}.2`}>{color}.2</Button>
            <Button color={`${color}.3`}>{color}.3</Button>
            <Button color={`${color}.4`}>{color}.4</Button>
            <Button color={`${color}.5`}>{color}.5</Button>
            <Button color={`${color}.6`}>{color}.6</Button>
            <Button color={`${color}.7`}>{color}.7</Button>
            <Button color={`${color}.8`}>{color}.8</Button>
            <Button color={`${color}.9`}>{color}.9</Button>
          </Group>
        ))}

        <Divider my="lg" />

        <h2>Tailwind Background Color Scheme</h2>
        {TAILWIND_COLORS.map((arr: string[]) => (
          <Group key={arr[0]} style={{ marginBottom: 10 }} gap={0} className="text-xs">
            {arr.map((color: string) => (
              <Box
                key={color}
                style={{ width: 100 }}
                className={`${color} ${isDark(color) ? 'text-white' : 'text-gray-800'} font-[600] h-12 flex items-center justify-center`}
                p="sm"
              >
                {color}
              </Box>
            ))}
          </Group>
        ))}
      </Paper>
    </Container>
  );
}
