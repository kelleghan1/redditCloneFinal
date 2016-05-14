
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users_table').del(),

    // Inserts seed entries
    knex('users_table').insert({name: 'user1', email: 'user1@example.com', password: 'password'}),
    knex('users_table').insert({name: 'user2', email: 'user2@example.com', password: 'password'}),
    knex('users_table').insert({name: 'user3', email: 'user3@example.com', password: 'password'})
  );
};
