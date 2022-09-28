import { FC, ReactNode } from "react";

interface ITcButtonZar {
	children: ReactNode;
	classNames?: string;
}

const TcButtonZar: FC<ITcButtonZar> = ({
	children,
	classNames,
	...props
}) => {
	return (
		<button {...props} className={`button-zar ${classNames}`}>
			{children}
		</button>
	);
};

export default TcButtonZar;
