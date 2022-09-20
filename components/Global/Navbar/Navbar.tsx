import NavbarDrawer from "components/Global/Navbar/NavbarDrawer";
import NavbarLoginButton from "components/Global/Navbar/NavbarLoginButton";
import NavbarNavigation from "components/Global/Navbar/NavbarNavigation";
import NavbarSearch from "components/Global/Navbar/NavbarSearch";
import CartIcon from "components/UI/Icons/CartIcon";
import MenuIcon from "components/UI/Icons/MenuIcon";
import Image from "next/image";
import React, { FC, useState } from "react";

interface INavbar {}

const Navbar: FC<INavbar> = () => {
	//states
	const [open, setOpen] = useState<boolean>(true);

	//functions
	const onClose = () => setOpen(false);
	const handleOpen = () => setOpen(true);

	return (
		<>
			<header>
				<div className="min-h-[72px] w-full md:border-b border-t-border-color-24 flex items-center">
					<div className="flex items-center justify-between w-full my-auto gap-x-4 t-container">
						<div
							className="cursor-pointer md:hidden"
							onClick={handleOpen}
						>
							<MenuIcon />
						</div>
						<div className="flex items-center w-full gap-x-4">
							<Image
								src="/image/logo/logo-nobg.png"
								alt="itzar logo"
								width="75"
								height="36"
								objectFit="contain"
								layout="fixed"
							/>
							<div className="hidden w-full md:block max-w-[500px]">
								<NavbarSearch />
							</div>
						</div>
						<div className="flex items-center">
							<NavbarLoginButton />
							<div className="w-0 h-6 mx-4 border-l " />
							<CartIcon className="cursor-pointer" />
						</div>
					</div>
				</div>
				<div className="border-b t-container md:hidden border-t-border-color-24">
					<div className="pb-2">
						<NavbarSearch />
					</div>
				</div>
				<NavbarNavigation />
			</header>

			<NavbarDrawer onClose={onClose} open={open} />
		</>
	);
};

export default Navbar;
