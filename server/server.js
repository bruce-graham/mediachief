const express = require('express');
const app = express();
const dbHelpers = require('./dbhelpers.js');
const apiHelpers = require('./apihelpers.js');
const User = require('./database.js');
const path = require('path');

app.use('/', express.static(__dirname + '/'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../index.html'));
});

// app.post('/api/testUser', (req, res) => {
//   dbHelpers.createUser();
//   res.send('went through');
// });

// app.get('/api/testMovie', (req, res) => {
//   apiHelpers.getMovie();
//   res.send('perhaps we got the movie');
// });

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
