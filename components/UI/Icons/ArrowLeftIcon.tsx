import React, { FC } from "react";

interface IArrowLeftIcon {
	width?: string;
	height?: string;
	fill?: string;
	className?: string;
}

const ArrowLeftIcon: FC<IArrowLeftIcon> = ({
	width = "24",
	height = "24",
	fill = "#2F3943",
	className,
}) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M9.57043 19.4451C9.38043 19.4451 9.19043 19.3751 9.04043 19.2251L2.97043 13.1551C2.68043 12.8651 2.68043 12.3851 2.97043 12.0951L9.04043 6.02512C9.33043 5.73512 9.81043 5.73512 10.1004 6.02512C10.3904 6.31512 10.3904 6.79512 10.1004 7.08512L4.56043 12.6251L10.1004 18.1651C10.3904 18.4551 10.3904 18.9351 10.1004 19.2251C9.96043 19.3751 9.76043 19.4451 9.57043 19.4451Z"
				fill={fill}
			/>
			<path
				d="M20.4999 13.375H3.66992C3.25992 13.375 2.91992 13.035 2.91992 12.625C2.91992 12.215 3.25992 11.875 3.66992 11.875H20.4999C20.9099 11.875 21.2499 12.215 21.2499 12.625C21.2499 13.035 20.9099 13.375 20.4999 13.375Z"
				fill={fill}
			/>
		</svg>
	);
};

export default ArrowLeftIcon;
