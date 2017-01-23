import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Landing from './Landing';
import App from './index';

if (typeof window == 'undefined') {
	global.window = {}
}

module.exports = (
  <Route path="/">
    <IndexRoute component={Landing}/>
    <Route path=":path" component={() => (<App {...window.__APP_INITIAL_STATE__} />)}></Route>
  </Route>
)
