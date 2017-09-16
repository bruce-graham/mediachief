const express = require('express');
const app = express();
const secret = require('./config.js');
const dbHelpers = require('./dbhelpers.js');
const apiHelpers = require('./apihelpers.js');
const User = require('./database.js');


app.post('/api/testUser', function(err, response) {
  if (err) {
    console.log('/api/testUser error', err);
  }
  dbHelpers.createUser();
  response.send('went through');
});

app.get('/api/testMovie', function(err, response) {
  if (err) {
    console.log('/api/testMovie error', err);
  }
  apiHelpers.getMovie();
  response.send('perhaps we got the movie');
})

app.listen('3000', () => {
  console.log('Server connected on port 3000');
});
