var express = require('express');
var router = express.Router();
var http = require('http')
var urls="http://192.168.99.100:8500"

router.get('/rest/Gryffindor', function(req, res) {
    var url = urls+"/Gryffindor";
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
    req.setTimeout(1000);
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
    var url = urls+"/Hufflepuff";
    console.log(url);
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
    req.setTimeout(1000);
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
    var url = urls+"/Ravenclaw";
    console.log(url);
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
    req.setTimeout(1000);
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
    var url = urls+"/Slytherin";
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
    let data='';
    req.setTimeout(1000);
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