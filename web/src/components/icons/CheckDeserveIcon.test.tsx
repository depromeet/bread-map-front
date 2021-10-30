import { render, screen } from '@testing-library/react';
import CheckDeserveIcon from './CheckDeserveIcon';

it('Icons/CheckDeserveIcon', () => {
  render(<CheckDeserveIcon />);

  const el = screen.getByTitle('Check Deserve Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
