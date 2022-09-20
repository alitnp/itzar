import React, { FC } from "react";

interface IMenuIcon {
	width?: string;
	height?: string;
	fill?: string;
	className?: string;
}

const MenuIcon: FC<IMenuIcon> = ({
	width = "24",
	height = "25",
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
				d="M21 8.375H3C2.59 8.375 2.25 8.035 2.25 7.625C2.25 7.215 2.59 6.875 3 6.875H21C21.41 6.875 21.75 7.215 21.75 7.625C21.75 8.035 21.41 8.375 21 8.375Z"
				fill={fill}
			/>
			<path
				d="M21 13.375H3C2.59 13.375 2.25 13.035 2.25 12.625C2.25 12.215 2.59 11.875 3 11.875H21C21.41 11.875 21.75 12.215 21.75 12.625C21.75 13.035 21.41 13.375 21 13.375Z"
				fill={fill}
			/>
			<path
				d="M21 18.375H3C2.59 18.375 2.25 18.035 2.25 17.625C2.25 17.215 2.59 16.875 3 16.875H21C21.41 16.875 21.75 17.215 21.75 17.625C21.75 18.035 21.41 18.375 21 18.375Z"
				fill={fill}
			/>
		</svg>
	);
};

export default MenuIcon;
