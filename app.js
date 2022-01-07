const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
  res.sendFile('index');
  //__dirname : It will resolve to your project folder.
});

app.listen(1274, () => {
  console.log('Listening at 1274')
})
