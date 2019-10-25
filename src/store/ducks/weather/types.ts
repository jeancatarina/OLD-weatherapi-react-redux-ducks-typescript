// Action Types

export enum WeatherTypes {
	LOADING = '@weather/LOADING',
	LOAD_DATA = '@weather/LOAD_DATA',
	LOAD_DATA_ERROR = '@weather/LOAD_DATA_ERROR'
}

export interface WeatherData {
	getIn: Function
}

export interface WeatherState {
	weather: WeatherData
}
