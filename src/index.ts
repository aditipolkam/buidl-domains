import { ethers } from "ethers";
import {
  CONTRACT_ADDRESS,
  OFFLINE_CONTRACT_ABI,
  SEPOLIA_RPC,
} from "./config/constants";
// import { handleDeposit, handleWithdraw } from "./services/balance-tracker";
const provider = new ethers.JsonRpcProvider(SEPOLIA_RPC);
const contract = new ethers.Contract(
  CONTRACT_ADDRESS,
  OFFLINE_CONTRACT_ABI,
  provider
);

async function main() {
  contract.on("Register", async (from, value) => {
    console.log(from, value);
  });

  contract.on("*", async (event) => {
    console.log(event);
  });
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
