const _ = require('lodash');

//Authors and Posts get data from JSON Arrays in the respective files.
const Language = require('../datas/language');


/* Here a simple schema is constructed without using the GraphQL query language. 
  e.g. using 'new GraphQLObjectType' to create an object type 
*/

let {
  // These are the basic GraphQL types need in this tutorial
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  // This is used to create required fileds and arguments
  // This is the class we need to create the schema
  GraphQLSchema,
} = require('graphql');


const languageTypes = new GraphQLObjectType({
  name: 'language',
  fields: () => ({
    name: { type: GraphQLString },
    der: { 
      type: GraphQLString
    }
  })
})

// // This is the Root Query
const BlogQueryRootType = new GraphQLObjectType({
  name: 'QuerySchema',
  description: 'Blog Application Schema Query Root',
  fields: () => ({
    languages: {
      type: new GraphQLList(languageTypes),
      description: 'List of all languageTypes',
      resolve: function() {
        return Language
      }
    },
  })
});



const languageTypesSchema = new GraphQLSchema({
  query: BlogQueryRootType,
  // If you need to create or updata a datasource, 
  // you use mutations. Note:
  // mutations will not be explored in this post.
});



module.exports = languageTypesSchema;