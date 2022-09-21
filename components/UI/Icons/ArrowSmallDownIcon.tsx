import React, { FC } from "react";

interface IArrowSmallDownIcon {
	width?: string;
	height?: string;
	fill?: string;
	className?: string;
}

const ArrowSmallDownIcon: FC<IArrowSmallDownIcon> = ({
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
				d="M11.9995 17.4249C11.2995 17.4249 10.5995 17.1549 10.0695 16.6249L3.54953 10.1049C3.25953 9.81489 3.25953 9.33489 3.54953 9.04489C3.83953 8.75489 4.31953 8.75489 4.60953 9.04489L11.1295 15.5649C11.6095 16.0449 12.3895 16.0449 12.8695 15.5649L19.3895 9.04489C19.6795 8.75489 20.1595 8.75489 20.4495 9.04489C20.7395 9.33489 20.7395 9.81489 20.4495 10.1049L13.9295 16.6249C13.3995 17.1549 12.6995 17.4249 11.9995 17.4249Z"
				fill={fill}
			/>
		</svg>
	);
};

export default ArrowSmallDownIcon;
