import { render, screen } from '@testing-library/react';
import ChevronRightIcon from './ChevronRightIcon';

it('Icons/ChevronRightIcon', () => {
  render(<ChevronRightIcon />);

  const el = screen.getByTitle('Chevron Right Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
