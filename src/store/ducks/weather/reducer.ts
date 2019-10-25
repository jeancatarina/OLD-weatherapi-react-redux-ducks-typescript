import { Reducer } from "redux";
import { WeatherTypes } from "./types";
import Immutable from "immutable";

const initialState = Immutable.fromJS({});

export const reducer: Reducer = (state = initialState, action) => {
	switch (action.type) {
		case WeatherTypes.LOADING:
			return state.setIn([action.payload.city, "loading"], action.payload.active);
		case WeatherTypes.LOAD_DATA:
			return state.setIn(
				[
					`${action.payload.name}, ${action.payload.sys.country}`,
					"data"
				],
				action.payload
			);
		case WeatherTypes.LOAD_DATA_ERROR:
			return state.setIn(
				[action.payload.city, "loadDataHasError"],
				action.payload.hasError
			);
		default:
			return state;
	}
};
