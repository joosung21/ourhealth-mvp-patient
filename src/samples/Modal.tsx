import { Button, Container, Modal, Paper, Stack, Text, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { modals } from '@mantine/modals';

export default function Modals() {
  const [opened, { open, close }] = useDisclosure(false);

  const openModal = () =>
    modals.openConfirmModal({
      title: 'Please confirm your action',
      children: (
        <Text size="sm">
          This action is so important that you are required to confirm it with a modal. Please click
          one of these buttons to proceed.
        </Text>
      ),
      labels: { confirm: 'Confirm', cancel: 'Cancel' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => console.log('Confirmed'),
    });

  const openDeleteModal = () =>
    modals.openConfirmModal({
      title: 'Delete your profile',
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete your profile? This action is destructive and you will have
          to contact support to restore your data.
        </Text>
      ),
      labels: { confirm: 'Delete account', cancel: "No don't delete it" },
      confirmProps: { color: 'red' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => console.log('Confirmed'),
    });

  return (
    <Container>
      <Modal opened={opened} onClose={close} title="Registration">
        <Stack gap="md">
          <TextInput label="Your name" placeholder="Your name" />
          <TextInput label="Your email" placeholder="Your email" />
          <TextInput label="Password" placeholder="Password" type="password" />
          <TextInput label="Repeat password" placeholder="Repeat password" type="password" />
          <TextInput label="Phone number" placeholder="Phone number" />
          <TextInput label="Address" placeholder="Address" />
          <Button fullWidth onClick={close}>
            Register
          </Button>
        </Stack>
      </Modal>

      <h1>Modal</h1>
      <div className="page-description">Modal Popup and Confirmation modals</div>
      <Paper shadow="xs" radius="md" p="xl">
        <Stack gap="md" justify="center" align="center">
          <Button onClick={open}>Open modal</Button>
          <Button onClick={openModal}>Open confirm modal</Button>
          <Button onClick={openDeleteModal} color="red">
            Delete account
          </Button>
          <Button
            onClick={() => {
              modals.open({
                title: 'Subscribe to newsletter',
                children: (
                  <>
                    <TextInput label="Your email" placeholder="Your email" data-autofocus />
                    <Button fullWidth onClick={() => modals.closeAll()} mt="md">
                      Submit
                    </Button>
                  </>
                ),
              });
            }}
          >
            Open content modal
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}
