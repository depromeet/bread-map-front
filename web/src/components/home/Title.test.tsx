import { render, screen } from '@testing-library/react';
import Title from './Title';

it('home/Title', () => {
  render(<Title />);

  const headingElement = screen.getByText('Welcome to');
  expect(headingElement.tagName).toMatch(/^h1$/i);

  const anchorElement = screen.getByText('Next.js!');
  expect(anchorElement.tagName).toMatch(/^a$/i);
});
