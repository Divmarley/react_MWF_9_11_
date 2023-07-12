/** @format */

const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const port = 3005;

 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'iamnotyvonne',
});
app.use(cors())
connection.connect((error) => {
  if (error) {
    console.log('pls check your connection');
  } else {
    console.log('connected!!!!');
  }
});




app.get('/', (req, res) => {
  
  connection.query('SELECT * FROM product', (error, results) => {
    if (error) {
      console.log('error');
    } else {
      res.send(results); 
    }
  });
});
 
app.listen(port, function () {
  console.log(`this app listening on port ${port}`);
});

// npx nodemon index.js
// or
// npx nodemon index

// http://localhost:3005/

// npm install mysql
// or
// npm i mysql
