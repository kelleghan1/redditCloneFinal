
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_posts', function(table){

    table.integer('user_id').notNullable().references('users_table.id').onUpdate('CASCADE').onDelete('CASCADE');
    table.integer('post_id').notNullable().references('posts_table.id').onUpdate('CASCADE').onDelete('CASCADE');

  });
};


exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_posts');
};
