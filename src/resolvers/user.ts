import { getRepository } from "typeorm";
import { User } from "../models/user.entity";

export default {
  Query: {
    hello: (root, arg) => {
      return "hello!";
    },
    user: (_, { id }) => {
      const repository = getRepository(User);
      const user = repository.find({ id });

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
