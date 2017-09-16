const User = require('./database.js');


module.exports = {
  createUser: function () {
  let user = new User({
      username: 'rickjames',
      email: 'test@test.com',
      hash: 'JALIJDF8229ASLKDNFOPAIUSDF'
    });

    user.save(function(err) {
      if (err) {
        console.log('error in dbhelpers', err);
      } else {
        console.log('saved new user');
      }
    })
  },

};