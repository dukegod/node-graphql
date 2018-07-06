const { 
  buildSchema, 
  graphql,
  GraphQLSchema,
  GraphQLInt,
  GraphQLObjectType 
} = require('graphql');

const schema = require('../schemas/schema-front.js')

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
app.post('/languages', (req, res) => {
  //GraphQL executor
  console.log(req)
  console.log(req.body)
  graphql(schema, req.body)
  .then((result) => {
    res.send(JSON.stringify(result, null, 2));
  })
});