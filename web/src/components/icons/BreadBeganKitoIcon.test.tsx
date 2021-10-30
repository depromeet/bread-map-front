import { render, screen } from '@testing-library/react';
import BreadBeganKitoIcon from './BreadBeganKitoIcon';

it('Icons/BreadBeganKitoIcon', () => {
  render(<BreadBeganKitoIcon />);

  const el = screen.getByTitle('Bread Began Kito Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
