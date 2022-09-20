import { Drawer } from "antd";
import NavbarNavigationItems from "components/Global/Navbar/NavbarNavigationItems";
import NavbarSearch from "components/Global/Navbar/NavbarSearch";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";

interface INavbarDrawer {
	onClose: () => void;
	open: boolean;
}

const NavbarDrawer: FC<INavbarDrawer> = ({
	onClose,
	open,
}) => {
	//states
	const [showDrawer, setShowDrawer] =
		useState<boolean>(false);

	//hooks
	const { isReady } = useRouter();

	//effect
	useEffect(() => {
		isReady && setShowDrawer(true);
	}, [isReady]);

	if (!showDrawer) return null;

	return (
		<Drawer
			title={
				<p className="relative flex items-center justify-center my-auto text-2xl font-semibold top-1">
					IT ZAR
				</p>
			}
			placement="right"
			onClose={onClose}
			open={open}
		>
			<NavbarSearch />
			<div className="w-full h-0 my-2 border-b"></div>
			<NavbarNavigationItems type="column" />
		</Drawer>
	);
};

export default NavbarDrawer;
