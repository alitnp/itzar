import TcButton from "components/UI/Button/TcButton";
import UserIcon from "components/UI/Icons/UserIcon";
import React from "react";

const NavbarLoginButton = () => {
	return (
		<TcButton
			type="primary"
			icon={
				<UserIcon
					fill="var(--bg-color)"
					className="inline ml-2"
				/>
			}
			style={{ height: "2.5rem" }}
			className="text-sm font-bold"
		>
			ورود / عضویت
		</TcButton>
	);
};

export default NavbarLoginButton;
