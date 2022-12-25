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

app.get('/api/addcount', (req, res) => {
  pool.query('UPDATE counter SET count=count+1 where id=1')
})
app.get("/api/getcount", (req, res) => {
  pool.query("SELECT count FROM counter WHERE id=1", (err, row) => {
    count = row.rows[0].count
    res.json({ count: count })
  })
});
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname,"public/index.html"))
})

app.listen(port, () => {
  console.log('Listening at '+port)
}, app.settings.env)
