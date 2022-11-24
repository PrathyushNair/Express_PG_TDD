import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('people', (table) => {
        table.increments();
        table.string('name').notNullable().unique();
        table.string('gender').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.integer('age').notNullable();
      });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('people');
}

