import { render, screen } from '@testing-library/react';
import BreadCroissantIcon from './BreadCroissantIcon';

it('Icons/BreadCroissantIcon', () => {
  render(<BreadCroissantIcon />);

  const el = screen.getByTitle('Bread Croissant Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
