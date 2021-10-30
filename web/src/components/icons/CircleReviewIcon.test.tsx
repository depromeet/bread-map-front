import { render, screen } from '@testing-library/react';
import CircleReviewIcon from './CircleReviewIcon';

it('Icons/CircleReviewIcon', () => {
  render(<CircleReviewIcon />);

  const el = screen.getByTitle('Circle Review Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
