import NavbarNavigationItems from "components/Global/Navbar/NavbarNavigationItems";
import CategoryIcon from "components/UI/Icons/CategoryIcon";
import Link from "next/link";
import { FC } from "react";
import { separator } from "utils/helperFunctions/basicFunctions";

interface INavbarNavigation {}

const NavbarNavigation: FC<INavbarNavigation> = () => {
	return (
		<div className="hidden h-[60px] border-b border-t-border-color-24 text-sm font-bold md:flex items-center">
			<div className="flex items-center justify-between t-container">
				<div className="flex items-center">
					<div className="flex h-[60px] items-center pl-4 cursor-pointer gap-x-1 w-fit">
						<CategoryIcon width="20" height="20" />
						دسته بندی ها
					</div>
					<div className="w-0 h-6 ml-4 border-l border-t-border-color-50" />
					<NavbarNavigationItems type="row" />
				</div>
				<span className="flex text-sm font-light">
					قیمت روز طلا: هر گرم
					<b className="mx-1 font-bold text-t-primary-color">
						{separator(1440000)}
					</b>
					تومان
				</span>
			</div>
		</div>
	);
};

export default NavbarNavigation;
