import 'core-js/modules/es7.array.includes';
import 'core-js/modules/es6.array.fill';
import 'core-js/modules/es6.string.includes';
import 'core-js/modules/es6.string.trim';
import 'core-js/modules/es7.object.values';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import withTracker from './withTracker';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Route
      component={withTracker(App, {
        /* additional attributes */
      })}
    />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
