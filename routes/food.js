var express = require('express');
var router = express.Router();
var foodDB = require('../db/food')
/* GET users listing. */
router.get('/', function(req, res) {
  foodDB.getFoodNotClaimed()
    .then(function(unclaimedFood){
      res.json({unclaimedFood}).status(200)
    })
    .catch(function(err){
      console.log(err);
      res.status(500)
    })
});

router.get('/:id', function(req, res){
  foodDB.getFoodById(req.params.id)
    .then(function(foodInfo){
      res.json({foodInfo}).status(200)
    })
    .catch(function(err){
      res.status(404)
    })
})

router.post('/', function(req, res){
  foodDB.addNewFood(req.body)
    .then(function(foodInfo){
      console.log(foodInfo);
      res.json({foodInfo}).status(201)
    })
    .catch(function(err){
      res.status(404)
    })
})
module.exports = router;
