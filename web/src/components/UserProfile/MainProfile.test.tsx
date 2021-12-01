import { render, screen } from '@/utils/testUtils';
import MainProfile from './MainProfile';
import { ProfileTitle } from '.';

it('UserProfile/MainProfile', () => {
  const title: ProfileTitle = '프로필';

  render(<MainProfile pageTitle={title} setPageTitle={jest.fn()} />);

  expect(screen.getByText(title).tagName).toMatch(/^h1$/i);
});
