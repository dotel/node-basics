var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

function modifyResponseBody(req, res, next) {
  console.log('hi')
  var oldSend = res.send;
  res.send = function(data){
      // arguments[0] (or `data`) contains the response body
      arguments[0] = "modified : " + arguments[0];
      oldSend.apply(res, arguments);
  }
  next();
}

// app.use(modifyResponseBody);

app.use('/', () => {console.log('hello')}, indexRouter);
app.use('/users', usersRouter);



// error handling
app.use(
  async (
    error,
    req,
    res,
    next
  ) => {
    console.log('reached here')
    if (error && typeof error === 'object') {
      // do Something with the error, eg. send something went wrong with jsons
    }
    // Do something sane with the errors
    res.status(error?.HTTPStatus || 500).send({'id': 'hello world'});
  }
);
module.exports = app;
