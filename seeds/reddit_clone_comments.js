
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('comments_table').del(),

    // Inserts seed entries
    knex('comments_table').insert({post_id: 1, comment: 'comment1'}),
    knex('comments_table').insert({post_id: 2, comment: 'comment2'}),
    knex('comments_table').insert({post_id: 3, comment: 'comment3'}),
    knex('comments_table').insert({post_id: 3, comment: 'comment4'})
  );
};
