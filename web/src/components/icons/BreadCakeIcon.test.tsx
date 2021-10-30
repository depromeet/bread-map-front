import { render, screen } from '@testing-library/react';
import BreadCakeIcon from './BreadCakeIcon';

it('Icons/BreadCakeIcon', () => {
	render(<BreadCakeIcon />);

	const el = screen.getByTitle('Bread Cake Icon');
	
	expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
