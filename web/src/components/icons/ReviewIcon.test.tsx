import { render, screen } from '@testing-library/react';
import ReviewIcon from './ReviewIcon';

it('Icons/ReviewIcon', () => {
  render(<ReviewIcon />);

  const el = screen.getByTitle('Review Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
