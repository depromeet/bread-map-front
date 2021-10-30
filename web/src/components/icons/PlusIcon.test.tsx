import { render, screen } from '@testing-library/react';
import PlusIcon from './PlusIcon';

it('Icons/PlusIcon', () => {
  render(<PlusIcon />);

  const el = screen.getByTitle('Plus Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
