const NODE_ENV = process.env.NODE_ENV || "production";

if (NODE_ENV !== "production") {
  module.exports = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    database: "revhere_development",
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
} else {
  module.exports = {
    type: "postgres",
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
    synchronize: false,
    entities: ["src/models/*.ts"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    cli: {
      entitiesDir: "src/models",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber"
    }
  };
}
