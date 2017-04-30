exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('users', function(table) {
            table.increments('id').primary();
            table.string('name');
            table.string('email');
            table.string('password');

            table.timestamps();
        }),

        knex.schema.createTable('favorites', function(table){
            table.string('id').primary();
            table.string('title');
            table.string('poster_path');
            table.string('release_date');
            table.string('vote_average');
            table.string('overview');
            table.integer('movie_id')
            table.integer('user_id')
                 .references('id')
                 .inTable('users');

            table.timestamps();
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('users'),
        knex.schema.dropTable('favorites')
    ])
};