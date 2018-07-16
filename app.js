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
const graphqlHTTP = require('express-graphql');

// 引入语法定义
const schema = require('./schemas/schema')


// 引入路由信息
const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

const app = express();

// 设置header信息
app.all('*', function (req, res, next) {
  console.log(req.cookies);
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:1234');
  res.header('Access-Control-Allow-Credentials', 'false')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

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


// 引入graphql图形终端
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

// catch 404 and forward to error handler
app.use((err,req, res, next) => {
  next(createError(404, err))
});
// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
