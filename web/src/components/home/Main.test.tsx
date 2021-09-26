import { render, screen } from '@testing-library/react';
import Main from './Main';

const TestElement = () => <div data-testid={'test'}>test</div>;

it('home/Main', () => {
  render(
    <Main>
      <TestElement />
    </Main>
  );

  const testElement = screen.getByTestId('test');

  expect(testElement.tagName).toMatch(/^div$/i);
  expect(screen.getByText('test')).toBe(testElement);
});
