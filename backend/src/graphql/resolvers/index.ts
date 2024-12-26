import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    users: async () => {
      return prisma.user.findMany();
    },
    user: async (_: any, args: { id: number }) => {
      return prisma.user.findUnique({
        where: { id: args.id },
      });
    },
  },
};

export default resolvers;
