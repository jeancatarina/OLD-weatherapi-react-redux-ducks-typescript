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
		cityWithoutCountry = city.split(",")[0],
		weatherData = state.weather.getIn([cityWithoutCountry, "data"]);

	return {
		weatherData: weatherData
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
