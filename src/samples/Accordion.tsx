import { Accordion, Container, Paper } from '@mantine/core';

const groceries = [
  {
    emoji: '🍎',
    value: 'Apples',
    description:
      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
  },
  {
    emoji: '🍌',
    value: 'Bananas',
    description:
      'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
  },
  {
    emoji: '🥦',
    value: 'Broccoli',
    description:
      'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
  },
];

export default function Accordions() {
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Container>
      <h1 className="mb-6">Accordion</h1>
      <Paper shadow="xs" radius="md" p="xl">
        <div className="label">Default Style</div>
        <Accordion defaultValue="Apples">{items}</Accordion>

        <div className="label mt-16">Filled Style</div>
        <Accordion defaultValue="Apples" variant="filled">
          {items}
        </Accordion>
      </Paper>
    </Container>
  );
}
