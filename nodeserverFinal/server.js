const express = require('express');
const MongoClientX = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/db');

var cors=require('cors');
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const port = 8000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({origin:true,credentials: true}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

MongoClientX.connect(db.url, (err, database) => {
  if (err) return console.log(err)
  console.log('Connection established to database !');
  require('./app/routes')(app, database);

  app.get('/', (err, res) => {
    res.send("Hogwarts School of Wizardary and Witchcraft !")
  });

  app.listen(port, () => {
    console.log('Application started on Docker: ' + port);
  });
})

// error handler
app.use(function(err, req, res, next) {
  
// set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

// render the error page
  res.status(err.status || 500);
  res.render('error');
});