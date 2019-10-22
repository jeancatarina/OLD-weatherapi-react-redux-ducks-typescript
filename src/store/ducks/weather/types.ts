// Action Types

export enum WeatherTypes {
	LOADING = '@weather/LOADING',
	LOAD_DATA = '@weather/LOAD_DATA'
}

export interface WeatherData {
	getIn: Function
}

export interface WeatherState {
	weather: WeatherData
}
