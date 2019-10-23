import React from "react";
import logo from "../../assets/images/logo.svg";
import colors from "../../styles/colors";

const headerStyle = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	height: "55px",
	position: "fixed" as const,
	top: "0",
	width: "100%",
	backgroundColor: colors.white
};

const logoStyle = {
	height: "27px"
};

const Header: React.FC = () => (
	<header style={headerStyle}>
		<img style={logoStyle} src={logo} alt="Weather Now" />
	</header>
);

export default Header;
