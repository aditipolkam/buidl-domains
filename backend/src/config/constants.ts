import { config } from "dotenv";
import abi from "../data/abi.json";
config();

export const RPC = process.env["RPC"] as string;
export const CONTRACT_ADDRESS = process.env["CONTRACT_ADDRESS"] as string;
export const CONTRACT_ABI = abi;
