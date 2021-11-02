import { render, screen } from '@testing-library/react';
import WishIcon from './WishIcon';

it('Icons/WishIcon', () => {
  render(<WishIcon />);

  const el = screen.getByTitle('Wish Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
