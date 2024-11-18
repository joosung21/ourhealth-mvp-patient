import { Anchor, Container, Paper, Stack, Table } from '@mantine/core';
import { APP_SPEC } from './mocks/appSpec';

const items = APP_SPEC;

const rows = items.map((item) => (
  <Table.Tr key={item.name}>
    <Table.Td className="font-semibold whitespace-nowrap">{item.name}</Table.Td>
    <Table.Td className="whitespace-nowrap">{item.feature}</Table.Td>
    <Table.Td>{item.description}</Table.Td>
    <Table.Td className="whitespace-nowrap">
      <Stack gap={2} align="flex-start">
        {item.sources?.map((source, index) => (
          <Anchor key={index} size="sm" onClick={() => window.open(source.url, '_blank')}>
            {source.name}
          </Anchor>
        ))}
      </Stack>
    </Table.Td>
  </Table.Tr>
));

export default function AppSpec() {
  return (
    <Container>
      <h1>App Spec</h1>
      <div className="page-description">Application Specification Details</div>
      <Paper shadow="xs" radius="md" p="xl">
        <Table.ScrollContainer minWidth={500}>
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>name</Table.Th>
                <Table.Th>feature</Table.Th>
                <Table.Th>description</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </Paper>
    </Container>
  );
}
