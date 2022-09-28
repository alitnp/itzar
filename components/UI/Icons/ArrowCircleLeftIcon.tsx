import React, { FC } from "react";

interface IArrowCircleLeftIcon {
	width?: string;
	height?: string;
	fill?: string;
	className?: string;
}

const ArrowCircleLeftIcon: FC<IArrowCircleLeftIcon> = ({
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
				d="M12 23.375C6.07 23.375 1.25 18.555 1.25 12.625C1.25 6.695 6.07 1.875 12 1.875C17.93 1.875 22.75 6.695 22.75 12.625C22.75 18.555 17.93 23.375 12 23.375ZM12 3.375C6.9 3.375 2.75 7.525 2.75 12.625C2.75 17.725 6.9 21.875 12 21.875C17.1 21.875 21.25 17.725 21.25 12.625C21.25 7.525 17.1 3.375 12 3.375Z"
				fill={fill}
			/>
			<path
				d="M15.5 13.375H9.5C9.09 13.375 8.75 13.035 8.75 12.625C8.75 12.215 9.09 11.875 9.5 11.875H15.5C15.91 11.875 16.25 12.215 16.25 12.625C16.25 13.035 15.91 13.375 15.5 13.375Z"
				fill={fill}
			/>
			<path
				d="M11.5004 16.3749C11.3104 16.3749 11.1204 16.3049 10.9704 16.1549L7.97043 13.1549C7.68043 12.8649 7.68043 12.3849 7.97043 12.0949L10.9704 9.09494C11.2604 8.80494 11.7404 8.80494 12.0304 9.09494C12.3204 9.38494 12.3204 9.86494 12.0304 10.1549L9.56043 12.6249L12.0304 15.0949C12.3204 15.3849 12.3204 15.8649 12.0304 16.1549C11.8804 16.3049 11.6904 16.3749 11.5004 16.3749Z"
				fill={fill}
			/>
		</svg>
	);
};

export default ArrowCircleLeftIcon;
