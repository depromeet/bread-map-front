import { render, screen } from '@testing-library/react';
import Description from './Description';

it('home/Description', () => {
  render(<Description />);

  expect(screen.getByText('pages/index.js').tagName)
    .toMatch(/^code$/i);
  expect(screen.getByText('Get started by editing').tagName)
    .toMatch(/^p$/i);
});
