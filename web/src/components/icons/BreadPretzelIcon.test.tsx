import { render, screen } from '@testing-library/react';
import BreadPretzelIcon from './BreadPretzelIcon';

it('Icons/BreadPretzelIcon', () => {
  render(<BreadPretzelIcon />);

  const el = screen.getByTitle('Bread Pretzel Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
