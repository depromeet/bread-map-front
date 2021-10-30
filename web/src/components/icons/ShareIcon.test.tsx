import { render, screen } from '@testing-library/react';
import ShareIcon from './ShareIcon';

it('Icons/ShareIcon', () => {
  render(<ShareIcon />);

  const el = screen.getByTitle('Share Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
