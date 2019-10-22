import React, { useEffect } from "react";
import * as styles from "./styles";

interface WeatherData {
	main: {
		temp: number;
		humidity: number;
		pressure: number;
	};
	updatedAt: string;
}

interface Props {
	size: number;
	city: string;
	fetchData: Function;
	weatherData?: WeatherData;
}

const getTemperatureColor = (temp: number) => {
	if (temp === 5 || temp < 5) {
		return styles.getTemperature("Blue");
	}

	if (temp > 5 || temp < 25) {
		return styles.getTemperature("Orange");
	}

	if (temp > 25) {
		return styles.getTemperature("Red");
	}
};

const getHeader = (city: string) => (
	<header style={styles.headerStyle}>{city}</header>
);

const getBody = (temperatureColor: object | undefined, temperature: number) => (
	<section style={styles.sectionStyle}>
		<div style={temperatureColor}>{temperature}<div style={styles.degreeStyle}>{"º"}</div></div>
	</section>
);

const getHumidityPressure = (weatherData: WeatherData) => (
	<>
		<div>{`HUMIDITY`}</div>
		<div>{`${weatherData.main.humidity}%`}</div>
		<div>{`PRESSURE`}</div>
		<div>{`${weatherData.main.pressure}hPa`}</div>
	</>
);
const getFooter = (size: number, weatherData: WeatherData) => (
	<footer style={styles.getFooterStyle(size)}>
		{size === 1 && getHumidityPressure(weatherData)}
		<div>{`Updated at ${weatherData.updatedAt}`}</div>
	</footer>
);

const Card: React.FC<Props> = (props: Props): React.ReactElement => {
	const { city, size, weatherData, fetchData } = props;
	let temperature, temperatureColor;

	useEffect(() => {
		fetchData(city);
	}, []);

	if (!weatherData) {
		return <div />;
	}

	temperature = parseInt(weatherData.main.temp.toString(), 10);
	temperatureColor = getTemperatureColor(temperature);

	return (
		<div style={styles.cardStyle[size]}>
			{getHeader(city)}
			{getBody(temperatureColor, temperature)}
			{getFooter(size, weatherData)}
		</div>
	);
};

export default Card;
