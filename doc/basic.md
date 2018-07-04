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

使用入口令牌(entry tokens)把客户端和响应关联起来。这与我们在REST中遵循的方法非常相似。 我们可以让restful配合graphgl一起使用。

**n+1问题：** 

但我们请求一个字段相关的信息，可能还需要从我们请求的字段中获取某一个字段作为请求体进一步请求服务端数据，最后由客户端统一拼接处理


### GraphQL的核心语法定义

GraphQL 语法定义简洁，高效

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
