import { render, screen } from '@testing-library/react';
import Grid from './Grid';

const TestElement = () => (
  <div data-testid={'test'}>test</div>
);

it('home/Grid', () => {
  render(
    <Grid>
      <TestElement />
    </Grid>
  );

  const testElement = screen.getByTestId('test');

  expect(testElement.tagName).toMatch(/^div$/i);
  expect(screen.getByText('test')).toBe(testElement);
});

