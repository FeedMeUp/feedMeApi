var express = require('express');
var router = express.Router();
var foodDB = require('../db/food')
/* GET users listing. */
router.get('/', function(req, res) {
  foodDB.getFoodNotClaimed()
    .then(function(unclaimedFood){
      res.json({unclaimedFood}).status(200)
    })
    .catch(err){
      res.status(500)
    }
});

router.get('/:id', function(req, res){
  foodDB.getFoodById(id){
    .then(function(foodInfo){
      res.json({foodInfo}).status(200)
    })
    .catch(err){
      res.status(404)
    }
  }
})

router.post('/', function(req, res){
  foodDB.addNewFood(foodInfo){
    .then(function(foodInfo){
      res.json({foodInfo}).status(201)
    })
    .catch()
  }

})
module.exports = router;
