import SearchIcon from "components/UI/Icons/SearchIcon";
import TcInput from "components/UI/Inputs/TcInput";
import React from "react";

const NavbarSearch = () => {
	return (
		<TcInput
			size="small"
			className="w-full h-10 "
			placeholder="جستجوی محصول"
			prefix={<SearchIcon />}
		/>
	);
};

export default NavbarSearch;
