import * as React from "react"

const HomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
	<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<title>Home Icon</title>
		<g
			clipPath="url(#prefix__clip0_3:1123)"
			stroke="#222"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M12 2L3 9v11a2 2 0 002 2h14a2 2 0 002-2V9l-9-7z" />
			<path d="M9 22V12h6v10" />
		</g>
		<defs>
			<clipPath id="prefix__clip0_3:1123">
				<path fill="#fff" d="M0 0h24v24H0z" />
			</clipPath>
		</defs>
	</svg>
);

export default HomeIcon;
