const mariadb = require('mysql');

const conn = mariadb.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'engima_transaction_db',
  connectionLimit: 5,
});

conn.connect(function(err) {
  if (err) {
    throw err;
  }
});

module.exports = conn;
