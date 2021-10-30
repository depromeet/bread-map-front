import * as React from "react"

const CircleWentIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
	<svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<title>Circle Went Icon</title>
		<circle cx={8} cy={8} r={8} fill="#FF6E40" />
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M9.523 7.783H7.55a.247.247 0 01-.058.093l-1.56 1.559a.248.248 0 01-.35-.351l1.3-1.301H4.986C3.89 7.783 3 8.673 3 9.769v.25c0 1.097.89 1.986 1.986 1.986h5.528c1.097 0 1.986-.889 1.986-1.986v-.25c0-1.097-.89-1.986-1.986-1.986h-.289L8.573 9.436a.248.248 0 01-.352-.351l1.302-1.302z"
			fill="#fff"
		/>
		<path d="M7.694 3.255v5.002" stroke="#fff" strokeWidth={0.745} strokeLinecap="round" strokeLinejoin="round" />
		<path
			d="M7.943 5.19V3.304c.224.098.413.158.63.192.231.036.487.042.838.042.35 0 .578-.025.775-.069.294-.065.536.125.536.393v.864a.625.625 0 01-.406.583c-.225.083-.426.135-.905.135-.72 0-1.103-.068-1.468-.256z"
			fill="#fff"
			stroke="#fff"
			strokeWidth={0.388}
		/>
	</svg>
);

export default CircleWentIcon;
