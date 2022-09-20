import NavbarLoginButton from "components/Global/Navbar/NavbarLoginButton";
import NavbarSearch from "components/Global/Navbar/NavbarSearch";
import CartIcon from "components/UI/Icons/CartIcon";
import Image from "next/image";
import React, { FC } from "react";

interface INavbar {}

const Navbar: FC<INavbar> = () => {
	return (
		<header>
			<div className="h-[72px] w-full border-b border-t-border-color-24 flex items-center">
				<div className="flex items-center justify-between w-full t-container">
					<div className="flex items-center w-full gap-x-4">
						<Image
							src="/image/logo/logo-nobg.png"
							alt="itzar logo"
							width="75"
							height="36"
							objectFit="contain"
							layout="fixed"
						/>
						<NavbarSearch />
					</div>
					<div className="flex items-center">
						<NavbarLoginButton />
						<div className="w-0 h-6 mx-4 border-l " />
						<CartIcon className="cursor-pointer" />
					</div>
				</div>
			</div>
			<div>
				<nav
					aria-labelledby="primary-navigation"
					aria-label="primary-navigation"
				></nav>
			</div>
		</header>
	);
};

export default Navbar;
