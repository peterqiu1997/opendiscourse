import React from "react";
import { render } from "react-dom";
import { Router, Route, RouterContext, match, browserHistory } from 'react-router';
import App from "./index";
import Landing from "./Landing";

require('../styles/index.scss');

const app = document.getElementById("root");

/*render( (<Router history={browserHistory}>
                    <Route path="/" component={Landing}/>
                    <Route path="/app" component={() => (<App {...window.__APP_INITIAL_STATE__} />)}/>
                  </Router>), app);*/

render( <App {...window.__APP_INITIAL_STATE__} />, app);
