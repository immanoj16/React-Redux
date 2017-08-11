import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

export default createStore(
    combineReducers({mathReducer, userReducer}),
    {},
    applyMiddleware(createLogger())
);
