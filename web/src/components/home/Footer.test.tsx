import { render, screen } from '@testing-library/react';
import Footer from './Footer';

it('home/Footer', () => {
  render(<Footer />);

  const anchorElement = screen.getByText('Powered by');
  expect(anchorElement.tagName).toMatch(/^a$/i);

  screen.getByAltText('Vercel Logo');
});
