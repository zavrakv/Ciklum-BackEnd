const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');
const cors = require('cors');

const env = process.env.NODE_ENV;
const config = require('./config/config.json')[env];

const index = require('./routes/index');
const servers = require('./routes/servers');
const farms = require('./routes/farms');
const endpoints = require('./routes/endpoints');

const app = express();

require('./database/database');

/**
 * Setting up CORS
 */

const corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  exposedHeaders: ['Authorization'],
};

app.use(cors(corsOptions));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.all('/api/farms/*', farms);
app.all('/api/servers/*', servers);

app.use('/endpoints/*', function(req, res, next) {
  
  const ip = req.ip ||
    req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
  
  console.log(req.ip);
  
  config.IP_WHITE_LIST.forEach((addr) => {
    ip !== addr ?
      res.end() :
      next()
  });

});


app.all('/endpoints/*', endpoints);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
