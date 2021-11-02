import { render, screen } from '@testing-library/react';
import StarIcon from './StarIcon';

it('Icons/StarIcon', () => {
  render(<StarIcon />);

  const el = screen.getByTitle('Star Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
