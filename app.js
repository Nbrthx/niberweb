const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
const { Pool } = require('pg')
const pool = new Pool({
  user: secrets.PGUSER,
  host: secrets.PGHOST,
  database: secrets.PGDB,
  password: secrets.PGPASS,
  port: secrets.PGPORT
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res) 
  pool.end() 
})

app.use(express.static(path.join(__dirname, 'public')))

app.get('/',(req,res) => {
  res.sendFile(__dirname+'/index.html');
  //__dirname : It will resolve to your project folder.
});

app.listen(port, () => {
  console.log('Listening at '+port)
}, app.settings.env)
