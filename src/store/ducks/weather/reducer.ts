import { Reducer } from "redux";
import { WeatherTypes } from "./types";
import Immutable from "immutable";

const initialState = Immutable.fromJS({});

export const reducer: Reducer = (state = initialState, action) => {
	switch (action.type) {
		case WeatherTypes.LOAD_DATA:
			return state.setIn([action.payload.name, "data"], action.payload);
		default:
			return state;
	}
};
