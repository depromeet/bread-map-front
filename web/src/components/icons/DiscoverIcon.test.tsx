import { render, screen } from '@testing-library/react';
import DiscoverIcon from './DiscoverIcon';

it('Icons/DiscoverIcon', () => {
  render(<DiscoverIcon />);

  const el = screen.getByTitle('Discover Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
