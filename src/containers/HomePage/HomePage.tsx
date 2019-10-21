import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as weatherActionCreators from '../../store/ducks/weather/actionCreators';
import HomePagePresentational from '../../components/HomePage/HomePage';
import { WeatherState } from '../../store/ducks/weather/types';

const mapStateToProps = (state: WeatherState) => {
	debugger;
	return ({
	weatherData: state.weather.weatherData,
})};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(weatherActionCreators, dispatch);

const HomePageConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
)(HomePagePresentational);

const HomePage = (props: {}) => <HomePageConnect {...props} />;

export default HomePage;
