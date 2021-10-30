import { render, screen } from '@testing-library/react';
import ChevronUpIcon from './ChevronUpIcon';

it('Icons/ChevronUpIcon', () => {
	render(<ChevronUpIcon />);

	const el = screen.getByTitle('Chevron Up Icon');
	
	expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
