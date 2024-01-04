const express = require ('express');
const app = express(); 

app.get('/', function(req, res) {
  res.send('hello world')
})

const PORT = process.env.PORT || 5001;

app.listen(PORT,()=>{
    console.log('Server is running on port')
})
