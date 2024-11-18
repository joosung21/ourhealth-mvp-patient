import { Button, Center, Container, Group, Paper, Text } from '@mantine/core';
import { useCounterStore, usePersistedCounterStore } from '@/stores/useCounterStore';

export default function StateControl() {
  const count = useCounterStore((state) => state.count);
  const increase = useCounterStore((state) => state.increase);
  const decrease = useCounterStore((state) => state.decrease);

  const count2 = usePersistedCounterStore((state) => state.count);
  const increase2 = usePersistedCounterStore((state) => state.increase);
  const decrease2 = usePersistedCounterStore((state) => state.decrease);

  return (
    <Container>
      <h1>State Control</h1>
      <div className="page-description">State management using Zustand and local storage</div>
      <Paper shadow="xs" radius="md" p="xl">
        <Center>
          <div className="text-center">
            <p>
              This is a simple example of how to use Zustand to manage the state of a counter.
              <br />
              Click the buttons to increase or decrease the counter.
              <br />
              Check the store number on the Topbar.
            </p>
            <Text size="xl" fw={700} style={{ display: 'block', marginBottom: 20 }}>
              {count}
            </Text>
            <Group gap="xs" justify="center">
              <Button onClick={increase} style={{ marginRight: 10 }}>
                Increase
              </Button>
              <Button onClick={decrease}>Decrease</Button>
            </Group>
          </div>
        </Center>

        <Center mt="xl">
          <div className="text-center">
            <p>
              This counter is persisted in the local storage.
              <br />
              Try to refresh the page and see if the counter value is still the same.
              <br />
              Persist number is stored in the local storage.
            </p>
            <Text size="xl" fw={700} style={{ display: 'block', marginBottom: 20 }}>
              {count2}
            </Text>

            <Group gap="xs" justify="center">
              <Button onClick={increase2} style={{ marginRight: 10 }}>
                Increase
              </Button>
              <Button onClick={decrease2}>Decrease</Button>
              <Button
                onClick={() => usePersistedCounterStore.setState({ count: 0 })}
                color="gray"
                style={{ marginLeft: 10 }}
              >
                Reset
              </Button>
              {/* Refresh page */}
              <Button
                onClick={() => window.location.reload()}
                color="secondary.4"
                style={{ marginLeft: 10 }}
              >
                Refresh Page
              </Button>
            </Group>
          </div>
        </Center>
      </Paper>
    </Container>
  );
}
