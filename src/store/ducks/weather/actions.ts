import { action } from 'typesafe-actions';
import { WeatherTypes } from './types';

export const setWeatherData = (data: {}) => action(WeatherTypes.LOAD_DATA, data);
export const setLoading = (active: boolean) => action(WeatherTypes.LOADING, active);
