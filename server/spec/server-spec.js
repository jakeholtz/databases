/* You'll need to have MySQL running and your Node server running
 * for these tests to pass. */

var mysql = require('mysql');
var request = require('request'); // You might need to npm install the request module!
var expect = require('chai').expect;

describe('Persistent Node Chat Server', function() {
  var dbConnection;

  beforeEach(function(done) {
    dbConnection = mysql.createConnection({
      user: 'root',
      password: 'plantlife',
      database: 'chat'
    });
    dbConnection.connect();

       var tablename = 'messages'; // TODO: fill this out
       var userTable = 'users';

    /* Empty the db table before each test so that multiple tests
     * (or repeated runs of the tests) won't screw each other up: */
    dbConnection.query('truncate ' + tablename);
    dbConnection.query('truncate ' + userTable, done);
  });

  afterEach(function() {
    dbConnection.end();
  });

  it('Should insert posted messages to the DB', function(done) {
    // Post the user to the chat server.
    request({
      method: 'POST',
      uri: 'http://127.0.0.1:3000/classes/users',
      json: { username: 'Valjean' }
    }, function () {
      console.log('post user request....');
      // Post a message to the node chat server:
      request({
        method: 'POST',
        uri: 'http://127.0.0.1:3000/classes/messages',
        json: {
          username: 'Valjean',
          message: 'In mercy\'s name, three days is all I need.',
          roomname: 'Hello'
        }
      }, function () {
        console.log('post message request....');
        // Now if we look in the database, we should find the
        // posted message there.

        // TODO: You might have to change this test to get all the data from
        // your message table, since this is schema-dependent.
        var queryString = 'SELECT * FROM messages';
        var queryArgs = [];

        dbConnection.query(queryString, queryArgs, function(err, results) {
          // Should have one result:
          expect(results.length).to.equal(1);

          // TODO: If you don't have a column named text, change this test.

          expect(results[0].msg).to.equal('In mercy\'s name, three days is all I need.');

          done();
        });
      });
    });
  });

  it('Should output all messages from the DB', function(done) {
    // Let's insert a message into the db
       var queryString = 'SELECT * FROM messages';
       // var queryArgs = [];
    // TODO - The exact query string and query args to use
    // here depend on the schema you design, so I'll leave
    // them up to you. */

    request({
      method: 'POST',
      uri: 'http://127.0.0.1:3000/classes/messages',
      json: {
        username: 'John',
        message: 'Men like you can never change!',
        roomname: 'main'
      }
    });


    dbConnection.query(queryString, function(err) {
      if (err) { throw err; }

      // Now query the Node chat server and see if it returns
      // the message we just inserted:
      request('http://127.0.0.1:3000/classes/messages', function(error, response, body) {
        console.log('request from output all msg from db test.....');
        var messageLog = JSON.parse(body);
        console.log('messageLog: ' + messageLog);
        expect(messageLog[0].msg).to.equal('Men like you can never change!');
        expect(messageLog[0].room_id).to.equal('main');
        done();
      });
    });
  });

    it('Should check that new messages get added', function(done) {

    var queryString = 'SELECT * FROM messages';

    request({
      method: 'POST',
      uri: 'http://127.0.0.1:3000/classes/messages',
      json: {
        username: 'John',
        message: 'Men like you can never change!',
        roomname: 'main'
      }
    });

    request({
      method: 'POST',
      uri: 'http://127.0.0.1:3000/classes/messages',
      json: {
        username: 'Jake',
        message: 'Can I have 7 McChicken McNuggets?',
        roomname: 'Nowhere'
      }
    });



    dbConnection.query(queryString, function(err) {
      if (err) { throw err; }

      request('http://127.0.0.1:3000/classes/messages', function(error, response, body) {
        var messageLog = JSON.parse(body);
        expect(messageLog.length).to.equal(2);
        done();
      });
    });
  });

  it('Should check that username, message, and roomname are all valid fields', function(done) {

    var queryString = 'SELECT * FROM messages';

    request({
      method: 'POST',
      uri: 'http://127.0.0.1:3000/classes/messages',
      json: {
        username: 'Scallywag Snickerfritz',
        message: 'Scarglebog Dingledok ak Snipperswaggle',
        roomname: 'Marklar Scallywonk'
      }
    });

    dbConnection.query(queryString, function(err) {
      if (err) { throw err; }

      request('http://127.0.0.1:3000/classes/messages', function(error, response, body) {
        var messageLog = JSON.parse(body);
        expect(messageLog[0].msg).to.equal('Scarglebog Dingledok ak Snipperswaggle');
        expect(messageLog[0].room_id).to.equal('Marklar Scallywonk');
        done();
      });
    });
  });

});
