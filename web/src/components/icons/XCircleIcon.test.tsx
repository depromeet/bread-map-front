import { render, screen } from '@testing-library/react';
import XCircleFilledIcon from './XCircleFilledIcon';

it('Icons/XCircleFilledIcon', () => {
  render(<XCircleFilledIcon />);

  const el = screen.getByTitle('X Circle Filled Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
