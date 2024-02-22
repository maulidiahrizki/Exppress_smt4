const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'database_pemrograman_framework'
});

connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Terhubung ke database MySQL');
  }
});

module.exports = connection;
