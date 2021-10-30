import { render, screen } from '@testing-library/react';
import BreadCookieIcon from './BreadCookieIcon';

it('Icons/BreadCookieIcon', () => {
	render(<BreadCookieIcon />);

	const el = screen.getByTitle('Bread Cookie Icon');
	
	expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
