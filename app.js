var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var counter=0;
const fss = require('fs');
var index = require('./routes/index');
var users = require('./routes/users');
var session = require('express-session');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
	secret: 'secret-key',
	resave: false,
	saveUninitialized: false
}));


app.use('/', index);
app.use('/users', users);



// function that gets updated version of audio.json
app.post('/getUpdatedTimings', function(req, res){	
//initilising types inside function to retreive new versions of the data
let rawdata = fss.readFileSync('outbox/audio.json');
let originalAudio = JSON.parse(rawdata);
res.send({message:originalAudio}); //sending the parsed json back 

})





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
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
