import { combineReducers } from 'redux';

import { reducer as weather } from './weather/weather';

export default combineReducers({
	weather,
});
