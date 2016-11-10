var request = require('supertest');

request('http://localhost:3000')
  .get('/api/v1/food')

  .end(function(err, res) {
    if (!err) console.log(res.body)

  });

  request('http://localhost:3000')
    .get('/api/v1/food/2')

    .end(function(err, res) {
      if (!err) console.log(res.body)

    });

  request('http://localhost:3000')
    .post('/api/v1/food')
    .send({ companyName: 'Burger Fuel',
             logo: 'https://pbs.twimg.com/profile_images/791038006220115968/Rn3F352i.jpg',
             item: 'Lettuce',
             quantity: 7,
             pickUpBy: '11/11/11',
             address: '1223 cuba st'})


    .end(function(err, res) {
      if (!err) console.log(res.body)

    });
