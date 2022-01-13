const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
const { Pool, Client } = require('pg')

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDB,
  password: process.env.PGPASS,
  port: process.env.PGPORT
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res) 
  pool.end() 
})

const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDB,
  password: process.env.PGPASS,
  port: process.env.PGPORT
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
