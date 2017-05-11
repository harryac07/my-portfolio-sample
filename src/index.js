import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

var ReactRouter = require('react-router');
var Router= ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;

ReactDOM.render(
	<App />,
	document.getElementById('root')
);