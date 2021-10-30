import { render, screen } from '@testing-library/react';
import NavigationIcon from './NavigationIcon';

it('Icons/NavigationIcon', () => {
  render(<NavigationIcon />);

  const el = screen.getByTitle('Navigation Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
