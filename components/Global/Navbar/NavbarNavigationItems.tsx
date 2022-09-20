import Link from "next/link";
import React, { FC } from "react";

interface INavbarNavigationItems {
	type: "row" | "column";
}

const NavbarNavigationItems: FC<INavbarNavigationItems> = ({
	type,
}) => {
	return (
		<nav
			aria-labelledby="primary-navigation"
			aria-label="primary-navigation"
			className=""
		>
			<ul
				className={`flex my-auto gap-4 ${
					type === "column" ? "flex-col" : "flex-row"
				}`}
			>
				<Link passHref href="">
					<a>
						<li className="cursor-pointer text-t-secondary-text-color hover:text-t-text-color">
							قوانین و مقررات
						</li>
					</a>
				</Link>
				<Link passHref href="">
					<a>
						<li className="cursor-pointer text-t-secondary-text-color hover:text-t-text-color">
							سوالات متداول
						</li>
					</a>
				</Link>
				<Link passHref href="">
					<a>
						<li className="cursor-pointer text-t-secondary-text-color hover:text-t-text-color">
							درباره ما
						</li>
					</a>
				</Link>
				<Link passHref href="">
					<a>
						<li className="cursor-pointer text-t-secondary-text-color hover:text-t-text-color">
							تماس با ما
						</li>
					</a>
				</Link>
			</ul>
		</nav>
	);
};

export default NavbarNavigationItems;
