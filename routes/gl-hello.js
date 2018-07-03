/**
 * 入口文件
 * 2018年04月25日15:55:57
 * liuhui
 */
const graphqlHTTP = require('express-graphql');

const { 
  buildSchema, 
  graphql,
  GraphQLSchema,
  GraphQLInt,
  GraphQLObjectType 
} = require('graphql');


// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
const global = {
  hello: () => {
    return 'Hello world!';
  },
};

// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true,
// }));

const helloGl =  graphql(schema, '{ hello }', global);


// let schema2 = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: 'RootQueryType',
//     fields: {
//       count: {
//         type: GraphQLInt,
//         description: 'The count!',
//         resolve: async function() {
//           return await 90;
//         }
//       }
//     }
//   })
// })  
// app.post('/graphql2', (req, res) => {
//   //GraphQL executor
//   console.log(req)
//   console.log(req.body)
//   graphql(schema2, req.body)
//   .then((result) => {
//     res.send(JSON.stringify(result, null, 2));
//   })
// });



module.exports = helloGl;
