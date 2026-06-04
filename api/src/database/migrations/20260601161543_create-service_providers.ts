import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("service_providers", (table) => {
    table.increments("id").primary(),
    table.string("name").notNullable(),
    table.string('phone').notNullable(),
    table.integer("city_id").notNullable().references("id").inTable("cities"),
    table.integer("category_id").notNullable().references("id").inTable("categories"),
    table.text("description"),
    table.timestamp("created_at").defaultTo(knex.fn.now()),
    table.timestamp("updated_at").defaultTo(knex.fn.now()),
    table.timestamp("deleted_at"),
    table.index(["city_id", "category_id"])
  });
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("service_providers");
}

