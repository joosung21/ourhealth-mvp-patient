import { Container, Paper, Text } from '@mantine/core';

export default function Typography() {
  return (
    <Container>
      <h1>Typography</h1>
      <div className="page-description">Typography styles and text alignment</div>
      <Paper shadow="xs" radius="md" p="xl">
        <h1>Header 1</h1>
        <h2>Header 2</h2>
        <h3>Header 3</h3>
        <h4>Header 4</h4>
        <div className="label">Label</div>
        <Text size="xs">Extra small text</Text>
        <Text size="sm">Small text</Text>
        <Text size="md">Default text</Text>
        <Text size="lg">Large text</Text>
        <Text size="xl">Extra large text</Text>
        <Text fw={500}>Semibold</Text>
        <Text fw={700}>Bold</Text>
        <Text fs="italic">Italic</Text>
        <Text td="underline">Underlined</Text>
        <Text td="line-through">Strikethrough</Text>
        <Text c="dimmed">Dimmed text</Text>
        <Text tt="uppercase">Uppercase</Text>
        <Text tt="capitalize">capitalized text</Text>
        <Text ta="center">Aligned to center</Text>
        <Text ta="right">Aligned to right</Text>
        <p className="mt-4">
          Paragraph: English
          <br />
          Lorem ipsum odor amet, consectetuer adipiscing elit. Porta facilisis dictumst quisque
          sollicitudin commodo ornare. Dapibus ullamcorper commodo velit elit pulvinar natoque.
          Semper sem habitasse habitant libero ad condimentum. Enim duis sollicitudin magna magna ut
          pellentesque odio eros aptent. Torquent id metus viverra; varius euismod proin conubia
          pulvinar sed. Sagittis aliquam non hendrerit facilisi per. Sollicitudin habitasse purus
          habitasse, nisl parturient non.
        </p>
        <p className="mt-4">
          Paragraph: Chinese
          <br />
          這是一段沒有實際意義的文字，用於模擬文本效果，通常用於設計和排版測試。這段文字無法表達具體的內容，但在設計中用來填補空白，以便視覺化頁面布局。不同的字體樣式和段落配置可以通過這種文字進行調整。這段文字無法被閱讀或理解，因此適合在不需要實際內容的情況下使用。常見於設計原型和排版樣式的測試過程中。
        </p>

        <p className="mt-4">
          Paragraph: Korean
          <br /> 로렘 입숨 글자는 무의미한 텍스트로 구성됩니다. 예시 문장을 작성하여 디자인
          레이아웃을 구성하거나, 타이포그래피 테스트에 사용됩니다. 다양한 글씨체와 문단 구성을
          확인할 수 있도록 사용하며, 실제 의미가 없는 문장들로 구성됩니다. 가독성에 영향을 주지
          않으면서 디자인을 테스트하는 데 유용합니다. 글자 간격, 문단 간격 등을 조정하여 최종
          디자인을 점검하는 과정에서 자주 활용됩니다.
          <br />
        </p>
      </Paper>
    </Container>
  );
}
