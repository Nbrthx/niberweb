const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000

app.get('/',(req,res) => {
  res.sendFile(__dirname+'/public/index.html');
  //__dirname : It will resolve to your project folder.
});

app.listen(port, () => {
  console.log('Listening at '+port)
}, app.settings.env)
