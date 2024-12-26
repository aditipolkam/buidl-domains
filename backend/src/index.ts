import { ethers } from "ethers";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import {
  CONTRACT_ADDRESS,
  OFFLINE_CONTRACT_ABI,
  RPC,
} from "./config/constants";
import userService from "./services/user.service";

const provider = new ethers.JsonRpcProvider(RPC);
const contract = new ethers.Contract(
  CONTRACT_ADDRESS,
  OFFLINE_CONTRACT_ABI,
  provider
);

async function main() {
  contract.on("Register", async (from, tokenid, name, event) => {
    userService.handleRegister(from, tokenid, name, event);
  });

  // contract.on("*", async (event) => {
  //   console.log(event);
  // });
}

// Start the server
async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀 Server ready at ${url}`);
}

startServer().catch((error) => {
  console.error(error);
  process.exit(1);
});

main()
  .then(() => {
    console.info(
      "Event Listener is listening to contract at:",
      CONTRACT_ADDRESS
    );
  })
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
