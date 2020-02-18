import { getRepository } from "typeorm";
import { User } from "../models/user.entity";

export default {
  //comment
  Query: {
    hello: (root, arg) => {
      return "hello we deploy to circle ci";
    },
    users: async () => {
      const repository = getRepository(User);
      const users = await repository.find({});

      return users;
    },
    user: async (_, { id }) => {
      const repository = getRepository(User);
      const user = await repository.findOne({ id });
      return user;
    }
  },
  Mutation: {
    register: (_, { email, name, role = "user" }) => {
      const repository = getRepository(User);
      const user = repository.create({
        email,
        name,
        role
      });
      user.save();

      return user;
    }
  }
};
