import { render, screen } from '@testing-library/react';
import BreadCaneleIcon from './BreadCaneleIcon';

it('Icons/BreadCaneleIcon', () => {
  render(<BreadCaneleIcon />);

  const el = screen.getByTitle('Bread Canele Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
