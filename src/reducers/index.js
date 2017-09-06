import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import houseListing from './HouseListing';

export default combineReducers({
  routing: routerReducer,
  houseListing,
});
