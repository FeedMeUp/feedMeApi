
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('food').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('food').insert({companyName: 'Burger Fuel', logo:'https://pbs.twimg.com/profile_images/791038006220115968/Rn3F352i.jpg', item:'Lettuce', quantity:'7', pickUpBy:'11/11/11', address:'1223 cuba st'})
        knex('food').insert({companyName: 'Fidel Cafe', logo:'', item:'Burger Patties', quantity:'15', pickUpBy:'11/11/11', address:'111 cuba st'})
        knex('food').insert({companyName: 'Pravda', logo:'', item:'Lettuce', quantity:'7', pickUpBy:'12/11/11', address:'12 Willis st'})
        knex('food').insert({companyName: 'The Hanger', logo:'', item:'Lettuce', quantity:'7', pickUpBy:'13/11/11', address:'133 zzz st'})
        knex('food').insert({companyName: 'El Matador', logo:'', item:'Lettuce', quantity:'7', pickUpBy:'14/11/11', address:'13 xxx st'})
        knex('food').insert({companyName: 'Olive', logo:'', item:'Lettuce', quantity:'7', pickUpBy:'15/11/11', address:'23 Aro st'})
      ]);
    });
};
