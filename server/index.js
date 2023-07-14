/** @format */

const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 3005;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'iamnotyvonne',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

// app.post('/create/product', (req, res) => {
//   const { id, title, category, price, image } = req.body;

//   connection.query(
//     'INSERT INTO product(id,title,category,price,image) VALUES (?,?,?,?,?)',
//     [id, title, category, price, image],
//     (error, results) => {
//       if (error) {
//         console.log('error');
//       } else {
//         console.log((results.message = 'sent !!!'));
//         res.send((results.message = 'sent !!!'));
//       }
//     }
//   );
// });

app.post('/create/product', (req, res) => {
  // const id  = req.body.id
  const title = req.body.title;
  const image = req.body.image;
  const price = req.body.price;
  const category = req.body.category;

  connection.query(
    'INSERT INTO product(title,image,price,category) VALUES (?,?,?,?)',
    [title, image, price, category],
    (error, results) => {
      if (error) {
        console.log('error');
      } else {
        res.send(results);
      }
    }
  );
});

app.delete('/prodouct/delete/:id', (req, res) => {
  const id = req.params.id;
  // console.log("the id to delete is:: ",id);
  connection.query('DELETE FROM product WHERE id =?', id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(result);
      res.json(result);
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
