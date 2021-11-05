import { render, screen } from '@testing-library/react';
import WentIcon from './WentIcon';

it('Icons/WentIcon', () => {
  render(<WentIcon />);

  const el = screen.getByTitle('Went Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
