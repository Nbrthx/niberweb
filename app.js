const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
const { Pool, Client } = require('pg')

const dburl = process.env.DATABASE_URL

const pg = new Pool({
  connectionString: dburl,
  ssl: { rejectUnauthorized: false }
});
console.log(pg.query("SELECT count FROM counter"))

pg.query('SELECT NOW()', (err, res) => {
  console.log(err, res) 
  pg.end() 
})


app.use(express.static(path.join(__dirname, 'public')))

app.get('/',(req,res) => {
  res.sendFile(__dirname+'/index.html');
  //__dirname : It will resolve to your project folder.
});

app.listen(port, () => {
  console.log('Listening at '+port)
}, app.settings.env)
