export interface WeatherData {
	main: {
		temp: number;
		humidity: number;
		pressure: number;
	};
	updatedAt: string;
}

export interface Props {
	size: number;
	city: string;
	fetchData: Function;
	weatherData?: WeatherData;
}