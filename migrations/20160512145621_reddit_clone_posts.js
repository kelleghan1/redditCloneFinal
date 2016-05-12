
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts_table', function(table){
    table.increments();
    table.string('author_id');
    table.string('title');
    table.string('date');
    table.string('image');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts_table');
};
