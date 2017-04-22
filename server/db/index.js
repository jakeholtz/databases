var mysql = require('mysql');
// var Promise = require('bluebird');
var fs = require('fs');
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


var queryMessages = connection.query('SELECT * from messages', function(err, results, fields) {
	if (!err) {
		console.log('message query success!');
		console.log('results: \n' + JSON.stringify(results));
	
	} else {
		console.log('error while retrieving from messages' + err);
	}
});


var queryUsers = connection.query('SELECT * from users', function(err, results, fields) {
	if (!err) {
		console.log('users query success!');
		console.log('results: ' + JSON.stringify(results));
	} else {
		console.log('error while retrieving from users' + err);
	}
});

var insertMessages = connection.query('INSERT into messages  (id, msg, room_id, created, user_id) VALUES (0, "hello", 0, 100, 0)', function(err, results, fields) {
	if (!err) {
		console.log('message inserted successfully!');
		console.log('results: ' + JSON.stringify(results));
	} else {
		console.log('error while performing insert into messages ' + err);
	}
});

var insertUsers = connection.query('INSERT into users  (id, name) VALUES (0, "john")', function(err, results, fields) {
	if (!err) {
		console.log('user inserted successfully!');
		console.log('results: ' + JSON.stringify(results));
	} else {
		console.log('error while inserting into users' + err);
	}
});


connection.end();

module.exports.retrieveMessages = queryMessages;
module.exports.retrieveUsers = queryUsers;
module.exports.insertMessages = insertMessages;
module.exports.insertUsers = insertUsers;










