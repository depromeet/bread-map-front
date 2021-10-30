import * as React from "react"

const XCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
	<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<title>X Circle Icon</title>
		<path
			d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM16 8l-8 8M8 8l8 8"
			stroke="#E0E0E0"
			strokeWidth={1.25}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export default XCircleIcon;
