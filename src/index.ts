import "dotenv/config";
import { createConnection } from "typeorm";
import cors from "cors";
import morgan from "morgan";
import jwt from "jsonwebtoken";
import express from "express";
import { createServer } from "http";
import { ApolloServer, AuthenticationError } from "apollo-server-express";

// import schema from "./schema";
// import resolvers from "./resolvers";

const startServer = async () => {
  const app = express();

  app.use(cors());

  app.use(morgan("dev"));

  // const getMe = async req => {
  //   const auth = req.headers && req.headers.authorization || '';

  //   if (token) {
  //     try {
  //       return await jwt.verify(token, process.env.SECRET);
  //     } catch (e) {
  //       throw new AuthenticationError("Your session expired. Sign in again.");
  //     }
  //   }
  // };

  await createConnection();

  const server = new ApolloServer({
    introspection: true,
    playground: true,
    typeDefs: schema,
    resolvers
    // formatError: error => {
    //   // remove the internal sequelize error message
    //   // leave only the important validation error
    //   const message = error.message
    //     .replace("SequelizeValidationError: ", "")
    //     .replace("Validation error: ", "");

    //   return {
    //     ...error,
    //     message
    //   };
    // },
    // context: async ({ req, connection }) => {
    //   if (connection) {
    //     return {
    //       models,
    //       loaders: {
    //         user: new DataLoader(keys => loaders.user.batchUsers(keys, models))
    //       }
    //     };
    //   }

    //   if (req) {
    //     const me = await getMe(req);

    //     return {
    //       models,
    //       me,
    //       secret: process.env.SECRET,
    //       loaders: {
    //         user: new DataLoader(keys => loaders.user.batchUsers(keys, models))
    //       }
    //     };
    //   }
    // }
  });

  server.applyMiddleware({ app, path: "/graphql" });

  const isTest = !!process.env.TEST_DATABASE;
  const isProduction = !!process.env.DATABASE_URL;
  const port = process.env.PORT || 8000;

  const httpServer = createServer(app);
  httpServer.listen({ port }, (): void =>
    console.log(
      `\n🚀      GraphQL is now running on http://localhost:${port}/graphql`
    )
  );
};

startServer();
