import { combineReducers } from 'redux';

import { reducer as weather } from './weather/reducer';

export default combineReducers({
	weather,
});
