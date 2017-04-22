var models = require('../models');
// var Promise = require('bluebird');
var parser = require('body-parser');

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
      console.log('get for messages');
      models.messages.get(res);
      
    }, 
    post: function (req, res) {
      console.log('post for messages');
      var msg = req.body.message;
      var user = req.body.username;
      var room = req.body.roomname;

      models.messages.post(msg, room, res);


      // res.send(msg);
    } 
  },

  users: {
    get: function (req, res) {
      console.log('get for users');
      models.users.get(res);



    },
    post: function (req, res) {
      var msg = req.body.message;
      var user = req.body.username;
      var room = req.body.roomname;

      console.log('post for users with: ' + user);
      models.users.post(user, res);
    }
  },

  options: {
    option: function(req, res) {
      console.log('options from controller');
      res.header(headers);
      res.send(200, null);
    }
  }
};
