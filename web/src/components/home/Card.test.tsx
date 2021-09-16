import { render, screen } from '@testing-library/react';
import Card from './Card';

it('home/Card', () => {
  const testTitle = 'test title';
  const testBody = 'test body';

  render(
    <Card
      href={''}
      title={testTitle}
      body={testBody}
    />
  );

  expect(screen.getByText(testTitle).tagName).toMatch(/^h2$/i);
  expect(screen.getByText(testBody).tagName).toMatch(/^p$/i);
  expect(screen.getByText(testTitle).closest('a')).toHaveAttribute('href', '');
});
