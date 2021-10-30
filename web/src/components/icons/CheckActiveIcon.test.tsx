import { render, screen } from '@testing-library/react';
import CheckActiveIcon from './CheckActiveIcon';

it('Icons/CheckActiveIcon', () => {
  render(<CheckActiveIcon />);

  const el = screen.getByTitle('Check Active Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
