import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("states", (table) => {
    table.increments("id").primary(),
    table.text("name").notNullable(),
    table.text("acronym").notNullable()
  });
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("states");
}

