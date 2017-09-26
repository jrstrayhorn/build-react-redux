import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
<<<<<<< HEAD
import {loadCourses} from './actions/courseActions';
=======
import { loadCourses } from './actions/courseActions'
>>>>>>> 3d019d2a6dc7a7ecb9fe244cbe7a1a7913997a9c
import './styles/styles.css';  // Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadCourses());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);