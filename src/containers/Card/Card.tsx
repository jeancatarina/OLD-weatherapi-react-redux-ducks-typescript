import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as weatherActionCreators from "../../store/ducks/weather/actionCreators";
import CardPresentational from "../../components/Card/Card";
import { WeatherState } from "../../store/ducks/weather/types";

interface Props {
	size: number;
	city: string;
}

const mapStateToProps = (state: WeatherState, props: Props) => {
	const { city } = props,
		weatherData = state.weather.getIn([city, "data"]),
		loadDataHasError = state.weather.getIn([city, "loadDataHasError"]),
		loading = state.weather.getIn([city, "loading"]);

	return {
		weatherData: weatherData,
		loadDataHasError: loadDataHasError,
		loading: loading
	};
};

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators(weatherActionCreators, dispatch);

const CardConnect = connect(
	mapStateToProps,
	mapDispatchToProps
)(CardPresentational);

const Card = (props: Props) => <CardConnect {...props} />;

export default Card;
