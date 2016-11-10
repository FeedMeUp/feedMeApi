var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']

var knex = Knex(knexConfig)

function getFoodNotClaimed (){
  return knex('food').where('claimed', false)
}

function getFoodById(id){
  return knex('food').where('id', id)
}

function addNewFood(foodInfo){
  return knex('food').insert(foodInfo)
}
module.exports = {
  getFoodNotClaimed,
  getFoodById,
  addNewFood
}
