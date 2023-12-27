// testConnection.js

const db  = require("./db"); // Adjust the path based on your actual directory structure

// Attempt to connect to the database
db.connect((error) => {
    if (error) {
        console.error("Error connecting to the database:", error);
    } else {
        console.log("Connected to the database!");

        // Perform any additional testing or queries here

        // Close the database connection
        db.end();
    }
});
