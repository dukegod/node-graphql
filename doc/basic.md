---
title: Graphgl
date: 2018-04-19
tags: [Graphgl]
---

传统的RESTFUL，客户端不能个性化的收集数据。对外输出的接口比较强依赖后端的API，可能需要不断的扩展API接口。

[5大理由](https://blog.graph.cool/top-5-reasons-to-use-graphql-b60cfa683511)你应该使用Graphgl：

+ 拥有健壮`typed`语法
+ 不在多请求或者少请求数据
+ 提高产品迭代
+ 客户端组建想要的数据API
+ 丰富的开源环境与社区

Graphal需要自身的缺点：

+ GraphQL缓存不容易
+ 检测和解决n+1问题

什么是n+1问题： 
如果你没有优化你的GraphQL查询，你可能在一次query进行多次查询。没有合适的缓存和批量处理系统，每次确定字段的时候服务器都会响应一次请求

+ 鉴权问题
使用入口令牌(entry tokens)把客户端和响应关联起来。这与我们在REST中遵循的方法非常相似。 我们可以让restful配合graphgl一起使用。

[GraphQL语法糖](https://blog.graph.cool/graphql-sdl-schema-definition-language-6755bcb9ce51)：

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
#### Field

指定一个属性名和类型

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

枚举

```
enum Category {
  PROGRAMMING_LANGUAGES,
  API_DESIGN
}
```

#### Interface

```
interface Item {
  title: String!
}
```

#### Schema directive

```
name: String! @defaultValue(value: "new blogpost")
```

#### 常用的类库

+ [graphql-js](https://github.com/graphql/graphql-js)
+ [graphql-yoga:](https://github.com/graphcool/graphql-yoga) 这个算是个脚手架吧！


#### 更多资料

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
