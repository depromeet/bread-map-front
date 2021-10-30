import { render, screen } from '@testing-library/react';
import InfoParkingIcon from './InfoParkingIcon';

it('Icons/InfoParkingIcon', () => {
  render(<InfoParkingIcon />);

  const el = screen.getByTitle('Info Parking Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
