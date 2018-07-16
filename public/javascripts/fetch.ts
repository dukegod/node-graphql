import domain from './config';
import { url } from 'inspector';

console.log(domain);

interface paramesType {
  url: string;
  query?: any;
  variables?: string;
}

async function GetData(params: paramesType) {
  const data = await fetch( domain + params.url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({})
  })
    .then(re => re.json())
    .then(re => re.data);
  return data;
}




GetData({url: '/languages', query: {}, })
  .then(re => {
    console.log(re.languages);
    const lis = re.languages.map((v, key) => {
      let str = '';
      str += `<li>${v.name} 语言</li>`;
      return str;
    });
    const uls = `<ul>${lis} </ul>`;
    document.getElementById('Idcontent').innerHTML = '';
    document.getElementById('Idcontent').innerHTML = uls;
  })



document.getElementById('getLang').addEventListener('click', ()=>{
  GetData({url: '/languages', query: '{languages { name }}', })
    .then(re => {
      console.log(re.languages);
      const lis = re.languages.map((v, key) => {
        let str = '';
        str += `<li>${v.name} 语言</li>`;
        return str;
      });
      const uls = `<ul>${lis} </ul>`;
      document.getElementById('Idcontent').innerHTML = '';
      document.getElementById('Idcontent').innerHTML = uls;
    })
})

document.getElementById('getCommand').addEventListener('click', ()=>{
  GetData({url: '/commands', query: {}, }).then( re => {
    console.log(re);
    const lis = re.commands.map((v, key) => {
      let str = '';
      str += `<li>${v.id}:${v.title}</li>`;
      return str;
    });
    const uls = `<ul>${lis} </ul>`;
    document.getElementById('Idcontent').innerHTML = '';
    document.getElementById('Idcontent').innerHTML = uls;
  })
})

