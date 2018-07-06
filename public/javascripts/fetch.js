// fetch('/languages', {
//   method: 'POST',
//   headers: {
//     'Content-type': 'application/graphql'
//   },
//   body: 'query RootQueryType { name }'
// }).then(re => {
//   return re.json()
// }).then(re=>{
//   console.log(re)
// })

const parames = {
  // query
  // variables: { dice, sides },
};

fetch('/languages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  body: JSON.stringify(parames)
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));

fetch('/commands', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  body: JSON.stringify(parames)
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));
