var express = require('express');
var router = express.Router();
const dt = require('../knex/tables');

router.get('/', function(req, res, next) {
  dt.Comments()
    .orderBy('id', 'desc')
    .then(function(comments){
      res.json(comments);
    });
});

router.post('/', function(req, res, next) {
  dt.Comments()
    .insert({
      author: req.body.author,
      comment: req.body.comment,
      date: new Date()
    }).returning('*')
    .then(function(response){
      res.json(response);
    });
});

router.delete('/:id', (req, res, next) =>{
  dt.Comments()
    .where({id: req.params.id})
    .del().returning('id')
    .then(response =>{
      res.json(response)
    })
    .catch(err =>{ next(new Error(err)) });
});

module.exports = router;