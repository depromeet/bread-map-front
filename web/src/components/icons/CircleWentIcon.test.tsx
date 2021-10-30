import { render, screen } from '@testing-library/react';
import CircleWentIcon from './CircleWentIcon';

it('Icons/CircleWentIcon', () => {
  render(<CircleWentIcon />);

  const el = screen.getByTitle('Circle Went Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
