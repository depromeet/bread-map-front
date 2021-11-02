import { render, screen } from '@testing-library/react';
import MapPinIcon from './MapPinIcon';

it('Icons/MapPinIcon', () => {
  render(<MapPinIcon />);

  const el = screen.getByTitle('Map Pin Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
