fetch('/graphql2', {
  method: 'POST',
  headers: {
    'Content-type': 'application/graphql'
  },
  body: 'query RootQueryType { count }'
}).then(re => {
  return re.json()
}).then(re=>{
  console.log(re)
})