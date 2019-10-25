import { Dispatch } from "redux";
import * as actions from "./actions";
import utils from "../../../utils/utils";
import api from "../../../services/api";
import { AxiosResponse } from "axios";

const getUrl = (city: string) => {
	const apiKey = "2b0c4e081db00228bb7deb568eee51c1",
		celsius = "&units=metric";

	return `/data/2.5/weather?q=${city}&appid=${apiKey}${celsius}`;
};

export const fetchData = (city: string) => (dispatch: Dispatch) => {
	dispatch(actions.setLoading({ city, active: true }));

	api.get(getUrl(city))
		.then((response: AxiosResponse) => {
			const data = {
				...response.data,
				updatedAt: utils.getCurrentTime(),
				date: new Date()
			};

			dispatch(actions.setLoading({ city, active: false }));
			dispatch(
				actions.setloadDataHasError({ hasError: false, city: city })
			);
			dispatch(actions.setWeatherData(data));
			utils.setCacheData(city, data);
		})
		.catch(error => {
			dispatch(actions.setLoading({ city, active: false }));
			dispatch(
				actions.setloadDataHasError({ hasError: true, city: city })
			);
		});
};
