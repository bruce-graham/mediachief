const axios = require('axios');

module.exports = {
  getMovie: function () {
    axios.get('http://theapache64.xyz:8080/movie_db/search?keyword=Titanic')
      .then(function(response) {
        console.log('found titanic');
        console.log(response);
      })
      .catch(function(error) {
        console.log('apihelpers error', error);
      })
  }
};