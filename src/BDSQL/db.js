'user strict';

const mysql = require('mysql');
const myconn = require('express-myconnection');

//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'nodejs_expressjs'
});

dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Conexion Exitosa!");
});

module.exports = dbConn;