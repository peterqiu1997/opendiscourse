import React from "react";
import { render } from "react-dom";
import { Router, browserHistory } from 'react-router';
import routes from "./routes";

require('../styles/index.scss');

const app = document.getElementById("root");

render( <Router routes={routes} history={browserHistory}></Router>, app)
