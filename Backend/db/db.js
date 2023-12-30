// db.js

const mysql = require("mysql2");

const db = mysql.createConnection({
    host : 'localhost',
    user: "root",
    password: "root",
    database: "CyBerlog"
});
db.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL database:", err);
    } else {
      console.log("Connected to MySQL database");
    }
  });

const createUsersTable = `
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(45) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    img VARCHAR(255),
    CONSTRAINT unique_username UNIQUE (username),
    CONSTRAINT unique_email UNIQUE (email)
  )
`;
// Create posts table with ON DELETE CASCADE
const createPostsTableQuery = `
    CREATE TABLE IF NOT EXISTS posts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description VARCHAR(1000) NOT NULL,
        date DATE,
        img VARCHAR(255),
        uid INT NOT NULL,
        FOREIGN KEY (uid) REFERENCES users(id) ON DELETE CASCADE,
        cat VARCHAR(40)
    )
`;

db.query(createPostsTableQuery, (err) => {
    if (err) {
        console.error('Error creating posts table:', err);
    } else {
        console.log('Posts table created successfully');
    }
});

db.query(createUsersTable, (err) => {
    if (err) {
      console.error("Error creating users table:", err);
    } else {
      console.log("Users table created successfully");
    }
  });
  


module.exports = db