import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    domains: async () => {
      return prisma.domain.findMany();
    },
    domain: async (_: any, args: { address: string }) => {
      return prisma.domain.findUnique({
        where: { address: args.address },
      });
    },
    domain_by_name: async (_: any, args: { name: string }) => {
      return prisma.domain.findFirst({
        where: { name: args.name },
      });
    },
  },
  Mutation: {
    update_metadata: async (
      _: any,
      args: {
        address: string;
        display_name?: string;
        bio?: string;
        profession?: string;
      }
    ) => {
      const { address, display_name, bio, profession } = args;
      console.log("here");
      return prisma.domain.update({
        where: { address: address },
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
