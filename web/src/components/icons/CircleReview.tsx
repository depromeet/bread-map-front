import * as React from "react"

const CircleReview: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
	<svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<circle cx={8} cy={8} r={8} fill="#FF6E40" />
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M9.517 4.275a1.367 1.367 0 111.933 1.933l-.506.506a.458.458 0 01-.648 0L9.01 5.43a.458.458 0 010-.648l.506-.506zM8.363 6.077a.458.458 0 00-.648 0L4.522 9.27a2.292 2.292 0 00-.603 1.065l-.305 1.22a.458.458 0 00.556.556l1.22-.305c.403-.1.771-.309 1.065-.603l3.193-3.192a.458.458 0 000-.649L8.363 6.077zM7.725 11.667c0-.253.205-.458.458-.458h3.209a.458.458 0 010 .916H8.183a.458.458 0 01-.458-.458z"
			fill="#fff"
		/>
	</svg>
);

export default CircleReview;
