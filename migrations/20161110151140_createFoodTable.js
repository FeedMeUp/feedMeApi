
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('food', function(table){
    table.increments('id').primary
    table.string('companyName')
    table.string('logo')
    table.string('item')
    table.integer('quantity')
    table.string('pickUpBy')
    table.string('address')
    table.boolean('claimed').defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('food')
};
