var express = require('express');
var router = express.Router();
var http = require('http')
var urls="http://localhost:3000"

router.get('/rest/Gryffindor', function(req, res) {
    var url = urls+"/users/Gryffindor";
    console.log(url);
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
      
    let data='';
     http.get(url,(resp)=>{
      resp.on('data',(chunk)=>{
        data+=chunk;
      });
      
      resp.on('end',()=>{
        res.send(JSON.parse(data))
      })
     });  
  });

  router.get('/rest/Hufflepuff', function(req, res) {
    var url = urls+"/users/Hufflepuff";
    console.log(url);
    res.header("Access-Control-Allow-Origin","*")
      res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
      
    let data='';
     http.get(url,(resp)=>{
      resp.on('data',(chunk)=>{
        data+=chunk;
      });
      
      resp.on('end',()=>{
        res.send(JSON.parse(data))
      })
     });  
  });
  
  router.get('/rest/Ravenclaw', function(req, res) {
    var url = urls+"/users/Ravenclaw";
    console.log(url);
    res.header("Access-Control-Allow-Origin","*")
      res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
      
    let data='';
     http.get(url,(resp)=>{
      resp.on('data',(chunk)=>{
        data+=chunk;
      });
      
      resp.on('end',()=>{
        res.send(JSON.parse(data))
      })
     });  
  });

  router.get('/rest/Slytherin', function(req, res) {
    var url = urls+"/users/Slytherin";
    res.header("Access-Control-Allow-Origin","*")
      res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
      
    console.log(url);
    let data='';
     http.get(url,(resp)=>{
      resp.on('data',(chunk)=>{
        data+=chunk;
      });
      
      resp.on('end',()=>{
        res.send(JSON.parse(data))
      })
     });  
  });

  module.exports = router;