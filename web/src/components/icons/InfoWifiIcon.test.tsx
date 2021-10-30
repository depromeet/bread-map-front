import { render, screen } from '@testing-library/react';
import InfoWifiIcon from './InfoWifiIcon';

it('Icons/InfoWifiIcon', () => {
	render(<InfoWifiIcon />);

	const el = screen.getByTitle('Info Wifi Icon');
	
	expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
