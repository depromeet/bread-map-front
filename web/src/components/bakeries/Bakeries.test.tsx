import { render, screen } from '@testing-library/react';
import Bakeries from './Bakeries';

it('bakeries/Bakeries', () => {
  const title = '내 주변 빵집';

  render(<Bakeries />);

  expect(screen.getByText(title).tagName).toMatch(/^h1$/i);
});
