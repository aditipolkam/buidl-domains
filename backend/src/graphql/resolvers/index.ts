import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    users: async () => {
      return prisma.user.findMany();
    },
    user: async (_: any, args: { address: string }) => {
      return prisma.user.findUnique({
        where: { user_address: args.address },
      });
    },
    user_by_name: async (_: any, args: { name: string }) => {
      return prisma.user.findFirst({
        where: { name: args.name },
      });
    },
  },
  Mutation: {
    update_user: async (
      _: any,
      args: {
        address: string;
        display_name?: string;
        bio?: string;
        profession?: string;
      }
    ) => {
      const { address, display_name, bio, profession } = args;

      return prisma.user.update({
        where: { user_address: address },
        data: {
          display_name,
          bio,
          profession,
        },
      });
    },
  },
};

export default resolvers;
