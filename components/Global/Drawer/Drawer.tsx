import { Drawer as AntDrawer } from "antd";
import DrawerBrands from "components/Global/Drawer/DrawerBrands";
import DrawerCategories from "components/Global/Drawer/DrawerCategories";
import NavbarNavigationItems from "components/Global/Navbar/NavbarNavigationItems";
import NavbarSearch from "components/Global/Navbar/NavbarSearch";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";

interface IDrawer {
	onClose: () => void;
	open: boolean;
}

const Drawer: FC<IDrawer> = ({ onClose, open }) => {
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
		<AntDrawer
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
			<div className="mt-4">
				<DrawerCategories />
				<DrawerBrands />
			</div>
			<div className="w-full h-0 my-2 border-b"></div>
			<NavbarNavigationItems type="column" />
		</AntDrawer>
	);
};

export default Drawer;
