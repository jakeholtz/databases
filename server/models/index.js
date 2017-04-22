var db = require('../db');

// var headers = {
//   'access-control-allow-origin': '*',
//   'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'access-control-allow-headers': 'content-type, accept',
//   'access-control-max-age': 10, // Seconds.
//   'Content-Type': 'application/json'
// };


module.exports = {

  messages: {
    get: function (res) {
      var queryString = 'SELECT * from messages';

      db.connection.query(queryString, function(err, results, field) {
        if (!err) {
          console.log('Success GETTING messages from DB!');
          console.log('Results: ' + JSON.stringify(results));

          // res.header(headers);
          // res.status(200);
          res.send( JSON.stringify(results) );
        } else {
          console.log('error getting messages: ' + err);
        }
      });
    }, 

    post: function (text, roomname, res) {
      var queryString = 'INSERT INTO messages SET ?';
      
      var params = {
        id: 0,
        msg: text,
        room_id: roomname
      };
      
      db.connection.query(queryString, params, function(err, results, field) {
        if (!err) {
          console.log('Success posting messages to DB!');
          console.log('Results: ' + JSON.stringify(results));

          // res.header(headers);
          // res.status(200);
          res.send(results);
        } else {
          console.log('error posting messages: ' + err);
        }
      });
    }
  },

  users: {
    get: function (user, res) {
      var queryString = 'SELECT * from users';

      db.connection.query(queryString, function(err, results, field) {
        if (!err) {
          console.log('Success getting users from DB!');
          console.log('Results: ' + JSON.stringify(results));

          // res.header(headers);
          // res.status(200);
          res.send( JSON.stringify(results) );
        } else {
          console.log('error getting users: ' + err);
        }
      });

    },

    post: function (user, res) {
      var queryString = 'INSERT INTO users SET ?';
      var params = {
        id: 0,
        name: user
      };
      
      db.connection.query(queryString, params, function(err, results, field) {
        if (!err) {
          console.log('SUCCESS POSTING USER YEAAAHHHHHHHHHHHHHHWOW!!!!!!!!!!!!!!');
          console.log('results: ' + JSON.stringify(results));

          // res.header(headers);
          // res.status(200);
          res.send(results);
        } else {
          console.log('error posting user: ' + err);
          console.log('fields: ' + field);
        }
      });
    }
  }
};

