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

var count = 0

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'public'))
app.set('view engine', 'ejs')

pg.query('SELECT count FROM counter WHERE id=1', (err, res) => {
  count = count+res
  pg.end() 
})

app.get('/',(req,res) => {
  count++;
  res.render('index',{count});
  count--;
  pg.query('UPDATE counter SET count=count+1 where id=1', (err, res) => {
    pg.end() 
  })
});

app.listen(port, () => {
  console.log('Listening at '+port)
}, app.settings.env)
