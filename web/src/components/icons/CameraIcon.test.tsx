import { render, screen } from '@testing-library/react';
import CameraIcon from './CameraIcon';

it('Icons/CameraIcon', () => {
	render(<CameraIcon />);

	const el = screen.getByTitle('Camera Icon');
	
	expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
