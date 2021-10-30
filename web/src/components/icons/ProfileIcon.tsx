import * as React from "react"

const ProfileIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
	<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<title>Profile Icon</title>
		<g
			clipPath="url(#prefix__clip0_3:1106)"
			stroke="#222"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
		</g>
		<defs>
			<clipPath id="prefix__clip0_3:1106">
				<path fill="#fff" d="M0 0h24v24H0z" />
			</clipPath>
		</defs>
	</svg>
);

export default ProfileIcon;
