var models = require('../models');
var Promise = require('bluebird');

//added promise thing for whatever
// var Promise = require('bluebird');
// var modelsAsync = Promise.promisify(models);

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

module.exports = {
  messages: {
    get: function (req, res) {
    // a function which handles a get request for all messages
    models.messages.get().then()
    res.header(headers);
    res.status(200)
    res.send('content from get: ' + JSON.stringify(req.body));

    }, 
    post: function (req, res) {
    // a function which handles posting a message to the database


    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {
	// a function which handles a get request for all users


    },
    post: function (req, res) {
   	// a function which handles a post request for all users


    }
  },

  options: {
  	option: function(req, res) {
  		console.log('!!!!!!!!!!!!!!!!!!!!!!!!');
  		res.header(headers);
  		res.send(200, null);
  	}
  }
};
