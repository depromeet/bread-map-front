import { render, screen } from '@testing-library/react';
import XIcon from './XIcon';

it('Icons/XIcon', () => {
  render(<XIcon />);

  const el = screen.getByTitle('X Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
