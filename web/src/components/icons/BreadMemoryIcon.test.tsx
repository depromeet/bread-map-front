import { render, screen } from '@testing-library/react';
import BreadMemoryIcon from './BreadMemoryIcon';

it('Icons/BreadMemoryIcon', () => {
	render(<BreadMemoryIcon />);

	const el = screen.getByTitle('Bread Memory Icon');
	
	expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
