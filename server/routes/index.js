const express = require('express');
const router = express.Router();
const db = require('../dbconnection');

router.get('/api', (req, res) => {
  res.json({username:'bryan'})
});

router.get('/test',(req, res) => {
  db.query("select * from list",(err,rows) => {
    if(!err){
      res.send(rows);
      console.log(rows);
    }else{
      console.log("err: ${err}");

      res.send(err);
    }
  })
})

module.exports = router;