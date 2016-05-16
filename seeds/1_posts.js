
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('posts_table').del(),

    // Inserts seed entries
    knex('posts_table').insert({ title: 'title1', date: '1/6/16', description: 'This is a description1', image: 'http://placehold.it/350x150', score: 0}),
    knex('posts_table').insert({ title: 'title2', date: '1/6/16', description: 'This is a description2', image: 'http://placehold.it/350x150', score: 0}),
    knex('posts_table').insert({ title: 'title3', date: '1/6/16', description: 'This is a description3', image: 'http://placehold.it/350x150', score: 0}),
    knex('posts_table').insert({ title: 'title4', date: '1/6/16', description: 'This is a description4', image: 'http://placehold.it/350x150', score: 0})
  );
};
