import { render, screen } from '@testing-library/react';
import SearchIcon from './SearchIcon';

it('Icons/SearchIcon', () => {
  render(<SearchIcon />);

  const el = screen.getByTitle('Search Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
