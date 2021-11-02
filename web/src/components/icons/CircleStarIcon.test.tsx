import { render, screen } from '@testing-library/react';
import CircleStarIcon from './CircleStarIcon';

it('Icons/CircleStarIcon', () => {
  render(<CircleStarIcon />);

  const el = screen.getByTitle('Circle Star Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
