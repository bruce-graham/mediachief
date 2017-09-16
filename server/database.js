const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/moviemaestro', {useMongoClient: true});
const db = mongoose.connection;

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  hash: String,
  movies: []
});

const User = mongoose.model('User', userSchema);

db.on('error', console.error.bind(console, 'db connection error'));
db.once('open', function () {


  console.log('Connected to the Database');

});

module.exports = User;


