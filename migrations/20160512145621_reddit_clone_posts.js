
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts_table', function(table){
    table.increments();
    table.string('title');
    table.string('date');
    table.string('description');
    table.string('image');
    table.integer('score');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts_table');
};
