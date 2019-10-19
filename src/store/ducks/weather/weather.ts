import { Reducer } from 'redux';

// Action Types

export enum Types {
	LOADING = '@weather/LOADING',
	LOAD_DATA = '@weather/LOAD_DATA'
}

// Reducer

const initialState = {
	isLogged: false,
	token: null,
	user: {},
};

export const reducer: Reducer = (state = initialState, action) => {
	switch (action.type) {
		case Types.LOAD_DATA:
			return { ...state, loading: true };
		default:
			return state;
	}
};

// Action Creators

export const fetchData = () => (dispatch) => {
	dispatch(setLoading(true));

	fetch('https://openweathermap.org').then((response: Response) => {
		if (!response.ok) {
			throw Error(response.statusText);
		}

		dispatch(setLoading(false));
		return response.json();
	});
};

const setLoading = (active: boolean) => ({
	type: Types.LOADING,
	payload: active,
});
