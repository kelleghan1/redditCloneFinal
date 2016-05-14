
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts_comments', function(table){

    table.integer('post_id').notNullable().references('posts_table.id').onUpdate('CASCADE').onDelete('CASCADE');
    table.integer('comment_id').notNullable().references('comments_table.id').onUpdate('CASCADE').onDelete('CASCADE');

  });
};


exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts_comments');
};
