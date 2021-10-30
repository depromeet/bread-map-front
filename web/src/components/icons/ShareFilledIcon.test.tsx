import { render, screen } from '@testing-library/react';
import ShareFilledIcon from './ShareFilledIcon';

it('Icons/ShareFilledIcon', () => {
  render(<ShareFilledIcon />);

  const el = screen.getByTitle('Share Filled Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
