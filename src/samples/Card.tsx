import {
  Anchor,
  Avatar,
  Badge,
  Button,
  Card,
  Container,
  Group,
  Image,
  Paper,
  RingProgress,
  Text,
  useMantineTheme,
} from '@mantine/core';
import Img from '@/assets/toronto-hospital.png';
import classes from './Card.module.css';

const stats = [
  { value: 447, label: 'Remaining' },
  { value: 76, label: 'In progress' },
];

export default function Cards() {
  const theme = useMantineTheme();
  const completed = 1887;
  const total = 2334;
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text className={classes.label}>{stat.value}</Text>
      <Text size="xs" c="dimmed">
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Container>
      <h1 className="mb-6">Card</h1>

      <Group gap="xl" align="start">
        <Card shadow="sm" padding="lg" radius="md" className="max-w-[353px]">
          <Card.Section>
            <Image src={Img} h={280} alt="Toronto Hospital" />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Toronto General Hospital</Text>
            <Badge color="secondary.4">On</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            200 Elizabeth St, Toronto, ON M5G 2C4, Canada
          </Text>
          <Text size="sm" c="dimmed">
            Phone: +1 416-340-4800
          </Text>
          <Text size="sm" c="dimmed">
            Website: www.uhn.ca
          </Text>

          <Text size="sm" mt="md">
            Toronto General Hospital is a major teaching hospital in downtown Toronto, Ontario,
            Canada, and a part of the University Health Network.
          </Text>

          <Button fullWidth mt="md">
            Book Appointment
          </Button>
        </Card>

        <Card withBorder p="xl" radius="md">
          <div className={classes.inner}>
            <div>
              <Text fz="xl" className={classes.label}>
                Project tasks
              </Text>
              <div>
                <Text className={classes.lead} mt={30}>
                  1887
                </Text>
                <Text fz="xs" c="dimmed">
                  Completed
                </Text>
              </div>
              <Group mt="lg">{items}</Group>
            </div>

            <div className={classes.ring}>
              <RingProgress
                roundCaps
                thickness={6}
                size={150}
                sections={[{ value: (completed / total) * 100, color: theme.primaryColor }]}
                label={
                  <div>
                    <Text ta="center" fz="lg" className={classes.label}>
                      {((completed / total) * 100).toFixed(0)}%
                    </Text>
                    <Text ta="center" fz="xs" c="dimmed">
                      Completed
                    </Text>
                  </div>
                }
              />
            </div>
          </div>
        </Card>

        <Paper withBorder radius="md" className="px-8 py-6">
          <Group>
            <Avatar
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
              alt="Jacob Warnhalter"
              radius="xl"
            />
            <div>
              <Text fz="sm">Jacob Warnhalter</Text>
              <Text fz="xs" c="dimmed">
                10 minutes ago
              </Text>
            </div>
          </Group>
          <div className="mt-4">
            <p>
              <Anchor href="https://www.uhn.ca/" rel="noopener noreferrer" target="_blank">
                Toronto General Hospital
              </Anchor>{' '}
              is a major teaching hospital in downtown Toronto, Ontario, Canada, and a part of the
              University Health Network.
            </p>
            <p></p>
          </div>
        </Paper>
      </Group>
    </Container>
  );
}
