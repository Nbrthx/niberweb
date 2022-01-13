const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
const { Pool, Client } = require('pg')

const dburl = process.env.DATABASE_URL

const pool = new Pool({
  dburl,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res) 
  pool.end() 
})

const client = new Client({
  dburl,
})
client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res) 
  client.end() 
})


app.use(express.static(path.join(__dirname, 'public')))

app.get('/',(req,res) => {
  res.sendFile(__dirname+'/index.html');
  //__dirname : It will resolve to your project folder.
});

app.listen(port, () => {
  console.log('Listening at '+port)
}, app.settings.env)
