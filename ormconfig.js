module.exports = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  database: "revhere",
  username: "postgres",
  password: "password",
  synchronize: true,
  entities: ["src/models/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/models",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber"
  }
};
