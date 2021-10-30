import * as React from "react"

const Quete: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
		<path
			opacity={0.4}
			fillRule="evenodd"
			clipRule="evenodd"
			d="M7.273 5.816a.694.694 0 10-.621-1.243c-1.577.789-2.543 1.725-3.085 2.69a4.281 4.281 0 00-.535 2.647.7.7 0 00.022.107A2.315 2.315 0 105.05 7.53c.424-.561 1.115-1.16 2.224-1.714zM13 9.824a2.315 2.315 0 01-4.622.193.699.699 0 01-.022-.107 4.281 4.281 0 01.535-2.648c.542-.964 1.508-1.9 3.085-2.689a.694.694 0 11.62 1.243c-1.108.554-1.798 1.153-2.223 1.714A2.315 2.315 0 0113 9.824z"
			fill="#757575"
		/>
	</svg>
);

export default Quete;
