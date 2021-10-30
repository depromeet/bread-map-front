import { render, screen } from '@testing-library/react';
import ChevronDownIcon from './ChevronDownIcon';

it('Icons/ChevronDownIcon', () => {
	render(<ChevronDownIcon />);

	const el = screen.getByTitle('Chevron Down Icon');
	
	expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
