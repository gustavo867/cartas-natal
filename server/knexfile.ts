import path from "path";

module.exports = {
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "docker",
    database: "cartas",
    port: "5432" as any,
  },
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "migrations"),
  },
  useNullAsDefault: true,
};
