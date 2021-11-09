import { render, screen } from '@testing-library/react';
import QuoteIcon from './QuoteIcon';

it('Icons/QuoteIcon', () => {
  render(<QuoteIcon />);

  const el = screen.getByTitle('Quote Icon');

  expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
