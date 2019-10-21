// Action Types

export enum WeatherTypes {
	LOADING = '@weather/LOADING',
	LOAD_DATA = '@weather/LOAD_DATA'
}

export interface WeatherData {
	weatherData?: {
		main: {
			temp: number
		}
	}
}

export interface WeatherState {
	weather: WeatherData
}
