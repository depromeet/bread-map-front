import { render, screen } from '@testing-library/react';
import PersonCircleIcon from './PersonCircleIcon';

it('Icons/PersonCircleIcon', () => {
  render(<PersonCircleIcon />);

  const el = screen.getByTitle('Person Circle Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
