import css from './scss/app.scss';

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import App from './js/App';
import store from './js/store';


const mathReducer = (state = {
    result: 1,
    lastValues: [],
}, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case "SUBTRACT":
            state = {
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
    }
    return state;
};

const userReducer = (state = {
    name: "Manoj",
    age: 22
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                name: state.username,
                age: state.age,
                name: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                name: state.username,
                age: state.age,
                age: action.payload
            };
            break;
    }
    return state;
};

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
