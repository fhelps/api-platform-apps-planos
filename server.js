const express = require('express')
const app = express()
const path = require('path');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
const { response } = require('express');

const port = 3000

let env = dotenv.config();

app.get('/', (req, res) => {
    
  res.sendFile(path.join(__dirname+'/src/index.html'));
  //__dirname : It will resolve to your project folder.
})

app.get('/script.js', (req, res) => {
  res.sendFile(path.join(__dirname+'/src/script.js'));
})

app.get('/app', async (request, response) => {
  
  fetch(env.parsed.URL + "/apps?pageSize=300", {
      method: 'get',
      headers: { 
        'Accept': 'application/json',
        'Sensedia-Auth': env.parsed.AUTH
      }
  })
  .then(res => res.json())
  .then(json =>{
    response.send(json)
  })
  .catch(err => console.error(err));
  
})

app.get('/plan', async (request, response) => {
  
  fetch(env.parsed.URL + "/plans?pageSize=300", {
      method: 'get',
      headers: { 
        'Accept': 'application/json',
        'Sensedia-Auth': env.parsed.AUTH
      }
  })
  .then(res => res.json())
  .then(json =>{
    response.send(json)
  })
  .catch(err => console.error(err));
  
})

app.get('/api', async (request, response) => {
  
  fetch(env.parsed.URL + "/apis", {
      method: 'get',
      headers: { 
        'Accept': 'application/json',
        'Sensedia-Auth': env.parsed.AUTH
      }
  })
  .then(res => res.json())
  .then(json =>{
    response.send(json)
  })
  .catch(err => console.error(err));
  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})