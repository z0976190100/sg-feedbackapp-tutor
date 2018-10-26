import 'materialize-css/dist/css/materialize.min.css';

import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import {paths} from './assets/paths/paths';

// surveyRoutes chrome console testing:
import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store} >
        <App paths={paths}/>
    </Provider>,
    document.querySelector('#root')
);
