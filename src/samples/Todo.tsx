import { Container, List, Paper } from '@mantine/core';

export default function Todo() {
  return (
    <Container>
      <h1>Todo</h1>
      <div className="page-description">The list of things to do by priority</div>
      <Paper shadow="xs" radius="md" p="xl">
        <List type="ordered">
          <List.Item>Prototype first feature</List.Item>
          {/* <List.Item>Mantine UI 참조</List.Item> */}
          {/* <List.Item>Skeleton Backup</List.Item> */}
          {/* <List.Item>Drive Document Read</List.Item> */}
        </List>
      </Paper>
    </Container>
  );
}
