import css from './scss/app.scss';

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import App from './js/App';
import store from './js/store';


ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
