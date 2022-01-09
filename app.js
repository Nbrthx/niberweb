const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res) => {
  res.sendFile('index.html');
  //__dirname : It will resolve to your project folder.
});

app.listen(port, () => {
  console.log('Listening at '+port)
}, app.settings.env)
