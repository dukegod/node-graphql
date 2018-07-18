---
title: Graphgl
date: 2018-04-19
tags: [Graphgl]
---

传统的RESTFUL，客户端不能个性化的收集数据。对外输出的接口比较强依赖后端的API，可能需要不断的扩展API接口。

### Graphgl优点：

+ 拥有一套健壮`typed`语法
+ 不在多请求或者少请求数据，解决N+1请求的问题
+ 提高产品迭代
+ 客户端组建想要的数据API
+ 丰富的开源环境与社区

<!-- more -->

Graphal需要自身的缺点：

+ GraphQL缓存不容易
+ 检测和解决n+1问题
+ 鉴权问题

##### 鉴权问题

也就是身份认证与授权访问，可以借鉴`REST API`，认证通常是借由` header `处理的，其中包含一个` auth token `用于识别发出请求的用户。  
`Express` 中间件会处理这些 `header`，并将认证数据放进 `Express` 的 `request` 对象。   
像这样处理认证的中间件模块有 `Passport`、 `express-jwt(推荐)` 和 `express-session`。

##### n+1 问题 

在Web API的情况下，N+ 1问题是客户端应用程序需要调用服务器N + 1次来获取1条数据+N客户端资源，
这主要是因为收集资源没有足够的关于子资源的信息来返回给客户端。

graphql解决方案：

+ 针对一对一的关系， 在从数据库里抓取数据时，就将所需数据 join 到一张表里
+ 针对多对一或者多对多的关系，你就要用到一个叫做 [DataLoader](https://github.com/facebook/dataloader) 的工具库了

### GraphQL的核心语法定义

GraphQL 语法简洁，高效

#### Type

最主要的语法糖,可以通过指令修饰field信息

```js
type Post {
  id: String!
  title: String!
  publishedAt: DateTime!
  likes: Int! @default(value: 0)
  blog: Blog @relation(name: "Posts")
}
type Blog {
  id: String!
  name: String!
  description: String,
  posts: [Post!]! @relation(name: "Posts")
}
```

也可以继承一个多个接口

```js
type Post implements Item {
  # ...
}
```

#### Field

指定一个属性名和类型，常用的内置类型：

+ Int
+ Float
+ String
+ Boolean
+ ID

```
age: Int
```

**注意点**：

非空设置：
```
age: Int!;
```

集合标识方法：

```
names: [String!]
```

#### Enum

枚举类型
```
enum Category {
  PROGRAMMING_LANGUAGES,
  API_DESIGN
}
```

#### Interface

GraphQL中的`Interface`是字段的集合，GraphQL类型必须具有与它实现的所有接口相同的字段，并且所有接口字段必须也是相同的类型。

```
interface Item {
  title: String!
}
```

#### Schema directive

`directive`允许您将任意信息附加到`schema`元素定义。指示总是放在它们所描述的元素后面:

```
name: String! @defaultValue(value: "new blogpost")
```


###  服务器交互三驾马车Query, Mutation, Subscription

Query: 获取服务端数据 

```js
{
  user {
    name,
    title
  }

}
```

Mutation： 创建，更新，删除数据，需要在开头增加‘mutation’ 字段，它的结构和queries几乎一样。

```js
mutation {
  createUser (name : “John”, username: ”jo123”) {
    name
    username
  }
}
```

Subscription: 用于设置和保存与服务器的实时连接


### Graphqljs框架

这是一个面向前端封装了常用的graphql语法的框架结构，一下列举常用的类型，详细内容[传送门](http://graphql.cn/graphql-js/)

+ GraphQLSchema： 定义服务端功能（如query 及 mutation（可选））
+ GraphQLType 创建graphql的types标量类型
+ GraphQLObjectType  创建graphql的types对象类型，我们主要用到的方法
+ GraphQLInterfaceType


#### 常用的类库

+ [graphql-js](https://github.com/graphql/graphql-js)
+ [graphql-yoga:](https://github.com/graphcool/graphql-yoga) 这个算是个脚手架吧！

[项目参考](https://github.com/dukegod/node-graphql)

#### 更多资料

[GraphQL语法糖](https://blog.graph.cool/graphql-sdl-schema-definition-language-6755bcb9ce51)  
[ graphgl.js语法 ](http://taobaofed.org/blog/2016/03/10/graphql-in-depth/)    
[基于Electron的Graphql软件](https://github.com/skevy/graphiql-app)   
[webpack loader](https://github.com/Houfeng/gq-loader)    
[官网](http://graphql.org/)   
[中文官网](http://graphql.cn/)   
[[译]GraphQL:你需要知道的一切](https://zhuanlan.zhihu.com/p/35745644?utm_medium=social&utm_member=Mjg2ZTg1NjMwMGIxOTZkNTVhYTU5ZGVhMTI1MjcyMWQ=&utm_source=ZHShareTargetIDMore)   
[graphql](http://facebook.github.io/graphql/October2016/)     
[github-graphql接口文档](https://developer.github.com/v4/)    
[graphql-boilerplates-快速搭建应用](https://github.com/graphql-boilerplates)     
[howtographql-快速入门教程](https://www.howtographql.com/)     
[top-5-reasons-to-use-graphql](https://blog.graph.cool/top-5-reasons-to-use-graphql-b60cfa683511)     
[build-a-simple-graphql-api-server-with-express-and-nodejs](https://scotch.io/@codediger/build-a-simple-graphql-api-server-with-express-and-nodejs)   
[graphql-server-basics-the-schema](https://blog.graph.cool/graphql-server-basics-the-schema-ac5e2950214e)   
