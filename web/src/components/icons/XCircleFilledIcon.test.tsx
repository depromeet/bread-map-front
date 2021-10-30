import { render, screen } from '@testing-library/react';
import XCircleIcon from './XCircleIcon';

it('Icons/XCircleIcon', () => {
	render(<XCircleIcon />);

	const el = screen.getByTitle('X Circle Icon');
	
	expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});