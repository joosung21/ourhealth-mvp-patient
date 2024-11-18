import { Center, Container, Grid, Paper, Table } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';

const items = [
  { name: 'xs', min: 300, max: 575, description: 'Extra small devices' },
  { name: 'sm', min: 576, max: 767, description: 'mobile phone' },
  { name: 'md', min: 768, max: 991, description: 'mobile phone/tablet' },
  { name: 'lg', min: 992, max: 1199, description: 'tablet/desktop' },
  { name: 'xl', min: 1200, description: 'desktop' },
];

const rows = items.map((item) => (
  <Table.Tr key={item.name}>
    <Table.Td className="font-semibold">{item.name}</Table.Td>
    <Table.Td>{`${item.min}px - ${item.max ? `${item.max}px` : '∞'}`}</Table.Td>
    <Table.Td>{item.description}</Table.Td>
  </Table.Tr>
));

export default function Responsive() {
  const { width } = useViewportSize();

  return (
    <Container>
      <h1>Responsive</h1>
      <div className="page-description">Responsive design for all devices</div>
      <Paper shadow="xs" radius="md" p="xl">
        <h2>Current Viewport</h2>
        <Center style={{ fontSize: 24, fontWeight: 500 }}>
          <div className="text-center">
            <div>{width}px</div>
            <div>
              Breakpoint:{' '}
              {width < 576
                ? 'xs'
                : width < 768
                  ? 'sm'
                  : width < 992
                    ? 'md'
                    : width < 1200
                      ? 'lg'
                      : 'xl'}
            </div>
          </div>
        </Center>

        <h2>Breakpoints</h2>
        <Table.ScrollContainer minWidth={500}>
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>name</Table.Th>
                <Table.Th>value</Table.Th>
                <Table.Th>description</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Table.ScrollContainer>

        <h2>Grid example</h2>
        <Grid>
          <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
            <Paper shadow="xs" radius="md" p="xl" className="bg-slate-200" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
            <Paper shadow="xs" radius="md" p="xl" className="bg-slate-200" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
            <Paper shadow="xs" radius="md" p="xl" className="bg-slate-200" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
            <Paper shadow="xs" radius="md" p="xl" className="bg-slate-200" />
          </Grid.Col>
        </Grid>
      </Paper>
    </Container>
  );
}
