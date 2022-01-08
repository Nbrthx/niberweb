const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res) => {
  res.sendFile(__dirname+'/index.html');
  //__dirname : It will resolve to your project folder.
});

app.listen(1274, () => {
  console.log('Listening at port 1274')
})
