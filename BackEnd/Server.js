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

// Session info
const Session_secret = process.env.session_secret;
console.log("123:" + Session_secret)

app.use(
    session({
      key: 'userId',
      secret: Session_secret,
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: 60 * 60 * 24, // expires date for the cookie is 24h
      },
    }),
);

// Server info
const Server_port = process.env.Server_port;
const Server_host = process.env.Server_Host;

// Database info
const host = process.env.Database_host;
const user = process.env.Database_user;
const password = process.env.Database_password;
const DB_port = process.env.Database_DB_port;
const database = process.env.Database_database;

// JWT info
const Jwt_key = process.env.JWT_Key;

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
  const username = req.body.username;
  const password = req.body.password;
console.log(username, password);
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

const verifyJWT = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    res.send('You need a token');
  } else {
    jwt.verify(token, Jwt_key, (err, decoded) => {
      if (err) {
        res.json({auth: false, message: 'failed to authenticate'});
      } else {
        req.userId = decoded.id;
        next();
      }
    });
  }
};

app.get('/isUserAuth', verifyJWT, (req, res) => {
  res.send('You are authenticated');
});

// checks the user is loggedIn
app.get('/login', (req, res) => {
  if (req.session.user) {
    res.send({loggedIn: true, user: req.session.user});
  } else {
    res.send({loggedIn: false});
  }
});


app.post('/login', (req, res) => {

  const username = req.body.username;// it gets the data form the front end.
  const password = req.body.password;

  // it works
 // let username = "jooy";
 // let password = "12345678";

  db.query('SELECT * FROM User WHERE UserName = ?;',
      username,
      (err, result) => {
        if (err) {
          res.send({err: err});
        }

        if (result.length > 0) {
          console.log('Password: ' + result[0].Password);// Remember this get the data from database and it need to be right like check the name (Password) result[0].Password
          bcrypt.compare(password, result[0].Password, (error, response) => {
            if (response) {
              const id = result[0].Id; // gets the Id from the database
              const token = jwt.sign({id}, Jwt_key, {
                expiresIn: 300, // token expires in 5 minutes
              });
              req.session.user = result;

              const sql = `UPDATE User SET Token =? WHERE Id = ?`;
              db.query(
                  sql,
                  [token, id],
                  (err, result) => {
                    console.log(err);
                  },
                  console.log('inserted successfully'),
              )

              //res.send(result);
              res.json({auth: true, token: token, result: result});
            } else {
              res.json({auth: false, message: 'wrong email/password'});
            }
          });
        } else {
          res.json({auth: false, message: 'No user exists'});
        }
      },
  );
});

app.get('/', (req, res) => {
  res.send('Hello World!!');
});

app.get('/data', (req, res) => {
  let sql = `SELECT * FROM Task`;
  db.query(sql, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    console.log(results[0].Title, results[0].Description);
    res.json(results);
  });
});

app.get('/tasks', (req, res) => {
  let sql = `SELECT * FROM Task`;
  db.query(sql, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    console.log(results[0].Title, results[0].Description);
    res.json(results);
  });
});


app.post('/InsertData', (req, res) => {

  const title = req.body.title;
  const date = req.body.date;
  const description = req.body.description;
  const completed = req.body.completed;
  console.log("Inserted data: ", title, date, description, completed)
  /*
  const titele = "First Task";
  const date = "15.03.2023";
  const discription = "My first task";
  const completed = "True";
*/
  console.log("HERE IS THE DATA: " + title, date, description, completed);

    db.query('INSERT INTO Task (Title, Date, Description, Completed) VALUES (?,?,?,?)',
        [title, date, description, completed],
        (err, result) => {
          console.log(err);
        },
        console.log('inserted the data successfully'),
    );
});

app.listen(Server_port,
    () =>
        console.log('The server is listening at http://%s:%s', Server_host,
            Server_port));


