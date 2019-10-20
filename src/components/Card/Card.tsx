import React from 'react';
import colors from '../../styles/colors';

const textAlignStyle = {
	display: 'flex',
	flexDirection: 'column' as const,
	justifyContent: 'center',
	textAlign: 'center' as const,
};

const cardStyle = {
	backgroundColor: colors.white,
	width: '250px',
	boxShadow: `0px 0px 3px ${colors.boxShadow}`,
};

const headerStyle = {
	...textAlignStyle,
	...{
		height: '42px',
		backgroundColor: colors.white,
		borderBottom: `1px solid ${colors.divider}`,
	},
};

const sectionStyle = {
	...textAlignStyle,
	...{
		height: '138px',
		backgroundColor: colors.white,
		textAlign: 'center' as const,
	},
};

const footerStyle = {
	...textAlignStyle,
	...{
		height: '42px',
		backgroundColor: colors.cardFooter,
		textAlign: 'center' as const,
	},
};

interface Props {
	size: number;
	city: string;
}

const Card: React.FC<Props> = (props: Props): React.ReactElement => {
	const { city } = props;

	return (
		<div style={cardStyle}>
			<header style={headerStyle}>{city}</header>
			<section style={sectionStyle}>-4º</section>
			<footer style={footerStyle}>Updated at 02:48:32 PM</footer>
		</div>
	);
};

export default Card;
