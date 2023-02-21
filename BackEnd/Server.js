const express = require('express');
const app = express();
const mysql = require('mysql');
require('dotenv').config(); // requiring dotenv

const cors = require('cors');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken');

app.use(express.json());

app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST'],
  credentials: true,
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

// Server info
const Server_port = process.env.Server_port;
const Server_host = process.env.Server_Host;

// Database info
const host = process.env.Database_host;
const user = process.env.Database_user;
const password = process.env.Database_password;
const DB_port = process.env.Database_DB_port;
const database = process.env.Database_database;

const db = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  port: DB_port,
  database: database,
});

db.connect(function(err) {
  if (err) throw err;
  console.log('Connected to MySQL!');
});

app.post('/register', (req, res) => {
  const Email = req.body.Email;
  const password = req.body.Password;

  //it worked by using bcrypt
// let username = "joy00223";
// let password = "123";

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }
    db.query(
        'INSERT INTO User (UserName, Password) VALUES (?,?)',
        [username, hash],
        (err, result) => {
          console.log(err);
        },
        console.log('inserted successfully'),
    );
  });
});

app.get('/', (req, res) => {
  res.send('Hello World!!');
});

app.get('/data', (req, res) => {
  let sql = `SELECT * FROM User`;
  db.query(sql, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    console.log(results[1].UserName, results[0].Password);
    res.json(results);
  });
});

app.listen(Server_port,
    () =>
        console.log('The server is listening at http://%s:%s', Server_host,Server_port));


