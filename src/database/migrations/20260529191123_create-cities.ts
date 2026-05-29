import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("cities", (table) => {
    table.increments("id").primary(),
    table.text("name").notNullable(),
    table.integer("state_id").notNullable().references("id").inTable("states")
  });
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("cities");
}
