import { render, screen } from '@testing-library/react';
import TouchAreaUpIcon from './TouchAreaUpIcon';

it('Icons/TouchAreaUpIcon', () => {
  render(<TouchAreaUpIcon />);

  const el = screen.getByTitle('TouchAreaUp Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
