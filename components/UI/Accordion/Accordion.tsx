import { DownOutlined } from "@ant-design/icons";
import ArrowSmallDownIcon from "components/UI/Icons/ArrowSmallDownIcon";
import { useState, FC, ReactNode } from "react";
import { useSelector } from "react-redux";

interface IAccordion {
	children: ReactNode;
	title?: string | ReactNode;
	isOpen?: boolean;
}

const Accordion: FC<IAccordion> = ({
	isOpen,
	title,
	children,
}) => {
	//state
	const [open, setOpen] = useState(!!isOpen);

	//functions
	const toggleOpen = () =>
		setOpen((prevState) => !prevState);

	return (
		<div className="mb-4 border rounded-md border-t-border-color-24 print:hidden">
			<div
				className="flex items-center justify-between p-2 transition-all duration-500 rounded-md cursor-pointer h-14 "
				onClick={toggleOpen}
			>
				<div>{title}</div>
				<ArrowSmallDownIcon
					className={`transition-all duration-300 ${
						open && "-scale-y-100"
					}`}
				/>
			</div>
			<div
				className={` ${
					open ? "" : "overflow-hidden"
				} transition-all duration-300 ${
					open ? "max-h-[1500px] p-2" : "max-h-0 -p-2"
				}`}
			>
				{children}
			</div>
		</div>
	);
};

export default Accordion;
