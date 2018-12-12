var express = require('express');
var router = express.Router();
var http = require('http');
var ObjectID = require('mongodb').ObjectID;   //student/id

/* GET Gryffindor. */
router.get('/Gryffindor', function(req, res) {
  var db = req.db;
  var collection = db.get('Gryffindor');
  res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
    
  collection.find({},{},function(e,docs){
    res.json(docs);
  });
});
/* GET Gryfindor ID */
router.get('/Gryffindor/:id', function(req, res) {
  var db = req.db;
const id = req.params.id;
    const details = { '_id': new ObjectID(id) }
    db.collection('Gryffindor').findOne(details, (err, item) => {
      res.header("Access-Control-Allow-Origin","*")
      res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(item)
      }
    });
  });
/* GET Hufflepuff. */
router.get('/Hufflepuff', function(req, res) {
  var db = req.db;
  var collection = db.get('Hufflepuff');

  res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
    
  collection.find({},{},function(e,docs){
    res.json(docs);
  });
});
/* GET Hufflepuff ID */
router.get('/Hufflepuff/:id', function(req, res) {
  var db = req.db;
const id = req.params.id;
    const details = { '_id': new ObjectID(id) }
    db.collection('Hufflepuff').findOne(details, (err, item) => {
      res.header("Access-Control-Allow-Origin","*")
      res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(item)
      }
    });
  });
/* GET Ravenclaw. */
router.get('/Ravenclaw', function(req, res) {
  var db = req.db;
  var collection = db.get('Ravenclaw');
  res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
    
  collection.find({},{},function(e,docs){
    res.json(docs);
  });
});
/* GET Ravenclaw ID */
router.get('/Ravenclaw/:id', function(req, res) {
  var db = req.db;
const id = req.params.id;
    const details = { '_id': new ObjectID(id) }
    db.collection('Ravenclaw').findOne(details, (err, item) => {
      res.header("Access-Control-Allow-Origin","*")
      res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(item)
      }
    });
  });
/* GET Slytherin. */
router.get('/Slytherin', function(req, res) {
  var db = req.db;
  var collection = db.get('Slytherin');

  res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
    
  collection.find({},{},function(e,docs){
    res.json(docs);
  });
});
/* GET Slytherin ID */
router.get('/Slytherin/:id', function(req, res) {
  var db = req.db;
const id = req.params.id;
    const details = { '_id': new ObjectID(id) }
    db.collection('Slytherin').findOne(details, (err, item) => {
      res.header("Access-Control-Allow-Origin","*")
      res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(item)
      }
    });
  });

/* POST add to Gryffindor. */
router.post('/Gryffindor', function(req, res) {
  var db = req.db;
  var collection = db.get('Gryffindor');


  res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
    
  collection.insert(req.body, function(err, result){
    res.send(
      (err === null) ? { msg: '' } : { msg: err }
    );
  });
});
/* POST add to Hufflepuff. */
router.post('/Hufflepuff', function(req, res) {
  var db = req.db;
  var collection = db.get('Hufflepuff');

  res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
    
  collection.insert(req.body, function(err, result){
    res.send(
      (err === null) ? { msg: '' } : { msg: err }
    );
  });
});
/* POST add to Ravenclaw. */
router.post('/Ravenclaw', function(req, res) {
  var db = req.db;
  var collection = db.get('Ravenclaw');
  res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
    
  collection.insert(req.body, function(err, result){
    res.send(
      (err === null) ? { msg: '' } : { msg: err }
    );
  });
});
/* POST add to Slytherin. */
router.post('/Slytherin', function(req, res) {
  var db = req.db;
  var collection = db.get('Slytherin');

  res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
    
  collection.insert(req.body, function(err, result){
    res.send(
      (err === null) ? { msg: '' } : { msg: err }
    );
  });
});


/* DELETE to deleteGryffindor. */
router.delete('/Gryffindor/:id', function(req, res) {
  var db = req.db;
  var collection = db.get('Gryffindor');
  var userToDelete = req.params.id;

  res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
    
  collection.remove({ '_id' : userToDelete }, function(err) {
    res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
  });
});
/* DELETE to deleteHufflepuff. */
router.delete('/Hufflepuff/:id', function(req, res) {
  var db = req.db;
  var collection = db.get('Hufflepuff');
  res.header("Access-Control-Allow-Origin","*")
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
  
  var userToDelete = req.params.id;
  collection.remove({ '_id' : userToDelete }, function(err) {
    res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
  });
});
/* DELETE to deleteRavenclaw. */
router.delete('/Ravenclaw/:id', function(req, res) {
  var db = req.db;
  var collection = db.get('Ravenclaw');
  
  var userToDelete = req.params.id;
  collection.remove({ '_id' : userToDelete }, function(err) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
      
    res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
  });
});
/* DELETE to deleteSlytherin. */
router.delete('/Slytherin/:id', function(req, res) {
  var db = req.db;
  var collection = db.get('Slytherin');
  var userToDelete = req.params.id;

  res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
    
  collection.remove({ '_id' : userToDelete }, function(err) {
    res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
  });
});

module.exports = router;