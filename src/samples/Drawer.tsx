import { Button, Container, Drawer, Paper } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export default function Drawers() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Container>
        <h1>Drawer</h1>
        <div className="page-description">
          Drawer is lighter version of modal, shows content from the side
        </div>
        <Paper shadow="xs" radius="md" p="xl">
          <Button onClick={open}>Open Drawer</Button>
        </Paper>
      </Container>

      <Drawer opened={opened} onClose={close} title="Drawer Title" position="right">
        Drawer Contents
      </Drawer>
    </>
  );
}
