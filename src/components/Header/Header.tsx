import React from 'react';
import logo from '../../assets/images/logo.svg';

const headerStyle = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	height: '55px',
};

const logoStyle = {
	height: '27px',
};

const Header: React.FC = () => (
	<header style={headerStyle}>
		<img style={logoStyle} src={logo} alt="Weather Now" />
	</header>
);

export default Header;
