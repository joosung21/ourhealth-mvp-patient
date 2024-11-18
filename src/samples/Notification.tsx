import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { Button, Container, Group, Paper } from '@mantine/core';
import { notifications } from '@mantine/notifications';

export default function Notification() {
  return (
    <Container>
      <h1>Notification</h1>
      <div className="page-description">Notification component</div>
      <Paper shadow="xs" radius="md" p="xl">
        <Group>
          <Button
            onClick={() =>
              notifications.show({
                title: 'Default notification',
                message: 'This is default notification ⭐️',
              })
            }
          >
            Default notification
          </Button>
          <Button
            onClick={() =>
              notifications.show({
                title: 'Success notification',
                message: 'This is success notification 👍',
                color: 'teal',
              })
            }
            variant="outline"
          >
            Success notification
          </Button>
          <Button
            onClick={() =>
              notifications.show({
                title: 'Error notification',
                message: 'This is error notification ❌',
                color: 'red',
              })
            }
            variant="outline"
            color="red"
          >
            Error notification
          </Button>
          <Button
            color="secondary.5"
            onClick={() => {
              const id = notifications.show({
                loading: true,
                title: 'Loading your data',
                message: 'Data will be loaded in 3 seconds, you cannot close this yet',
                autoClose: false,
                withCloseButton: false,
              });

              setTimeout(() => {
                notifications.update({
                  id,
                  color: 'teal',
                  title: 'Data was loaded',
                  message:
                    'Notification will close in 2 seconds, you can close this notification now',
                  icon: <CheckCircleIcon />,
                  loading: false,
                  autoClose: 2000,
                });
              }, 3000);
            }}
          >
            Show update notification
          </Button>
        </Group>
      </Paper>
    </Container>
  );
}
