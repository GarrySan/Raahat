const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = 4000;
const server = express();
const SECRET = "mfdsioanf23412*(+^#";

/*Serve the react app*/
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }

//Set up Mongoose
var mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost:27017/raahat';
mongoose.connect(mongoDB, {
    useMongoClient: true,
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error'))
db.once('open', () => {
    console.log('Database connected');
})



//////////////////////////////*/
// enable cors
var corsOptions = {
    origin: '*',
    credentials: true // <-- REQUIRED backend setting
  };
server.use('*', cors(corsOptions))
server.listen(PORT, ()=>console.log('listening at 4000'));