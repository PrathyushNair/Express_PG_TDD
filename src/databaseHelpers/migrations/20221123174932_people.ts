import { Knex } from 'knex'

export async function up (knex: Knex): Promise<void> {
  return (await knex.schema.createTable('people', (table) => {
    table.increments()
    table.string('name').notNullable().unique()
    table.string('gender').notNullable()
    table.string('email').notNullable().unique
    table.string('password').notNullable()
    table.integer('age').notNullable()
  })

  )
}

export async function down (knex: Knex): Promise<void> {
  return await knex.schema.dropTable('people')
}
