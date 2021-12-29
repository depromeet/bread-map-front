import { render, screen } from '@testing-library/react';
import TouchAreaDownIcon from './TouchAreaDownIcon';

it('Icons/TouchAreaDownIcon', () => {
  render(<TouchAreaDownIcon />);

  const el = screen.getByTitle('TouchAreaDown Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
