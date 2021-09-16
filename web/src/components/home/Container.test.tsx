import { render, screen } from '@testing-library/react';
import Container from './Container';

const TestElement = () => (
  <div data-testid={'test'}>test</div>
);

it('home/Container', () => {
  render(
    <Container>
      <TestElement />
    </Container>
  );

  const testElement = screen.getByTestId('test');

  expect(testElement.tagName).toMatch(/^div$/i);
  expect(screen.getByText('test')).toBe(testElement);
});
