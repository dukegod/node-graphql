const _ = require('lodash');

//Authors and Posts get data from JSON Arrays in the respective files.
const Authors = require('../datas/authors');
const Posts = require('../datas/posts');
const Commands = require('../datas/commands');
const Language = require('../datas/language');


/* Here a simple schema is constructed without using the GraphQL query language. 
  e.g. using 'new GraphQLObjectType' to create an object type 
*/

let {
  // These are the basic GraphQL types need in this tutorial
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  // This is used to create required fileds and arguments
  GraphQLNonNull,
  // This is the class we need to create the schema
  GraphQLSchema,
} = require('graphql');

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: 'This represent an author',
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLString)},
    name: {type: new GraphQLNonNull(GraphQLString)},
    twitterHandle: {type: GraphQLString}
  })
});

const PostType = new GraphQLObjectType({
  name: 'Post',
  description: 'This represent a Post',
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLString)},
    title: {type: new GraphQLNonNull(GraphQLString)},
    body: {type: GraphQLString},
    author: {
      type: AuthorType,
      resolve: function(post) {
        return _.find(Authors, a => a.id == post.author_id);
      }
    }
  })
});

const languageTypes = new GraphQLObjectType({
  name: 'language',
  fields: () => ({
    name: { type: GraphQLString },
    der: { 
      type: GraphQLString,
      resolve(e){
        return 'ooo'
      }
    },
  })
})

const CommandTypes = new GraphQLObjectType({
  name: 'Commands',
  description: 'command lists',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    title : { type: new GraphQLNonNull(GraphQLString)},
    description : { type: new GraphQLNonNull(GraphQLString)},
    href : { type: new GraphQLNonNull(GraphQLString)},
    modifyOn : { type: new GraphQLNonNull(GraphQLString)},
  })
});


// This is the Root Query
const BlogQueryRootType = new GraphQLObjectType({
  name: 'QuerySchema',
  description: 'Blog Application Schema Query Root',
  fields: () => ({
    authors: {
      type: new GraphQLList(AuthorType),
      description: 'List of all Authors',
      resolve: function() {
        return Authors
      }
    },
    posts: {
      type: new GraphQLList(PostType),
      description: 'List of all Posts',
      resolve: function() {
        return Posts
      }
    },
    languages: {
      type: new GraphQLList(languageTypes),
      description: 'List of all languageTypes',
      resolve: function() {
        return Language
      }
    },
    commands: {
      type: new GraphQLList(CommandTypes),
      description: 'List of all Commands',
      resolve: function() {
        return Commands
      }
    }
  })
});

const BlogMutationRootType = new GraphQLObjectType({
  name: 'MutatioSchema',
  description: 'mutation',
  fields: ()=>({
    languages: {
      type: new GraphQLList(languageTypes),
      description: 'List of all languageTypes',
      resolve: function(name, der) {
        console.log(name, der)
        return Language
      }
    },
  })
})

// This is the schema declaration
const BlogAppSchema = new GraphQLSchema({
  query: BlogQueryRootType,
  // If you need to create or updata a datasource, 
  // you use mutations. Note:
  // mutations will not be explored in this post.
  mutation: BlogMutationRootType 
});

module.exports = BlogAppSchema;