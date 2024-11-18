import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { Container, Grid, Paper, Text } from '@mantine/core';
import { useListState } from '@mantine/hooks';

const data = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

export default function DrageAndDrop() {
  const [state, handlers] = useListState(data);

  const items = state.map((item, index) => (
    <Draggable key={item.symbol} index={index} draggableId={item.symbol}>
      {(provided, snapshot) => (
        <div
          className="border rounded-lg mb-4 px-4 py-2 flex items-center bg-white select-none"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="flex text-gray-400">
            <EllipsisVerticalIcon className="w-5 -ml-2" />
            <EllipsisVerticalIcon className="w-5 -ml-4 mr-4" />
          </div>
          <Text className="font-bold text-xl w-12">{item.symbol}</Text>
          <div>
            <Text>{item.name}</Text>
            <Text c="dimmed" size="sm">
              Position: {item.position} • Mass: {item.mass}
            </Text>
          </div>
        </div>
      )}
    </Draggable>
  ));

  return (
    <Container>
      <h1>Drag and Drop</h1>
      <div className="page-description">
        Drag and drop items to reorder them. The state is managed with the useListState hook.
      </div>
      <Paper shadow="xs" radius="md" p="xl">
        <Grid>
          <Grid.Col span={{ xs: 12, md: 6 }}>
            <h4>Drag and drop items to reorder them</h4>
            <DragDropContext
              onDragEnd={({ destination, source }) =>
                handlers.reorder({ from: source.index, to: destination?.index || 0 })
              }
            >
              <Droppable droppableId="dnd-list" direction="vertical">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {items}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </Grid.Col>
          <Grid.Col span={{ xs: 12, md: 6 }}>
            <h4>State</h4>
            <pre className="text-xs bg-gray-50 p-4 rounded">{JSON.stringify(state, null, 2)}</pre>
          </Grid.Col>
        </Grid>
      </Paper>
    </Container>
  );
}
