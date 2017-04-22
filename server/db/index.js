var mysql = require('mysql');
// var Promise = require('bluebird');
// var fs = require('fs');
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'plantlife',
  database: 'chat'
});

connection.connect((err) => {
 if (err) {
   console.log('error connecting to database');
 } else {
   console.log('connected to database...');
 }
});


// var queryMessages = connection.query('SELECT * from messages', function(err, results, fields) {
//  if (!err) {
//    console.log('get message request success!');
//    // console.log('results queryMessages: ' + JSON.stringify(results));
//    // console.log('fields: ' + JSON.stringify(fields));
  
//  } else {
//    console.log('error while retrieving from messages' + err);
//  }
// });


// var insertMessages = connection.query('INSERT into messages (id, msg) VALUES (0, "!!!!!!!!!!!!hello!!!!!!!!!!!!")', function(err, results, fields) {
//  if (!err) {
//    console.log('post message request successfully!');
//    // console.log('results insertMsg: ' + JSON.stringify(results));
//    // console.log('fields insertMsg: ' + JSON.stringify(fields));
//  } else {
//    console.log('error while performing insert into messages ' + err);
//  }
// });

// var queryUsers = connection.query('SELECT * from users', function(err, results, fields) {
//  if (!err) {
//    console.log('get user request success!');
//    // console.log('results userQuery: ' + JSON.stringify(results));
//    // console.log('fields userQuery: ' + JSON.stringify(fields));
//  } else {
//    console.log('error while retrieving from users' + err);
//  }
// });

// var insertUsers = connection.query('INSERT into users (id, name) VALUES (0, "john")', function(err, results, fields) {
//  if (!err) {
//    console.log('post user request successfully!');
//    // console.log('results insertUser: ' + JSON.stringify(results));
//    // console.log('fields insertUser: ' + JSON.stringify(fields));
//  } else {
//    console.log('error while inserting into users' + err);
//  }
// });


// connection.end();

// module.exports.retrieveMessages = queryMessages;
// module.exports.retrieveUsers = queryUsers;
// module.exports.insertMessages = insertMessages;
// module.exports.insertUsers = insertUsers;


module.exports.connection = connection;










