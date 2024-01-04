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

require('dotenv').config();

app.use('/uploads', cors(), express.static('uploads'));

mongoose.connect('mongodb+srv://btlam20:SY4VdOVnVeDhoeke@storiestelling.fhfvgrl.mongodb.net/?retryWrites=true&w=majority').then(()=>console.log('DB Connected'))

app.use(cors())
app.use(cookieParser()); 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const port = process.env.PORT || 8001;

app.use('/api', Auth); 
app.use('/api', UserRoute);
app.use('/api', Voice); 
app.use('/api', Genre); 
app.use('/api', Stories); 
app.use('/api', Wishlist); 
app.use('/api', Playlist)


app.listen(port,()=>{
    console.log('Server is running on port',port)
})
