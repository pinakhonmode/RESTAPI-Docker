var objId = require('mongodb').ObjectID;  

module.exports = function (app, db) { 

  app.get('/Gryffindor/:id', (req, res) => {
    const id = req.params.id;
    const stud_details = { '_id': new objId(id) }
    db.collection('Gryffindor').findOne(stud_details, (err, item) => {
      res.header("Access-Control-Allow-Origin","*")
      res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
      if (err) {
        res.send({ 'error': 'ERROR!!' });
      } else {
        res.send(item)
      }
    });
  });

  app.get('/Hufflepuff/:id', (req, res) => {
    const id = req.params.id;
    const stud_details = { '_id': new objId(id) }
    db.collection('Hufflepuff').findOne(stud_details, (err, item) => {
      res.header("Access-Control-Allow-Origin","*")
      res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
      if (err) {
        res.send({ 'error': 'ERROR!!' });
      } else {
        res.send(item)
      }
    });
  });

  app.get('/Ravenclaw/:id', (req, res) => {
    const id = req.params.id;
    const stud_details = { '_id': new objId(id) }
    db.collection('Ravenclaw').findOne(stud_details, (err, item) => {
      res.header("Access-Control-Allow-Origin","*")
      res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
      if (err) {
        res.send({ 'error': 'ERROR!!' });
      } else {
        res.send(item)
      }
    });
  });

  app.get('/Slytherin/:id', (req, res) => {
    const id = req.params.id;
    const stud_details = { '_id': new objId(id) }
    db.collection('Slytherin').findOne(stud_details, (err, item) => {
      res.header("Access-Control-Allow-Origin","*")
      res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
      if (err) {
        res.send({ 'error': 'ERROR!!' });
      } else {
        res.send(item)
      }
    });
  });

  app.get('/Gryffindor', (req, res) => {
    db.collection('Gryffindor').find().toArray(function (err, item) {
      res.header("Access-Control-Allow-Origin","*")
      res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
        if (err) {
        res.send({ 'error': 'ERROR!!' });
      } else {
        res.send(item);
      }
    });
  });
  app.get('/Hufflepuff', (req, res) => {
    db.collection('Hufflepuff').find().toArray(function (err, item) {
      res.header("Access-Control-Allow-Origin","*")
      res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
        if (err) {
        res.send({ 'error': 'ERROR!!' });
      } else {
        res.send(item);
      }
    });
  });
  app.get('/Ravenclaw', (req, res) => {
    db.collection('Ravenclaw').find().toArray(function (err, item) {
      res.header("Access-Control-Allow-Origin","*")
      res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
        if (err) {
        res.send({ 'error': 'ERROR!!' });
      } else {
        res.send(item);
      }
    });
  });
  app.get('/Slytherin', (req, res) => {
    db.collection('Slytherin').find().toArray(function (err, item) {
      res.header("Access-Control-Allow-Origin","*")
      res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
        if (err) {
        res.send({ 'error': 'ERROR!!' });
      } else {
        res.send(item);
      }
    });
  });

  app.post('/Gryffindor', (req, res) => {
    const stud_details = { name: req.body.name, age: req.body.age,gender: req.body.gender  };
    res.header("Access-Control-Allow-Origin","*")
      res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
    db.collection('Gryffindor').insert(stud_details, (err, result) => {
      if (err) {
        res.send({ 'error': 'ERROR!!' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
 
/* POST add to Hufflepuff. */
app.post('/Hufflepuff', (req, res) => {
  const stud_details = { name: req.body.name, age: req.body.age,gender: req.body.gender  };
  res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
  db.collection('Hufflepuff').insert(stud_details, (err, result) => {
    if (err) {
      res.send({ 'error': 'ERROR!!' });
    } else {
      res.send(result.ops[0]);
    }
  });
});
/* POST add to Ravenclaw. */
app.post('/Ravenclaw', (req, res) => {
  const stud_details = { name: req.body.name, age: req.body.age,gender: req.body.gender  };
  res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
  db.collection('Ravenclaw').insert(stud_details, (err, result) => {
    if (err) {
      res.send({ 'error': 'ERROR!!' });
    } else {
      res.send(result.ops[0]);
    }
  });
});
/* POST add to Slytherin. */
app.post('/Slytherin', (req, res) => {
  const stud_details = { name: req.body.name, age: req.body.age,gender: req.body.gender  };
  res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
  db.collection('Slytherin').insert(stud_details, (err, result) => {
    if (err) {
      res.send({ 'error': 'ERROR!!' });
    } else {
      res.send(result.ops[0]);
    }
  });
});

/* DELETE to deleteGryffindor. */
app.delete('/Gryffindor/:id', (req, res) => {
  const id = req.params.id;
  const stud_details = { '_id': new objId(id) };
  res.header("Access-Control-Allow-Origin","*")
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
  db.collection('Gryffindor').remove(stud_details, (err, item) => {
    if (err) {
      res.send({ 'error': 'ERROR!!' });
    } else {
      res.send('Gryffindor ' + id + ' deleted!');
    }
  });
});

/* DELETE to deleteHufflepuff. */
app.delete('/Hufflepuff/:id', (req, res) => {
  const id = req.params.id;
  const stud_details = { '_id': new objId(id) };
  res.header("Access-Control-Allow-Origin","*")
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
  db.collection('Hufflepuff').remove(stud_details, (err, item) => {
    if (err) {
      res.send({ 'error': 'ERROR!!' });
    } else {
      res.send('Hufflepuff ' + id + ' deleted!');
    }
  });
});
/* DELETE to deleteRavenclaw. */
app.delete('/Ravenclaw/:id', (req, res) => {
  const id = req.params.id;
  const stud_details = { '_id': new objId(id) };
  res.header("Access-Control-Allow-Origin","*")
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
  db.collection('Ravenclaw').remove(stud_details, (err, item) => {
    if (err) {
      res.send({ 'error': 'ERROR!!' });
    } else {
      res.send('Ravenclaw ' + id + ' deleted!');
    }
  });
});
/* DELETE to deleteSlytherin. */
app.delete('/Slytherin/:id', (req, res) => {
  const id = req.params.id;
  const stud_details = { '_id': new objId(id) };
  res.header("Access-Control-Allow-Origin","*")
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
  db.collection('Slytherin').remove(stud_details, (err, item) => {
    if (err) {
      res.send({ 'error': 'An error has occurred' });
    } else {
      res.send('Slytherin ' + id + ' deleted!');
    }
  });
});
};