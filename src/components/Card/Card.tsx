import React, { useEffect } from "react";
import * as styles from "./styles";
import loader from "../../assets/images/loader.svg";

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

const getBody = (weatherData: WeatherData) => {
	const temperature = parseInt(weatherData.main.temp.toString(), 10),
		temperatureColor = getTemperatureColor(temperature);

	return (
		<section style={styles.sectionStyle}>
			<div style={temperatureColor}>
				{temperature}
				<div style={styles.degreeStyle}>{"º"}</div>
			</div>
		</section>
	);
};

const getHumidityPressure = (weatherData: WeatherData) => (
	<div style={styles.HumidityPressureContainerStyle}>
		<div>
			<div>{`HUMIDITY`}</div>
			<div>{`${weatherData.main.humidity}%`}</div>
		</div>
		<div>
			<div>{`PRESSURE`}</div>
			<div>{`${weatherData.main.pressure}hPa`}</div>
		</div>
	</div>
);
const getFooter = (size: number, weatherData: WeatherData) => (
	<footer style={styles.getFooterStyle(size)}>
		{size === 1 && getHumidityPressure(weatherData)}
		<div style={styles.updatedAtStyle}>{`Updated at ${weatherData.updatedAt}`}</div>
	</footer>
);

const getContent = (size: number, weatherData: WeatherData) => (
	<>
		{getBody(weatherData)}
		{getFooter(size, weatherData)}
	</>
);

const getLoading = () => (
	<div style={styles.loadingContainerStyle}>
		<img src={loader} alt="Loading..." />
	</div>
);

const Card: React.FC<Props> = (props: Props): React.ReactElement => {
	const { city, size, weatherData, fetchData } = props;

	useEffect(() => {
		fetchData(city);
	}, []);

	return (
		<div style={styles.cardStyle[size]}>
			{getHeader(city)}
			{!weatherData ? getLoading() : getContent(size, weatherData)}
		</div>
	);
};

export default Card;
