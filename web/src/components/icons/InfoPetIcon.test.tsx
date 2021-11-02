import { render, screen } from '@testing-library/react';
import InfoPetIcon from './InfoPetIcon';

it('Icons/InfoPetIcon', () => {
  render(<InfoPetIcon />);

  const el = screen.getByTitle('Info Pet Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
