
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_table', function(table){
    table.increments();
    table.string('name');
    table.string('email');
    table.string('password');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_table');
};
