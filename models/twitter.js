var OAuth = require('oauth');
require('dotenv').config();

  var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.CONSUMER,
    process.env.SECRET,
    '1.0A',
    null,
    'HMAC-SHA1'
  );

  oauth.get(
      'https://api.twitter.com/1.1/trends/search.json?q=hacktiv8',
      // process.env.TOKEN,
      'your user token for this app', //test user token
      // process.env.TOKEN_USER,
      'your user secret for this app', //test user secret
      function (e, data, res){
        if (e) console.error(e);
        console.log(require('util').inspect(data));
        // done();

      });

module.exports = oauth
