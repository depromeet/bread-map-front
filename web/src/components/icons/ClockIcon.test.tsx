import { render, screen } from '@testing-library/react';
import ClockIcon from './ClockIcon';

it('Icons/ClockIcon', () => {
  render(<ClockIcon />);

  const el = screen.getByTitle('Clock Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
