import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("letters", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("city").notNullable();
    table.string("state").notNullable();
    table.string("letter").notNullable();
    table.string("whatsapp").notNullable();
    table.string("email").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("letters");
}
