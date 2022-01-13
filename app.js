const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
const pg = require('pg')

const dburl = process.env.DATABASE_URL

var client
pg.connect(dburl, function(err, c) {
  client = c
});
console.log(client.query("SELECT count FROM counter"))

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
