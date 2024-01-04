const express = require ('express');
const mongoose = require('mongoose');
const router = express.Router() 
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express(); 
const port = process.env.PORT || 8001;

app.use('/api', Auth); 
app.use('/api', UserRoute);
app.use('/api', Voice); 
app.use('/api', Genre); 
app.use('/api', Stories); 
app.use('/api', Wishlist); 
app.use('/api', Playlist)

app.get('/', function(req, res) {
    res.send('hello world');
});

app.listen(port,()=>{
    console.log('Server is running on port',port)
})


