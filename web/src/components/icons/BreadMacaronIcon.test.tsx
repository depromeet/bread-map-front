import { render, screen } from '@testing-library/react';
import BreadMacaronIcon from './BreadMacaronIcon';

it('Icons/BreadMacaronIcon', () => {
  render(<BreadMacaronIcon />);

  const el = screen.getByTitle('Bread Macaron Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
