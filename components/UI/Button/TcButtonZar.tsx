import { Button, ButtonProps } from "antd";
import { FC } from "react";

const TcButtonZar: FC<ButtonProps> = ({
	children,
	...props
}) => {
	return (
		<Button
			{...props}
			className="buttun-zar"
			style={{ borderRadius: "0 !important" }}
		>
			{children}
		</Button>
	);
};

export default TcButtonZar;
