
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('comments_table').del(),

    // Inserts seed entries
    knex('comments_table').insert({ comment: 'This is a comment1'}),
    knex('comments_table').insert({ comment: 'This is a comment2'}),
    knex('comments_table').insert({ comment: 'This is a comment3'}),
    knex('comments_table').insert({ comment: 'This is a comment4'}),
    knex('comments_table').insert({ comment: 'This is a comment5'}),
    knex('comments_table').insert({ comment: 'This is a comment6'})
  );
};
