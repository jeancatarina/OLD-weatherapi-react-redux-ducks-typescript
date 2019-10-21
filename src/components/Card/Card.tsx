import React, { useEffect } from "react";
import * as styles from "./styles";


interface Props {
	size: number,
	city: string,
	fetchData: Function,
	weatherData?: {
		main: {
			temp: number
		}
	}
}

const getTemperatureColor = (temp: number) => {
	if (temp === 5 || temp < 5) {
		return styles.getTemperature("Blue")
	}

	if (temp > 5 || temp < 25) {
		return styles.getTemperature("Orange")
	}

	if (temp > 25) {
		return styles.getTemperature("Red")
	}
}

const Card: React.FC<Props> = (props: Props): React.ReactElement => {
	const { city, size, weatherData, fetchData } = props;
	let temperature, temperatureColor;

	useEffect(() => {
		fetchData("London");
	}, []);

	if (!weatherData) {
		return <div/>;
	}

	temperature = parseInt(weatherData.main.temp.toString(), 10);
	temperatureColor = getTemperatureColor(temperature);

	return (
		<div style={styles.cardStyle[size]}>
			<header style={styles.headerStyle}>{city}</header>
			<section style={styles.sectionStyle}>
				<div style={temperatureColor}>{temperature}</div>
			</section>
			<footer style={styles.footerStyle}>Updated at 02:48:32 PM</footer>
		</div>
	);
};

export default Card;
