import { render, screen } from '@testing-library/react';
import ChevronLeftIcon from './ChevronLeftIcon';

it('Icons/ChevronLeftIcon', () => {
  render(<ChevronLeftIcon />);

  const el = screen.getByTitle('Chevron Left Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
