import * as React from "react"

const ChevronLeft: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
	<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path d="M16.5 20.5l-9-9 9-9" stroke="#222" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);

export default ChevronLeft;
