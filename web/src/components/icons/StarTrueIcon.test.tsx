import { render, screen } from '@testing-library/react';
import StarTrueIcon from './StarTrueIcon';

it('Icons/StarTrueIcon', () => {
	render(<StarTrueIcon />);

	const el = screen.getByTitle('Star True Icon');
	
	expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
