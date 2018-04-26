/**
 * 入口文件
 * 2018年04月25日15:55:57
 * liuhui
 */
const createError = require('http-errors');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { 
  buildSchema, 
  graphql,
  GraphQLSchema,
  GraphQLInt,
  GraphQLObjectType 
} = require('graphql');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');

// 引入路由信息
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

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
// app.use('/users', usersRouter);

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!';
  },
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

// app.use('/graphql2', graphql({
//   hello
// }));


let schema2 = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      count: {
        type: GraphQLInt,
        description: 'The count!',
        resolve: async function() {
          return await 90;
        }
      }
    }
  })
})  
app.post('/graphql2', (req, res) => {
  //GraphQL executor
  console.log(req)
  console.log(req.body)
  graphql(schema2, req.body)
  .then((result) => {
    res.send(JSON.stringify(result, null, 2));
  })
});


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
