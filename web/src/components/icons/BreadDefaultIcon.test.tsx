import { render, screen } from '@testing-library/react';
import BreadDefaultIcon from './BreadDefaultIcon';

it('Icons/BreadDefaultIcon', () => {
  render(<BreadDefaultIcon />);

  const el = screen.getByTitle('Bread Default Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
