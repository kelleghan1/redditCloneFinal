
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments_table', function(table){
    table.increments();
    table.string('comment');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments_table');
};
