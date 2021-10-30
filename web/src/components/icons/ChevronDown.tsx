import * as React from "react"

const ChevronDown: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
	<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M21.53 6.47a.75.75 0 010 1.06l-9 9a.75.75 0 01-1.06 0l-9-9a.75.75 0 011.06-1.06L12 14.94l8.47-8.47a.75.75 0 011.06 0z"
			fill="#222"
		/>
	</svg>
);

export default ChevronDown;
