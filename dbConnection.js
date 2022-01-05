var typeorm = require("typeorm");
const mysql = require("mysql2");

const db_connection = mysql.createConnection({
    host: "localhost", // HOST NAME
    user: "root", // USER NAME
    database: "myapp", // DATABASE NAME
    password: "", // DATABASE PASSWORD
  })
  
module.exports = db_connection;
