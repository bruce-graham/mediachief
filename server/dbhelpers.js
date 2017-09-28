const User = require('./database.js');

module.exports = {
  createUser: () => {
  let user = new User({
      username: 'rickjames3',
      email: 'test@test.com',
      hash: 'JALIJDF8229ASLKDNFOPAIUSDF'
    });

    user.save(err => {
      console.log(err ? 'error in dbhelpers ' + err : 'saved new user');
    })
  },

};