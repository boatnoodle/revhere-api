module.exports = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  database: "revhere",
  username: "postgres",
  password: "password",
  synchronize: true,
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber"
  }
};
