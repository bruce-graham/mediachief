const axios = require('axios');

module.exports = {
  getMovie: () => {
    axios.get('http://theapache64.xyz:8080/movie_db/search?keyword=Titanic')
      .then(response => {
        console.log('found titanic');
        console.log(response);
      })
      .catch(error => {
        console.log('apihelpers error', error);
      })
  }
};