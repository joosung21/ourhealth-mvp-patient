import { useState } from 'react';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import {
  Button,
  Container,
  Group,
  HoverCard,
  Paper,
  Popover,
  Stack,
  Text,
  TextInput,
  Tooltip,
  useMantineTheme,
} from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';

export default function Tooltips() {
  const [popoverOpened, setPopoverOpened] = useState(false);
  const popoverRef = useClickOutside(() => setPopoverOpened(false));
  const theme = useMantineTheme();

  return (
    <Container>
      <h1>Tooltip & Popover</h1>
      <div className="page-description">
        Tooltip, hover card, and popover for additional information or actions
      </div>
      <Paper shadow="xs" radius="md" p="xl">
        <Stack gap="xl">
          <div>
            <div className="label">Tooltip on button</div>
            <Tooltip label="This is tooltip. Describe what this button does. " position="top">
              <Button>Mouse over me</Button>
            </Tooltip>
          </div>
          <div>
            <div className="label">Tooltip on icon</div>
            <Tooltip label="This is tooltip. Describe what this icon does. " position="top">
              <QuestionMarkCircleIcon
                className="w-6"
                style={{
                  color: theme.colors.darkTeal[5],
                }}
              />
            </Tooltip>
          </div>
          <div>
            <div className="label">Hover card</div>
            <HoverCard width={280} shadow="md">
              <HoverCard.Target>
                <Button>Hover to reveal the card</Button>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Text size="sm">
                  Hover card is revealed when user hovers over target element, it will be hidden
                  once mouse is not over both target and dropdown elements
                </Text>
                <Group mt="md" gap="xl">
                  <Text size="sm">
                    <b>0</b> Following
                  </Text>
                  <Text size="sm">
                    <b>1,174</b> Followers
                  </Text>
                </Group>
              </HoverCard.Dropdown>
            </HoverCard>
          </div>
          <div>
            <div className="label">Popover</div>
            <Popover
              opened={popoverOpened}
              onClose={() => setPopoverOpened(false)}
              width={300}
              position="bottom"
              shadow="md"
              trapFocus
            >
              <Popover.Target>
                <Button onClick={() => setPopoverOpened(true)}>Open popover</Button>
              </Popover.Target>
              <Popover.Dropdown ref={popoverRef}>
                <Text size="sm">
                  Popover is a great way to display additional information or actions related to
                  specific element
                </Text>
                <TextInput label="Name" placeholder="Name" size="xs" />
                <TextInput label="Email" placeholder="john@doe.com" size="xs" mt="xs" />
                <Button
                  fullWidth
                  mt="md"
                  onClick={() => setPopoverOpened(false)} // Submit 클릭 시 닫기
                >
                  Submit
                </Button>
              </Popover.Dropdown>
            </Popover>
          </div>
        </Stack>
      </Paper>
    </Container>
  );
}
