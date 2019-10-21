import { Reducer } from 'redux';
import { WeatherTypes } from './types';

export const reducer: Reducer = (state = {}, action) => {
	switch (action.type) {
		case WeatherTypes.LOAD_DATA:
			return { ...state, [action.payload.name]: action.payload };
		default:
			return state;
	}
};
