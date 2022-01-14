const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
const { Pool, Client } = require('pg')

const dburl = process.env.DATABASE_URL

const pool = new Pool({
  connectionString: dburl,
  ssl: { rejectUnauthorized: false }
});

var count = 0

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/',(req,res) => {
  pool.query('UPDATE counter SET count=count+1 where id=1')

  count = (await pool.query('SELECT count FROM counter WHERE id=1')).rows[0].count

  res.render('index',{ count: count });
});

app.listen(port, () => {
  console.log('Listening at '+port)
}, app.settings.env)
