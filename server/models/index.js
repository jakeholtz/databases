var db = require('../db');


module.exports = {
  messages: {
    get: function () {
      console.log('model');
    	console.log('getting messages from database');
    	db.retrieveMessages();

    }, // a function which produces all the messages
    post: function () {
      console.log('model');
    	console.log('posting messages to database');
    	db.insertMessages();

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      console.log('model');
    	console.log('getting users from database');
    	db.retrieveUsers();
    },
    post: function () {
      console.log('model');
    	console.log('adding(post) users from database');
    	db.insertUsers();
    }
  }
};

