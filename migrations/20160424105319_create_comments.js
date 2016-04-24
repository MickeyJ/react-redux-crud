
exports.up = (knex, Promise) => (
  knex.schema.createTable('comments', table =>{
    table.increments('id');
    table.string('author');
    table.string('comment');
    table.timestamp('date')
  })
);

exports.down = (knex, Promise) => (
  knex.schema.dropTable('comments')
);
