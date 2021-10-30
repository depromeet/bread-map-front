import { render, screen } from '@testing-library/react';
import SettingIcon from './SettingIcon';

it('Icons/SettingIcon', () => {
	render(<SettingIcon />);

	const el = screen.getByTitle('Setting Icon');
	
	expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
