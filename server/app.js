require('dotenv').load();
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');

var routesApi = require('./api/route/index');

var app = express();

var _=require('underscore');

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use('/api', routesApi);

// Handles all routes so you do not get a not found error
app.get('*', function (request, response){
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports=app;