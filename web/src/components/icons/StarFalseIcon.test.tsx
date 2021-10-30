import { render, screen } from '@testing-library/react';
import StarFalseIcon from './StarFalseIcon';

it('Icons/StarFalseIcon', () => {
  render(<StarFalseIcon />);

  const el = screen.getByTitle('Star False Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
