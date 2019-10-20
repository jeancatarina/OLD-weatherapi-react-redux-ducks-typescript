import React from 'react';
import * as styles from './styles';

interface Props {
	size: number;
	city: string;
}

const Card: React.FC<Props> = (props: Props): React.ReactElement => {
	const { city, size } = props;

	return (
		<div style={styles.cardStyle[size]}>
			<header style={styles.headerStyle}>{city}</header>
			<section style={styles.sectionStyle}>
				<div style={styles.getTemperature('Blue')}>-4º</div>
			</section>
			<footer style={styles.footerStyle}>Updated at 02:48:32 PM</footer>
		</div>
	);
};

export default Card;
