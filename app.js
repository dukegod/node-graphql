/**
 * 入口文件
 * 2018年04月25日15:55:57
 * liuhui
 */
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');

// 引入路由信息
const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

const app = express();

// 解析grapql的请求体，作为text处理
app.use(bodyParser.text({ type: 'application/graphql' }));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(compression());
app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(indexRouter);

// catch 404 and forward to error handler
app.use((err,req, res, next) => {
  console.log(req.cookies)
  next(createError(404, err))
});
// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  // console.log(err)
  // res.locals.message = err;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  console.log(err.stack)
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
