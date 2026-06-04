import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("states").del();

    // Inserts seed entries
    await knex("states").insert([
        { name: "São Paulo", acronym: "SP" },
    ]);
};
