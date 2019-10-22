import { Reducer } from 'redux';
import { WeatherTypes } from './types';
import Immutable from "immutable";

const initialState = Immutable.fromJS({});

const getCurrentTime = () => new Date().toLocaleString('pt-BR', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });

export const reducer: Reducer = (state = initialState, action) => {
	switch (action.type) {
		case WeatherTypes.LOAD_DATA:
			return state.setIn([action.payload.name, "data"], {
				...action.payload,
				updatedAt: getCurrentTime()
			}) ;
		default:
			return state;
	}
};
