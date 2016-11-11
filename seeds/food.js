
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('food').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('food').insert({companyName: 'Burger Fuel', logo:'https://pbs.twimg.com/profile_images/791038006220115968/Rn3F352i.jpg', item:'Lettuce', quantity:'7', pickUpBy:'11/11/11', address:'1223 cuba st'})

        knex('food').insert({companyName: 'Fidel Cafe', logo:'http://gaycities-listing-images-production.s3.amazonaws.com/medsq_restaurants-61116-Fidels-Cafe-1081f.jpg', item:'Burger Patties', quantity:'15', pickUpBy:'11/11/11', address:'111 cuba st'})

        knex('food').insert({companyName: 'Pravda', logo:'http://www.visawoap.com/site/uploads/2016/05/Pravda-Restaurant-Cafe_Hero-1024x680.jpg', item:'', quantity:'7', pickUpBy:'12/11/11', address:'12 Willis st'})

        knex('food').insert({companyName: 'The Hangar', logo:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRJTrmFTEfcK3ve4IsXJQ8Kw38oA-GKQ6O9sZFAjqVHU7PUv3VF', item:'Cheese Scones', quantity:'25', pickUpBy:'13/11/11', address:'133 zzz st'})

        knex('food').insert({companyName: 'El Matador', logo:'http://gasproject.co.nz/wp-content/uploads/2012/06/Matador-logo-black-red.jpg', item:'Lettuce', quantity:'7', pickUpBy:'14/11/11', address:'13 xxx st'})

        knex('food').insert({companyName: 'Olive', logo:'http://www.wellingtonnz.com/assets/Uploads/images/listings-eatanddrink/4fc45c0e27fdc67822d999a5fbb3032a.jpg', item:'Lettuce', quantity:'7', pickUpBy:'15/11/11', address:'23 Aro st'})
      ]);
    });
};
