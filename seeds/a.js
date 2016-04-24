'use strict';
const Faker = require('faker');

let fakeComments = [];

exports.seed = function(knex, Promise) {
    for (var i = 1; i <= 10; i++) {
      const author = Faker.name.firstName();
      const comment = Faker.lorem.sentence();
      fakeComments.push({
        author,
        comment
      })
    }
    return Promise.join (
      knex('comments').del(),
      knex('comments')
        .insert(fakeComments)
        .then(function(){
          process.exit(0);
        })
    )
};


