import { render, screen } from '@testing-library/react';
import PhoneIcon from './PhoneIcon';

it('Icons/PhoneIcon', () => {
  render(<PhoneIcon />);

  const el = screen.getByTitle('Phone Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
