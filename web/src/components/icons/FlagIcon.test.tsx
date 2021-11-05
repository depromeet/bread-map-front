import { render, screen } from '@testing-library/react';
import FlagIcon from './FlagIcon';

it('Icons/FlagIcon', () => {
  render(<FlagIcon />);

  const el = screen.getByTitle('Flag Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
