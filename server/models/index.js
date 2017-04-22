var db = require('../db');


module.exports = {

  messages: {
    get: function () {
      var queryString = 'SELECT * from messages;';

      db.connection.query(queryString, function(err, results, field) {
        if (!err) {
          console.log('Success GETTING messages from DB!');
          console.log('Results: ' + JSON.stringify(results));
        } else {
          console.log('error posting messages: ' + err);
        }
      });

      db.connection.end();
    }, 

    post: function (item) {
      var queryString = 'INSERT INTO messages SET ?';
      
      var params = {
        id: 0,
        msg: item
      };
      
      db.connection.query(queryString, params, function(err, results, field) {
        if (!err) {
          console.log('Success posting messages to DB!');
          console.log('Results: ' + JSON.stringify(results));
        } else {
          console.log('error posting messages: ' + err);
        }
      });

      db.connection.end();
    }
  },

  users: {
    get: function (user) {
      var queryString = 'SELECT * from users WHERE name = ?';

      db.connection.query(queryString, [user], function(err, results, field) {
        if (!err) {
          console.log('Success getting users from DB!');
          console.log('Results: ' + JSON.stringify(results));
        } else {
          console.log('error getting users: ' + err);
        }
      });

    },

    post: function (user) {
      var queryString = 'INSERT INTO users SET ?';
      var params = {
        id: 0,
        name: user
      };
      
      db.connection.query(queryString, params, function(err, results, field) {
        if (!err) {
          console.log('SUCCESS POSTING USER YEAAAHHHHHHHHHHHHHHWOW!!!!!!!!!!!!!!');
          console.log('results: ' + JSON.stringify(results));
        } else {
          console.log('error posting user: ' + err);
          console.log('fields: ' + field);
        }
      });
    }
  }
};

