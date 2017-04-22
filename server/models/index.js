var db = require('../db');


module.exports = {
  messages: {
    get: function () {
    	console.log('GET MESSAGES request sending from models to DB');
      // console.log(db.connection);
    	console.log(db.retrieveMessages());

    }, 
    post: function () {
      console.log('POST MESSAGES request sending from models to DB');
      // console.log(db.connection);
    	console.log(db.insertMessages());

    }
  },

  users: {
    get: function () {
      console.log('GET USERS request sending from models to DB');
      // console.log(db.connection);
    	console.log(db.retrieveUsers());
    },
    post: function () {
      console.log('POST USERS request sending from models to DB');
      // console.log(db.connection);
    	console.log(db.insertUsers());
    }
  }
};

