import { action } from 'typesafe-actions';
import { WeatherTypes } from './types';

export const setWeatherData = (data: {}) => action(WeatherTypes.LOAD_DATA, data);
export const setLoading = (active: object) => action(WeatherTypes.LOADING, active);
export const setloadDataHasError = (data: object) => action(WeatherTypes.LOAD_DATA_ERROR, data);
