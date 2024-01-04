const express = require ('express');
const mongoose = require('mongoose');
const router = express.Router() 
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const Auth = require('./routes/auth')
const UserRoute = require('./routes/user')
const Voice = require('./routes/voice');
const Genre = require('./routes/genre');
const Stories = require('./routes/stories'); 
const Wishlist = require('./routes/wishlist'); 
const Playlist = require('./routes/playlist')
const app = express(); 
const port = process.env.PORT || 8001;

app.get('/', function(req, res) {
    res.send('hello world');
});

app.listen(port,()=>{
    console.log('Server is running on port',port)
})


