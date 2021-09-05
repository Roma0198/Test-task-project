import { combineReducers } from 'redux';
import app from './app/reducer';

const rootReducer = combineReducers({
  appReducer: app
});

export default rootReducer;
