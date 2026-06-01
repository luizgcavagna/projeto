import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("service_providers").del();

    // Inserts seed entries
    await knex("service_providers").insert([
        { name: "Luiz Gustavo Cavagna", phone: "1699999-9999", city_id: 1, category_id: 2, description: "Hello World!" },
        { name: "Welington", phone: "1699999-9999", city_id: 1, category_id: 2, description: "Hello World!" },
        { name: "Matheus", phone: "1699999-9999", city_id: 1, category_id: 1, description: "Hello World!" }
    ]);
};
