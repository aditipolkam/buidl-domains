import { ethers } from "ethers";
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
