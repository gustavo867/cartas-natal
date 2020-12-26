import knex from "knex";

const db = knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "docker",
    database: "cartas",
    port: "5432" as any,
  },
  useNullAsDefault: true,
});

export default db;
