import { render, screen } from '@/utils/testUtils';
import Settings from './Settings';
import { ProfileTitle } from '.';

it('UserProfile/Settings', () => {
  const title: ProfileTitle = '설정';

  render(<Settings pageTitle={title} setPageTitle={jest.fn()} />);

  expect(screen.getByText(title).tagName).toMatch(/^h1$/i);
});
