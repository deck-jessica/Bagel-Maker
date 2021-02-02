// Set up MySQL connection to Node
var mysql = require("mysql");

var connection = mysql.createConnection(
  process.env.JAWSDB_URL ||   
    {
  host: "localhost",
  port: 3306,
  user: "root",
  password: '',
  database: "bagels_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection 
module.exports = connection;