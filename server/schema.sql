CREATE DATABASE chat;
USE chat;


CREATE TABLE rooms (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  rm_name VARCHAR(50),
  PRIMARY KEY(id)
);


CREATE TABLE users (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  name VARCHAR(32),
  PRIMARY KEY(id)
);


CREATE TABLE messages (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  msg VARCHAR(255), 
  room_id MEDIUMINT,
  created MEDIUMINT, 
  user_id MEDIUMINT,
  PRIMARY KEY(id),
  FOREIGN KEY(room_id) REFERENCES rooms(id),
  FOREIGN KEY(user_id) REFERENCES users(id) 
);



/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

