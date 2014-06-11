var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer')

var app = express();

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/fogorsmog')

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(multer({ dest: './uploads/'}))

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var UploadRoutes = require('./routes/uploads')
app.use(UploadRoutes)

var ApiRoutes = require('./routes/api')
app.use(ApiRoutes)

module.exports = app;

