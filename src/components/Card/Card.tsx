import React, { useEffect } from "react";
import * as styles from "./styles";
import images from "../../assets/images/images";
import { Props, WeatherData } from "./interfaces";

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
		<div style={styles.humidityContainerStyle}>
			<div style={styles.footerTitleStyle}>{`HUMIDITY`}</div>
			<div style={styles.footerSubtitleContainer}>
				<div style={styles.footerSubtitleStyle}>
					{weatherData.main.humidity}
				</div>
				<div style={styles.measureStyle}>{"%"}</div>
			</div>
		</div>
		<div>
			<div style={styles.footerTitleStyle}>{`PRESSURE`}</div>
			<div style={styles.footerSubtitleContainer}>
				<div style={styles.footerSubtitleStyle}>
					{weatherData.main.pressure}
				</div>
				<div style={styles.measureStyle}>{"hPa"}</div>
			</div>
		</div>
	</div>
);
const getFooter = (size: number, weatherData: WeatherData) => (
	<footer style={styles.getFooterStyle(size)}>
		{size === 1 && getHumidityPressure(weatherData)}
		<div
			style={styles.updatedAtStyle}
		>{`Updated at ${weatherData.updatedAt}`}</div>
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
		<img src={images.loader} alt="Loading..." />
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
