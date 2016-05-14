exports.seed = function(knex, Promise) {

  return Promise.join(
    knex('posts_comments').insert([
      { comment_id: 1, post_id: 1 },
      { comment_id: 2, post_id: 2 },
      { comment_id: 3, post_id: 4 },
      { comment_id: 4, post_id: 4 },
      { comment_id: 5, post_id: 4 },
      { comment_id: 6, post_id: 4 }
    ])
  );

};
