const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()

router.get('/',function(req,res){
  res.sendFile('index.html');
  //__dirname : It will resolve to your project folder.
});

app.use(express.static(path.join(__dirname, 'public')));

//add the router
app.use('/', router);

app.listen(1274, () => {
  console.log('Listening at 1274')
})
