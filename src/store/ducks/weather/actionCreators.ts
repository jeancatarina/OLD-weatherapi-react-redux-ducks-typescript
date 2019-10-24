import { Dispatch } from "redux";
import { setLoading, setWeatherData } from "./actions";
import utils from "../../../utils/utils";

const getUrl = (city: string) => {
	const apiKey = "2b0c4e081db00228bb7deb568eee51c1",
		celsius = "&units=metric";

	return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}${celsius}`;
};

export const fetchData = (city: string) => (dispatch: Dispatch) => {
	dispatch(setLoading(true));

	fetch(getUrl(city), {
		headers: {
			accept: "application/json"
		}
	})
		.then((response: Response) => {
			if (!response.ok) {
				throw Error(response.statusText);
			}

			return response.json();
		})
		.then((response: Response) => {
			const data = {
				...response,
				updatedAt: utils.getCurrentTime(),
				date: new Date()
			};

			dispatch(setLoading(false));
			dispatch(setWeatherData(data));
			utils.setCacheData(city, data);
		});
};
