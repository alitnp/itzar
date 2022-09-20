import React, { FC } from "react";

interface ISearchIcon {
	width?: string;
	height?: string;
	fill?: string;
	className?: string;
}

const SearchIcon: FC<ISearchIcon> = ({
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
				d="M11.5 22.375C5.85 22.375 1.25 17.775 1.25 12.125C1.25 6.475 5.85 1.875 11.5 1.875C17.15 1.875 21.75 6.475 21.75 12.125C21.75 17.775 17.15 22.375 11.5 22.375ZM11.5 3.375C6.67 3.375 2.75 7.305 2.75 12.125C2.75 16.945 6.67 20.875 11.5 20.875C16.33 20.875 20.25 16.945 20.25 12.125C20.25 7.305 16.33 3.375 11.5 3.375Z"
				fill={fill}
			/>
			<path
				d="M21.9995 23.3749C21.8095 23.3749 21.6195 23.3049 21.4695 23.1549L19.4695 21.1549C19.1795 20.8649 19.1795 20.3849 19.4695 20.0949C19.7595 19.8049 20.2395 19.8049 20.5295 20.0949L22.5295 22.0949C22.8195 22.3849 22.8195 22.8649 22.5295 23.1549C22.3795 23.3049 22.1895 23.3749 21.9995 23.3749Z"
				fill={fill}
			/>
		</svg>
	);
};

export default SearchIcon;
