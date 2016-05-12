
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('posts_table').del(),

    // Inserts seed entries
    knex('posts_table').insert({author_id: 1, title: 'title1', date: '1/6/16', image: 'http://placehold.it/350x150'}),
    knex('posts_table').insert({author_id: 2, title: 'title2', date: '1/5/16', image: 'http://placehold.it/350x150'}),
    knex('posts_table').insert({author_id: 3, title: 'title3', date: '1/1/16', image: 'http://placehold.it/350x150'}),
    knex('posts_table').insert({author_id: 3, title: 'title4', date: '1/3/16', image: 'http://placehold.it/350x150'})
  );
};
